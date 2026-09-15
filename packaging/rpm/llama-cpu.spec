Name:           llama-cpu
# both defines are passed by .github/workflows/build-rpm.yml
Version:        %{?llama_version}%{!?llama_version:0.0.0}
Release:        1.b%{?llama_build}%{!?llama_build:0}%{?dist}
Summary:        llama.cpp CPU inference server (EL8 / Kylin V10 build)

License:        MIT
URL:            https://github.com/jiangchuanso/llama.cpp-zh-el8
Source0:        llama-server.service
Source1:        llama-cpu.sysconfig
Source2:        README.md

# The binaries are prebuilt by the CI `ubuntu` job and dropped, unchanged, into
# %{_sourcedir}/bin. They carry libstdc++.so.6 and libgomp.so.1 (GLIBCXX_3.4.25)
# next to themselves and resolve them through an $ORIGIN rpath. Auto-generated
# dependencies would emit "libstdc++.so.6(GLIBCXX_3.4.25)(64bit)", which Kylin
# V10 (GLIBCXX_3.4.24) cannot satisfy, so dnf would refuse to install the
# package. Filter exactly those two libraries and keep the rest generated.
%global __requires_exclude ^(libstdc\+\+\.so\.6|libgomp\.so\.1)
%global __provides_exclude ^(libstdc\+\+\.so\.6|libgomp\.so\.1)

# binaries, archives and libraries are shipped exactly as built: do not strip
%global __os_install_post %{nil}

Requires:       glibc >= 2.28
Requires:       systemd
Requires(pre):  shadow-utils

%description
Prebuilt CPU-only llama.cpp serving stack for EL8 and compatible systems
(CentOS/Rocky/AlmaLinux 8, Kylin Advanced Server V10).

The binaries and their runtime libraries (including libstdc++ and libgomp) are
bundled under /opt/llama-cpu and loaded through an $ORIGIN rpath, so the package
does not depend on the host C++ runtime version.

A systemd unit (llama-server.service) is installed but not enabled, because a
model path has to be configured first. Set the arguments in
/etc/sysconfig/llama-cpu and run: systemctl enable --now llama-server

%prep
# nothing to unpack, the prebuilt binaries are used as-is

%build
# nothing to build

%install
rm -rf %{buildroot}
install -d %{buildroot}/opt/llama-cpu/bin
cp -a %{_sourcedir}/bin/. %{buildroot}/opt/llama-cpu/bin/
chmod 0755 %{buildroot}/opt/llama-cpu/bin/*

install -d %{buildroot}%{_bindir}
for b in llama-server llama-cli llama-bench; do
  if [ -x "%{buildroot}/opt/llama-cpu/bin/$b" ]; then
    ln -sf /opt/llama-cpu/bin/$b "%{buildroot}%{_bindir}/$b"
  fi
done

install -d %{buildroot}%{_unitdir}
install -m 0644 %{SOURCE0} %{buildroot}%{_unitdir}/llama-server.service

install -d %{buildroot}%{_sysconfdir}/sysconfig
install -m 0644 %{SOURCE1} %{buildroot}%{_sysconfdir}/sysconfig/llama-cpu

install -d %{buildroot}%{_docdir}/llama-cpu
install -m 0644 %{SOURCE2} %{buildroot}%{_docdir}/llama-cpu/README.md

install -d %{buildroot}/var/lib/llama-cpu

%pre
getent group llama-cpu >/dev/null || groupadd -r llama-cpu
getent passwd llama-cpu >/dev/null || \
  useradd -r -g llama-cpu -d /var/lib/llama-cpu -s /sbin/nologin -c "llama.cpp server" llama-cpu
exit 0

%post
%systemd_post llama-server.service

%preun
%systemd_preun llama-server.service

%postun
%systemd_postun_with_restart llama-server.service

%files
%dir /opt/llama-cpu
/opt/llama-cpu/bin
%{_bindir}/llama-*
%config(noreplace) %{_sysconfdir}/sysconfig/llama-cpu
%{_unitdir}/llama-server.service
%{_docdir}/llama-cpu/README.md
%dir %attr(0750,llama-cpu,llama-cpu) /var/lib/llama-cpu
