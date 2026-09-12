/**
 * Simplified Chinese (zh-CN) translations.
 *
 * Keys are the English source strings used in the UI, which makes it easy to
 * add entries incrementally: copy the English text from a component and provide
 * the translation. Missing entries fall back to English automatically.
 */

export const ZH_CN: Record<string, string> = {
	// ── Settings sections ────────────────────────────────────────────────────
	Agentic: '智能体',
	Developer: '开发者',
	Display: '显示',
	General: '通用',
	'Import/Export': '导入/导出',
	'Sampling & Penalties': '采样与惩罚',
	Tools: '工具',

	// ── Language (new) ───────────────────────────────────────────────────────
	Language: '语言',
	'Auto': '自动',
	'Choose the interface language. "Auto" follows your browser language.':
		'选择界面语言。“自动”会跟随浏览器语言。',

	// ── General ──────────────────────────────────────────────────────────────
	Theme: '主题',
	'Choose the color theme for the interface. You can choose between System (follows your device settings), Light, or Dark.':
		'选择界面配色主题：跟随系统（使用设备设置）、浅色或深色。',
	System: '跟随系统',
	Light: '浅色',
	Dark: '深色',
	'API Key': 'API 密钥',
	'System Message': '系统消息',
	'The starting message that defines how model should behave.': '定义模型行为方式的起始消息。',
	'Show system message': '显示系统消息',
	'Display the system message at the top of each conversation.': '在每个对话顶部显示系统消息。',
	'Paste long text to file length': '长文本转文件长度',
	'On pasting long text, it will be converted to a file. You can control the file length by setting the value of this parameter. Value 0 means disable.':
		'粘贴长文本时会自动转为文件。可通过此参数控制文件长度，0 表示禁用。',
	'Send message on Enter': '回车发送消息',
	'Use Enter to send messages and Shift + Enter for new lines. When disabled, use Ctrl/Cmd + Enter.':
		'使用回车发送消息，Shift + 回车换行。关闭后使用 Ctrl/Cmd + 回车发送。',
	'Show microphone on empty input': '输入为空时显示麦克风',
	'Automatically show microphone button instead of send button when textarea is empty for models with audio modality support.':
		'当模型支持音频且输入框为空时，自动显示麦克风按钮而不是发送按钮。',
	'Enable "Continue" button': '启用“继续”按钮',
	'Enable "Continue" button for assistant messages, including reasoning models.':
		'为助手消息启用“继续”按钮（含推理模型）。',
	'Conversation title': '对话标题',
	'Choose how conversation titles are generated. The first non-empty line uses a fast deterministic rule; the LLM option uses a model-generated title from the first message exchange.':
		'选择对话标题的生成方式：首个非空行使用快速的确定性规则；LLM 选项则根据首轮对话由模型生成标题。',
	'Use first non-empty line for the conversation title': '使用首个非空行作为对话标题',
	'Generate title with LLM': '使用 LLM 生成标题',
	'LLM title generation prompt': 'LLM 标题生成提示词',
	'Optional template for the title generation prompt. Use {{USER}} for the user message and {{ASSISTANT}} for the assistant message.':
		'标题生成提示词的可选模板。使用 {{USER}} 表示用户消息，{{ASSISTANT}} 表示助手消息。',
	'Copy text attachments as plain text': '将文本附件作为纯文本复制',
	'When copying a message with text attachments, combine them into a single plain text string instead of a special format that can be pasted back as attachments.':
		'复制带文本附件的消息时，合并为单个纯文本字符串，而非可再次粘贴为附件的特殊格式。',
	'Parse PDF as image': '将 PDF 解析为图像',
	'Parse PDF as image instead of text. Automatically falls back to text processing for non-vision models.':
		'将 PDF 解析为图像而非文本。对不支持视觉的模型会自动回退到文本处理。',
	'Maximum image resolution (megapixels)': '最大图像分辨率（百万像素）',
	'Images larger than this will be resized before sending to server. Set to 0 to disable.':
		'超过此值的图像在发送到服务器前会被缩放，设为 0 表示禁用。',

	// ── Display ──────────────────────────────────────────────────────────────
	'Show message generation statistics': '显示消息生成统计',
	'Display generation statistics (tokens/second, token count, duration) below each assistant message.':
		'在每条助手消息下方显示生成统计（token/秒、token 数、耗时）。',
	'Show statistics for individual agentic turns': '显示每个智能体轮次的统计',
	'Display per-turn statistics (tokens, duration) under each turn in agentic responses. Shown only when "Show message generation statistics" is enabled.':
		'在智能体响应的每个轮次下显示统计（token、耗时）。仅在启用“显示消息生成统计”时显示。',
	'Show thought in progress': '生成中显示思考过程',
	'Expand thought process by default when generating messages.': '生成消息时默认展开思考过程。',
	'Always show tool call content': '始终显示工具调用内容',
	'Automatically expand tool call details while executing and keep them expanded after completion.':
		'执行时自动展开工具调用详情，并在完成后保持展开。',
	'Render user content as Markdown': '将用户内容渲染为 Markdown',
	'Render user messages using markdown formatting in the chat. Turn this off to keep a message exactly as typed; @-mention badges show either way.':
		'在聊天中按 Markdown 格式渲染用户消息。关闭后将完全保持输入原样；无论如何仍会显示 @ 提及徽标。',
	'Render thinking as Markdown': '将思考内容渲染为 Markdown',
	'Render the reasoning/thinking block content as formatted Markdown instead of plain text.':
		'将推理/思考块内容渲染为格式化 Markdown 而非纯文本。',
	'Use full height code blocks': '代码块使用完整高度',
	'Always display code blocks at their full natural height, overriding any height limits.':
		'始终以完整自然高度显示代码块，忽略高度限制。',
	'Disable automatic scroll': '禁用自动滚动',
	'Disable automatic scrolling while messages stream so you can control the viewport position manually.':
		'消息流式输出时禁用自动滚动，以便手动控制视口位置。',
	'Always show sidebar on desktop': '桌面端始终显示侧边栏',
	'Always keep the sidebar visible on desktop instead of auto-hiding it.':
		'在桌面端始终保持侧边栏可见，而不是自动隐藏。',
	'Conversation tabs': '对话标签页',
	'Show open chats as browser-style tabs above the conversation, one per open chat. When disabled, only one chat is shown at a time.':
		'在对话上方以浏览器标签页样式显示已打开的聊天，每个聊天一个标签。关闭时一次只显示一个聊天。',
	'Show raw model names': '显示原始模型名称',
	'Display full raw model identifiers (e.g. "ggml-org/GLM-4.7-Flash-GGUF:Q8_0") instead of parsed names with badges.':
		'显示完整的原始模型标识（如 "ggml-org/GLM-4.7-Flash-GGUF:Q8_0"），而非带徽标的解析名称。',
	'Show model quantization information': '显示模型量化信息',
	'Display quantization badges (e.g. Q8_0, Q4_K_M) next to model names throughout the interface.':
		'在界面各处的模型名称旁显示量化徽标（如 Q8_0、Q4_K_M）。',
	'Show model tags': '显示模型标签',
	'Display model tags (e.g. "vision", "reasoning") next to model names throughout the interface.':
		'在界面各处的模型名称旁显示模型标签（如 "vision"、"reasoning"）。',
	'Show organization name in model selector trigger': '在模型选择器中显示组织名称',
	'Display the organization name in the model selector trigger button.':
		'在模型选择器的触发按钮中显示组织名称。',
	'Show build version information': '显示构建版本信息',
	'Display the current build version in the bottom-right corner of the interface.':
		'在界面右下角显示当前构建版本。',
	'Show full path in mentions': '在提及中显示完整路径',
	'Display the full file system path inside file and folder @-mention badges instead of just the file or folder name.':
		'在文件/文件夹的 @ 提及徽标中显示完整文件系统路径，而非仅文件名。',

	// ── Tools / MCP ──────────────────────────────────────────────────────────
	'MCP servers': 'MCP 服务器',
	'Configure MCP servers as a JSON list. Use the form in the MCP Client settings section to edit.':
		'以 JSON 列表配置 MCP 服务器。使用 MCP 客户端设置区中的表单进行编辑。',

	// ── Agentic ──────────────────────────────────────────────────────────────
	'Agentic turns': '智能体轮数',
	'Maximum number of tool execution cycles before stopping (prevents infinite loops).':
		'停止前允许的最大工具执行循环次数（防止无限循环）。',
	'MCP request timeout (seconds)': 'MCP 请求超时（秒）',
	'Timeout for individual MCP tool calls.': '单个 MCP 工具调用的超时时间。',
	'Mention search depth': '提及搜索深度',
	'How many directory levels below the working directory the @-mention file search descends. Larger values surface deeply nested files but take longer on large trees.':
		'@ 提及文件搜索在工作目录下递归的层级数。值越大越能发现深层文件，但在大型目录树上更耗时。',

	// ── Sampling & Penalties ─────────────────────────────────────────────────
	Temperature: '温度',
	'Controls the randomness of the generated text by affecting the probability distribution of the output tokens. Higher = more random, lower = more focused.':
		'通过影响输出 token 的概率分布来控制生成文本的随机性。越高越随机，越低越集中。',
	'Dynamic temperature range': '动态温度范围',
	'Addon for the temperature sampler. The added value to the range of dynamic temperature, which adjusts probabilities by entropy of tokens.':
		'温度采样的附加项。动态温度的取值范围增量，按 token 熵调整概率。',
	'Dynamic temperature exponent': '动态温度指数',
	'Addon for the temperature sampler. Smoothes out the probability redistribution based on the most probable token.':
		'温度采样的附加项。基于最可能的 token 平滑概率重分布。',
	'Top K': 'Top K',
	'Keeps only k top tokens.': '仅保留概率最高的 k 个 token。',
	'Top P': 'Top P',
	'Limits tokens to those that together have a cumulative probability of at least p':
		'仅保留累计概率至少达到 p 的 token。',
	'Min P': 'Min P',
	'Limits tokens based on the minimum probability for a token to be considered, relative to the probability of the most likely token.':
		'相对于最可能 token 的概率，按 token 被考虑的最小概率进行筛选。',
	'XTC probability': 'XTC 概率',
	'XTC sampler cuts out top tokens; this parameter controls the chance of cutting tokens at all. 0 disables XTC.':
		'XTC 采样器会剔除部分高概率 token；此参数控制是否执行剔除的概率，0 表示禁用 XTC。',
	'XTC threshold': 'XTC 阈值',
	'XTC sampler cuts out top tokens; this parameter controls the token probability that is required to cut that token.':
		'XTC 采样器会剔除部分高概率 token；此参数设定剔除该 token 所需的概率阈值。',
	'Typical P': 'Typical P',
	'Sorts and limits tokens based on the difference between log-probability and entropy.':
		'根据对数概率与熵的差异对 token 排序并筛选。',
	'Max tokens': '最大 token 数',
	'The maximum number of token per output. Use -1 for infinite (no limit).':
		'每次输出的最大 token 数。使用 -1 表示无限（不限制）。',
	Samplers: '采样器',
	'The order at which samplers are applied, in simplified way. Default is "top_k;typ_p;top_p;min_p;temperature": top_k->typ_p->top_p->min_p->temperature':
		'简化的采样器应用顺序。默认为 "top_k;typ_p;top_p;min_p;temperature"：top_k->typ_p->top_p->min_p->temperature',
	'Backend sampling': '后端采样',
	'Enable backend-based samplers. When enabled, supported samplers run on the accelerator backend for faster sampling.':
		'启用后端采样器。启用后，受支持的采样器将在加速后端上运行以加快采样。',
	'Repeat last N': '重复惩罚范围 N',
	'Last n tokens to consider for penalizing repetition': '用于重复惩罚的最近 n 个 token。',
	'Repeat penalty': '重复惩罚',
	'Controls the repetition of token sequences in the generated text': '控制生成文本中 token 序列的重复程度。',
	'Presence penalty': '存在惩罚',
	'Limits tokens based on whether they appear in the output or not.': '根据 token 是否已出现在输出中进行筛选。',
	'Frequency penalty': '频率惩罚',
	'Limits tokens based on how often they appear in the output.': '根据 token 在输出中出现的频率进行筛选。',
	'DRY multiplier': 'DRY 倍数',
	'DRY sampling reduces repetition in generated text even across long contexts. This parameter sets the DRY sampling multiplier.':
		'DRY 采样可减少生成文本中的重复，即使跨长上下文。此参数设置 DRY 采样倍数。',
	'DRY base': 'DRY 基数',
	'DRY sampling reduces repetition in generated text even across long contexts. This parameter sets the DRY sampling base value.':
		'DRY 采样可减少生成文本中的重复，即使跨长上下文。此参数设置 DRY 采样基数值。',
	'DRY allowed length': 'DRY 允许长度',
	'DRY sampling reduces repetition in generated text even across long contexts. This parameter sets the allowed length for DRY sampling.':
		'DRY 采样可减少生成文本中的重复，即使跨长上下文。此参数设置 DRY 采样的允许长度。',
	'DRY penalty last N': 'DRY 惩罚最近 N',
	'DRY sampling reduces repetition in generated text even across long contexts. This parameter sets DRY penalty for the last n tokens.':
		'DRY 采样可减少生成文本中的重复，即使跨长上下文。此参数设置最近 n 个 token 的 DRY 惩罚。',

	// ── Developer ────────────────────────────────────────────────────────────
	'Pre-fill KV cache after response': '响应后预填充 KV 缓存',
	'After each response, re-submit the conversation to pre-fill the server KV cache. Makes the next turn faster since the prompt is already encoded while you read the response.':
		'每次响应后重新提交对话以预填充服务器 KV 缓存。由于在您阅读响应时提示已被编码，下一轮会更快。',
	'Disable reasoning content parsing': '禁用推理内容解析',
	'Send reasoning_format=none so the server returns thinking tokens inline instead of extracting them into a separate field.':
		'发送 reasoning_format=none，让服务器将思考 token 内联返回，而不是提取到单独字段。',
	'Exclude reasoning from context': '从上下文中排除推理内容',
	'Strip thinking from previous messages before sending. When off, thinking is sent back via the reasoning_content field so the model sees its own chain-of-thought across turns.':
		'发送前移除历史消息中的思考内容。关闭时会通过 reasoning_content 字段回传思考内容，使模型在后续轮次中看到自己的思维链。',
	'Enable raw output toggle': '启用原始输出开关',
	'Show toggle button to display messages as plain text instead of Markdown-formatted content':
		'显示切换按钮，以纯文本而非 Markdown 格式显示消息。',
	'JavaScript sandbox tool': 'JavaScript 沙箱工具',
	'Expose a run_javascript tool to the model. Code runs in a Web Worker inside a sandboxed iframe with an opaque origin, isolated from the WebUI and its API, with a hard timeout.':
		'向模型暴露 run_javascript 工具。代码在具有不透明源的沙箱 iframe 内的 Web Worker 中运行，与 WebUI 及其 API 隔离，并有硬性超时。',
	'Symbolic math (nerdamer)': '符号数学（nerdamer）',
	'Pre-load nerdamer in the sandbox for symbolic computation: simplify, diff, integrate, solve, and more. Requires "JavaScript sandbox tool" to be enabled.':
		'在沙箱中预加载 nerdamer 以进行符号计算：化简、求导、积分、求解等。需要启用“JavaScript 沙箱工具”。',
	'Custom JSON': '自定义 JSON',
	'Custom JSON parameters to send to the API. Must be valid JSON format.':
		'发送到 API 的自定义 JSON 参数，必须为有效的 JSON 格式。',
	'Custom CSS': '自定义 CSS',
	'CSS injected into the page at runtime. Set it here, or ship it server side via the --ui-config customCss field.':
		'运行时注入页面的 CSS。可在此设置，或通过服务端的 --ui-config customCss 字段下发。',

	// ── Settings field renderer ──────────────────────────────────────────────
	'Reset to default': '恢复默认值',
	'Reset to Default': '恢复默认值',
	'Default: {value}': '默认值：{value}',
	'Select {label}': '选择 {label}',
	'Show system message in conversations': '在对话中显示系统消息',

	// ── Settings page / footer ───────────────────────────────────────────────
	'Reload app': '重新加载应用',
	'Save settings': '保存设置',
	'Reset Settings to Default': '将设置恢复为默认值',
	'Are you sure you want to reset all settings to their default values? This will reset all parameters to the values provided by the server\'s /props endpoint and remove all your custom configurations.':
		'确定要将所有设置恢复为默认值吗？这会将所有参数重置为服务器 /props 接口提供的值，并移除您的所有自定义配置。',
	Cancel: '取消',
	'Invalid JSON in custom parameters. Please check the format and try again.':
		'自定义参数中的 JSON 无效，请检查格式后重试。',
	'Invalid numeric value for {field}. Please enter a valid number.':
		'{field} 的数值无效，请输入有效的数字。',
	"Settings are saved in browser's localStorage": '设置保存在浏览器的 localStorage 中',

	// ── Common dialogs ───────────────────────────────────────────────────────
	Confirm: '确认',
	Save: '保存',
	Close: '关闭',
	'Rename conversation': '重命名对话',
	'Choose a new title for this conversation.': '为该对话选择一个新标题。',
	'Model Not Available': '模型不可用',
	'The requested model could not be found. Select an available model to continue.':
		'找不到所请求的模型。请选择一个可用模型以继续。',
	'Requested:': '请求的模型：',
	'Select an available model:': '选择一个可用模型：',
	'TCP Timeout': 'TCP 超时',
	'Server Error': '服务器错误',
	'The request did not receive a response from the server before timing out.':
		'请求在超时前未收到服务器响应。',
	'The server responded with an error message. Review the details below.':
		'服务器返回了错误信息，请查看下方详情。',
	'Prompt tokens:': '提示词 token 数：',
	'Context size:': '上下文大小：',
	'Empty Files Detected': '检测到空文件',
	'The following files are empty and have been removed from your attachments:':
		'以下文件为空，已从附件中移除：',
	'Empty Files:': '空文件：',
	'What happened:': '原因：',
	'Empty files cannot be processed or sent to the AI model': '空文件无法被处理，也无法发送给 AI 模型',
	'These files have been automatically removed from your attachments': '这些文件已被自动从附件中移除',
	'You can try uploading files with content instead': '你可以改为上传包含内容的文件',
	'Got it': '知道了',
	'File Upload Error': '文件上传错误',
	'Some files cannot be uploaded with the current model.': '当前模型无法上传部分文件。',
	'Unsupported File Types': '不支持的文件类型',
	'File type not supported': '不支持该文件类型',
	'Not supported by current model': '当前模型不支持',
	'This model supports:': '当前模型支持：',
	'Model Information': '模型信息',
	'Current model details and capabilities': '当前模型的详情与能力',
	'Loading model information...': '正在加载模型信息…',
	'No model information available': '暂无模型信息',
	Model: '模型',
	'File Path': '文件路径',
	'Context Size': '上下文大小',
	'Not available': '不可用',
	'Training Context': '训练上下文',
	'Model Size': '模型大小',
	Parameters: '参数量',
	'Embedding Size': '嵌入维度',
	'Vocabulary Size': '词表大小',
	'Vocabulary Type': '词表类型',
	'Parallel Slots': '并行槽位',
	Modalities: '模态',
	'Build Info': '构建信息',
	'Chat Template': '对话模板',
	'{count} tokens': '{count} 个 token',
	'Copy model name to clipboard': '复制模型名称',
	'Copy model path to clipboard': '复制模型路径',

	// ── Chat form ────────────────────────────────────────────────────────────
	'Type a message...': '输入消息…',
	'Ask anything...': '有什么想聊的…',
	'Send': '发送',
	'Stop': '停止',
	'Skip reasoning': '跳过推理',
	'Start recording': '开始录音',
	'Stop recording': '停止录音',
	'Current model does not support audio': '当前模型不支持音频',
	'Please select a model first': '请先选择一个模型',
	'Selected model is not available, please select another': '所选模型不可用，请另选一个',
	'Add files, prompts, tools or MCP Servers': '添加文件、提示词、工具或 MCP 服务器',
	'Reasoning': '推理',
	Default: '默认',
	Off: '关闭',
	Low: '低',
	Medium: '中',
	High: '高',
	Max: '最大',
	'Maximum reasoning effort with extended context usage': '最大推理强度，会占用更多上下文',
	'Loading tools...': '正在加载工具…',
	'Run llama-server with': '使用',
	'flag to enable': '参数启动 llama-server 以启用',
	'Server Tools': '服务器工具',
	Enable: '启用',
	Add: '添加',
	'MCP Server(s) to access': 'MCP 服务器以访问',
	'MCP Tools': 'MCP 工具',
	'Failed to load tools': '加载工具失败',
	'No tools available': '暂无可用工具',
	'Disable {count} tools': '禁用 {count} 个工具',
	'Enable {count} tools': '启用 {count} 个工具',
	'Add files': '添加文件',
	Audio: '音频',
	Video: '视频',
	Vision: '视觉',
	'MCP Servers': 'MCP 服务器',
	'Add to chat': '添加到对话',
	'Add files, system prompt or configure MCP servers': '添加文件、系统提示词或配置 MCP 服务器',
	'{count} tools': '{count} 个工具',
	Images: '图片',
	'Audio Files': '音频文件',
	'Video Files': '视频文件',
	'Text Files': '文本文件',
	'PDF Files': 'PDF 文件',
	'Image processing requires a vision model': '图像处理需要视觉模型',
	'Audio files processing requires an audio model': '音频文件处理需要音频模型',
	'Video files processing requires a video model': '视频文件处理需要视频模型',
	'PDFs will be converted to text. Image-based PDFs may not work properly.':
		'PDF 将被转换为文本。基于图像的 PDF 可能无法正常处理。',

	// ── Message actions ──────────────────────────────────────────────────────
	Copy: '复制',
	Edit: '编辑',
	Regenerate: '重新生成',
	Continue: '继续',
	Delete: '删除',
	'Fork conversation': '创建对话分支',
	'Show raw output': '显示原始输出',
	Conversation: '对话',
	'Fork of {name}': '{name} 的副本',
	'Delete {count} messages': '删除 {count} 条消息',
	'Delete Message': '删除消息',
	'This will delete {count} messages including: {user} user messages and {assistant} assistant responses. All messages in this branch and their responses will be permanently removed. This action cannot be undone.':
		'将删除 {count} 条消息，其中包括 {user} 条用户消息和 {assistant} 条助手回复。此分支中的所有消息及其回复都将被永久删除，且无法撤销。',
	'Are you sure you want to delete this message? This action cannot be undone.':
		'确定要删除这条消息吗？此操作无法撤销。',
	Fork: '创建分支',
	'Fork Conversation': '创建对话分支',
	'Create a new conversation branching from this message.': '从此消息创建一个新的分支对话。',
	Title: '标题',
	'Enter fork name': '输入分支名称',
	'Include all attachments': '包含所有附件',
	'Message copied to clipboard': '消息已复制到剪贴板',
	'Previous version': '上一版本',
	'Next version': '下一版本',
	'Message version {current} of {total}': '第 {current} / {total} 个版本',

	// ── Message statistics ───────────────────────────────────────────────────
	Reading: '读取',
	Processing: '处理中',
	Generation: '生成',
	'Waiting for tokens...': '等待 token…',
	'Tool calls': '工具调用',
	Summary: '汇总',
	'Agentic summary': '智能体汇总',
	'Generated tokens': '生成的 token',
	'Generation time': '生成耗时',
	'Generation speed': '生成速度',
	'Tool calls executed': '执行的工具调用',
	'Tool execution time': '工具执行耗时',
	'Tool execution rate': '工具执行速率',
	'Agentic turns (LLM calls)': '智能体轮次（LLM 调用）',
	'Total tokens generated': '生成的 token 总数',
	'Total time (LLM + tools)': '总耗时（LLM + 工具）',
	'Prompt tokens': '提示词 token',
	'Prompt processing time': '提示词处理耗时',
	'Prompt processing speed': '提示词处理速度',

	// ── Conversation list & bulk selection ───────────────────────────────────
	'No results found': '未找到结果',
	'No conversations yet': '暂无对话',
	Pinned: '已置顶',
	'Recent conversations': '最近对话',
	'Bulk actions for selected conversations': '所选对话的批量操作',
	'Select all': '全选',
	'Deselect all': '取消全选',
	'{selected} / {total} selected': '已选 {selected} / {total}',
	'Unavailable for mixed state selection': '混合选择状态下不可用',
	Unpin: '取消置顶',
	'Unpin all': '全部取消置顶',
	Pin: '置顶',
	'Pin all': '全部置顶',
	'Export selected': '导出所选',
	Export: '导出',
	'Delete selected': '删除所选',
	'Exit bulk selection mode': '退出批量选择模式',
	'Delete {count}': '删除 {count}',
	'Delete {count} conversations': '删除 {count} 个对话',
	'This action cannot be undone. The selected conversation and its messages will be permanently removed, including any forks.':
		'此操作无法撤销。所选对话及其消息（包括所有分支）将被永久删除。',
	'This action cannot be undone. The selected conversations and their messages will be permanently removed, including any forks.':
		'此操作无法撤销。所选对话及其消息（包括所有分支）将被永久删除。',

	// ── Chat screen / server state ───────────────────────────────────────────
	'Hello there': '你好',
	'Record audio, type a message': '录制音频、输入消息',
	'Type a message': '输入消息',
	'or upload files to get started': '或上传文件即可开始',
	'Loading model': '正在加载模型',
	'Server unavailable': '服务器不可用',
	'Retrying...': '正在重试…',
	Retry: '重试',
	'Server Connection Error': '服务器连接错误',
	'Enter API Key': '输入 API 密钥',
	'Enter your API key...': '输入你的 API 密钥…',
	'Invalid API key - please check and try again': 'API 密钥无效，请检查后重试',
	'Cannot connect to server - check if server is running': '无法连接到服务器，请确认服务器是否已启动',
	'Connection error - please try again': '连接错误，请重试',
	'Authentication failed ({status})': '鉴权失败（{status}）',
	'✓ API key validated successfully! Connecting...': '✓ API 密钥校验成功！正在连接…',
	'Validating...': '校验中…',
	'Success!': '成功！',
	'Save & Retry': '保存并重试',
	'Connecting...': '正在连接…',
	'Retry Connection': '重试连接',
	Troubleshooting: '故障排查',
	'Start the llama-server:': '启动 llama-server：',
	or: '或',
	'Check that the server is accessible at the correct URL': '检查服务器 URL 是否正确且可访问',
	'Verify your network connection': '确认网络连接正常',
	'Check server logs for any error messages': '查看服务器日志中的错误信息',
	'Connection Error': '连接错误',
	Connected: '已连接',
	Unknown: '未知',
	'Unknown Model': '未知模型',
	'ctx: {value}': '上下文：{value}',
	Error: '错误',
	'Access denied - check server permissions': '拒绝访问 - 请检查服务器权限',
	'Something went wrong': '出错了',
	'Go Home': '返回首页',
	Chat: '对话',

	// ── MCP ──────────────────────────────────────────────────────────────────
	'Connection Log ({count})': '连接日志（{count}）',
	'Edit your message...': '编辑你的消息…',
	'Update without re-sending': '仅更新，不重新发送',
	'Branch conversation after edit': '编辑后创建对话分支',
	'Keep editing': '继续编辑',
	Discard: '放弃',
	'You have unsaved changes. Are you sure you want to discard them?': '你有未保存的更改，确定要放弃吗？',
	'Discard changes?': '放弃修改？',
	'Pending user message': '待发送的用户消息',
	'Send immediately': '立即发送',
	'Copy to clipboard': '复制到剪贴板',
	'Code incomplete': '代码不完整',
	'Copy code': '复制代码',
	'Preview code': '预览代码',
	'Delete Conversation': '删除对话',
	'Are you sure you want to delete this conversation? This action cannot be undone and will permanently remove all messages in this conversation.':
		'确定要删除此对话吗？此操作无法撤销，将永久删除该对话中的所有消息。',
	'Connected in {ms}ms': '连接耗时 {ms} 毫秒',
	details: '详情',
	Resources: '资源',
	Prompts: '提示词',
	Logging: '日志',
	Completions: '补全',
	Tasks: '任务',

	// ── Model selector & tabs ────────────────────────────────────────────────
	'Loading models…': '正在加载模型…',
	'No models available.': '暂无可用模型。',
	'Select model': '选择模型',
	'No model': '无模型',
	'No models found.': '未找到模型。',
	'Search models...': '搜索模型…',
	'(not available)': '（不可用）',
	'Loaded models': '已加载模型',
	'Favorite models': '收藏模型',
	'Available models': '可用模型',
	'Stop generation': '停止生成',
	'Close tab': '关闭标签页',
	'Search...': '搜索…',
	'Clear search': '清除搜索',
	'Remove from favorites': '取消收藏',
	'Add to favorites': '收藏',
	'Model information': '模型信息',
	'Retry loading model': '重试加载模型',
	'Unload model': '卸载模型',
	'Load model': '加载模型',
	'See parent conversation': '查看父对话',
	'Deselect {name}': '取消选择 {name}',
	'Select {name}': '选择 {name}',
	Select: '选择',
	'More actions': '更多操作',

	// ── Sidebar navigation ───────────────────────────────────────────────────
	'New chat': '新建对话',
	Search: '搜索',
	Settings: '设置',
	'Search conversations...': '搜索对话…',
	'Go to start': '回到起始页',
	'Expand navigation': '展开导航',
	'Open Sidebar': '打开侧边栏',
	'Collapse navigation': '收起导航',
	'Close Sidebar': '关闭侧边栏',
	'Delete "{name}"? This action cannot be undone.': '删除“{name}”？此操作无法撤销。'
};
