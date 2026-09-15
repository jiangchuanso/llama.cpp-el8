# llama-cpu RPM

面向 EL8 及其兼容系统（CentOS / Rocky / AlmaLinux 8、麒麟高级服务器 V10）的
预编译 CPU 版 [llama.cpp](https://github.com/jiangchuanso/llama.cpp-zh-el8) 推理服务。

本包把二进制**以及**它们配套的 C++ 运行库（`libstdc++.so.6`、`libgomp.so.1`）一起
放在 `/opt/llama-cpu` 下，通过 `$ORIGIN` rpath 加载，因此不依赖宿主机的 `libstdc++`
版本。这正是对接麒麟 V10 的关键——麒麟的 `libstdc++` 只到 `GLIBCXX_3.4.24`，而本包
自带的是 `3.4.25`，靠 $ORIGIN 自包含解决了版本不兼容。

## 目录结构

| 路径 | 内容 |
| ---- | ------- |
| `/opt/llama-cpu/bin/` | `llama-server`、`llama-cli`、`llama-bench`、`libllama*.so`、`libggml*.so`，以及随包带的 `libstdc++.so.6` / `libgomp.so.1` |
| `/usr/bin/llama-*` | 指向 `/opt/llama-cpu/bin` 的软链接 |
| `/etc/sysconfig/llama-cpu` | `LLAMA_SERVER_OPTS`，服务启动命令行 |
| `/etc/llama-cpu/models.ini` | 路由模式的模型 preset（`--models-preset` 指向的文件，必须存在） |
| `/usr/lib/systemd/system/llama-server.service` | systemd 单元文件 |
| `/var/lib/llama-cpu/` | 服务家目录，可写（模型放在 `models/` 下） |

## 安装

```sh
sudo rpm -ivh llama-cpu-*.el8.*.rpm
# 或者升级到新版本
sudo rpm -Uvh llama-cpu-*.el8.*.rpm
```

本包**不写任何全局库路径**：运行库只放在 `/opt/llama-cpu/bin` 下，由同目录的二进制通过
`$ORIGIN` rpath 加载，不写 `/usr/lib64`、不改 `/etc/ld.so.conf`、不需要 `LD_LIBRARY_PATH`。

spec 里用 `AutoReqProv: no` 关闭了自动依赖扫描，因此包内既**不依赖**、也**不宣告**
`libstdc++.so.6` / `libgomp.so.1`，只声明 `glibc >= 2.28` 与 `systemd`。如果用 `dnf`
安装时报缺失运行库的错，那是打包 bug，请用 `rpm -qp --requires <file.rpm>` 把依赖列表
反馈上来。

## 配置

```sh
sudo cp ~/model.gguf /var/lib/llama-cpu/models/
sudo chown llama-cpu:llama-cpu /var/lib/llama-cpu/models/model.gguf
sudoedit /etc/sysconfig/llama-cpu
```

服务默认以**路由模式**启动（`--models-dir` + `--models-preset`）：`models/` 目录下的每个
`.gguf` 自动注册为一个模型，模型 id 就是文件名去掉 `.gguf` 后缀。请求通过 `"model"`
字段选择模型，首次请求时按需加载，驻留数超过 `--models-max`（默认 4）时按 LRU 自动卸载：

```sh
LLAMA_SERVER_OPTS="--host 0.0.0.0 --port 8080 \
  --models-dir /var/lib/llama-cpu/models \
  --models-preset /etc/llama-cpu/models.ini \
  --models-max 4"
```

`--models-preset` 指向的文件**必须存在**，否则服务启动即失败；包内已自带
`/etc/llama-cpu/models.ini`（`%config(noreplace)`，升级不会覆盖你的修改）。需要给某个
模型单独设置 ctx / 线程 / 预加载（`load-on-startup`）时，在 ini 里加一个以模型 id 命名的
小节即可。模型目录为空也能启动，只是 `/v1/models` 列表为空。

要退回**单模型模式**，把 `-m /var/lib/llama-cpu/models/model.gguf` 加回
`LLAMA_SERVER_OPTS` 即可。

完整参数请用 `/opt/llama-cpu/bin/llama-server --help` 查看。模板已覆盖：模型、CPU/线程、
上下文与 KV 缓存类型、采样默认值、API 密钥、CORS、TLS、监控指标、embeddings/reranking、
日志。

**默认即启用**的选项刻意未列出（连续批处理、`--jinja`、`--warmup`、`--slots`、
`--cache-prompt`、多模态自动加载、Web UI 等）。若确需关闭其中某项，传对应的 `--no-<opt>`。

每个 flag 也都有对应的 `LLAMA_ARG_*` 环境变量形式，例如 `-c/--ctx-size` 等价于
`LLAMA_ARG_CTX_SIZE`。

## 运行

```sh
sudo systemctl enable --now llama-server
systemctl status llama-server
journalctl -u llama-server -f
```

本 RPM **故意不**随包启用服务：先往 `/var/lib/llama-cpu/models/` 放入至少一个模型
（空目录也能启动，但没有任何模型可用）。服务失败会自动重启，但 60 秒内重试 5 次仍失败
就放弃，避免错误配置造成无限重启风暴。

## 验证

```sh
curl -s http://127.0.0.1:8080/health
curl -s http://127.0.0.1:8080/v1/models   # 路由模式：列出 models/ 下发现的模型
# 设置了 API key 时：
curl -s -H "Authorization: Bearer <key>" http://127.0.0.1:8080/v1/models
```

一次对话补全（路由模式下 `"model"` 必填，填文件名去掉 `.gguf` 后缀的 id）：

```sh
curl -s http://127.0.0.1:8080/v1/chat/completions \
  -H 'Content-Type: application/json' \
  -d '{"model":"Qwen3-8B-Q8_0","messages":[{"role":"user","content":"hello"}],"max_tokens":32}'
```

Web UI 地址为 `http://<host>:8080/`（已内置中文界面）。不用的话加 `--no-webui` 关闭。

## 安全

除非设置 `--api-key`，否则 API **没有任何鉴权**。绑定 `0.0.0.0` 会把服务暴露给整个网络——
在共享或不可信网络中请务必设置 API key，或者只绑定 `127.0.0.1` 再用反向代理前置。

单元文件已启用 `NoNewPrivileges`、`PrivateTmp`、`ProtectSystem=full` 与
`ProtectHome=read-only`。若模型放在 `/var/lib/llama-cpu` 之外，记得在单元文件里把该目录
加入 `ReadOnlyPaths=`。

## 升级 / 卸载

```sh
sudo rpm -Uvh llama-cpu-<new>.rpm   # /etc/sysconfig 下的配置保留（noreplace）
sudo rpm -e llama-cpu               # 保留 /var/lib/llama-cpu 及其模型
```
