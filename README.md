# Resource Monitor for OpenChamber

See what the connected OpenChamber host is doing and how much of it OpenChamber takes: host CPU and memory, OpenChamber and OpenCode with everything they started, and the dev servers running under them.

The rail panel has live CPU and memory charts and OpenChamber's footprint split into the app, OpenCode, and the built-in terminal. What an agent or the terminal started is shown as jobs: one row per command (`bun run dev`, `claude`) with the CPU, memory and ports of everything under it, folded by default; unfold one to see the processes in it worth a look. Dev servers are listed with their ports, who started them, and what they cost. A short readout in the chat's Work Status panel shows the same numbers at a glance. OpenChamber versions that draw extension sections themselves build it from the service's `/status` answer, with no page of its own; older ones load `status/index.html`.

Stop on a dev server or a terminal job ends that command with everything it started, so a watcher can't start the server again. Stop all in the Terminal group ends everything running in the terminal and project actions and keeps the tabs open. The service decides what Stop may touch on a fresh read of the tree: OpenChamber itself, the OpenCode server, idle shells, and an agent's job that serves no port (a provider CLI, an MCP server) are refused whatever the panel asks. Processes get SIGTERM, and SIGKILL three seconds later if they are still there; on Windows, `taskkill /T` and then `/F`.

## Install

In OpenChamber, install the Resource Monitor card from Settings → Integrations. The card installs `https://github.com/claymor333/openchamber-resource-monitor`. On web and desktop, you can also add this repository's Git URL in Settings → Extensions. Approve the service when asked: it runs next to OpenChamber on the connected host, not on the phone.

Web and desktop run the full extension as before. The mobile app supports this curated Resource Monitor panel only; other guest extensions and VS Code remain unsupported there. An existing install from the upstream `openchamber/openchamber-resource-monitor` repo is not migrated automatically: remove it in Settings → Extensions, then install the catalog copy and approve the service again. The service can inspect and stop server processes only after the user approves its existing permissions.

On mobile, the full panel appears in the right-hand workspace. Its Work Status summary is not shown there. Dev-server ports are read-only information on mobile; no forwarding tunnel is opened.

## How it finds OpenChamber's processes

OpenChamber starts the extension's service itself, so the service's parent process is the app: the Electron main process on desktop, the server for `openchamber serve`. Everything under that process is OpenChamber's. OpenCode is the `opencode` child, and the shells under it belong to agents. Processes the app runs in a terminal of their own (the built-in terminal and project actions, even after the shell exec'd into the command) are the terminal group. A process under OpenCode or the terminal that listens on a TCP port is a dev server; OpenCode's own server isn't. The app's other children, such as other extensions' services, listen on ports too and stay in its process list.

Some processes leave the tree. A server that daemonizes itself, or a container started with `docker compose up -d`, belongs to another parent and isn't shown. OpenCode started outside OpenChamber, such as a TUI in another terminal or an external OpenCode server you connected to, is listed separately, and the dev servers its agents start aren't detected.

When the connected OpenChamber runs on another machine, the monitor shows that machine, where OpenCode and its dev servers actually run.

## What the numbers mean

- Process CPU counts 100% per core, as Activity Monitor and `top` do, so a process keeping two cores busy reads 200%. The CPU card at the top is the whole machine, all cores together.
- Memory is resident memory. Pages several processes share, such as Electron's, count in each of them, so the app's total runs a little high.
- System memory in use is counted the way the OS's own monitor does: app memory, wired and compressed on macOS, total minus available on Linux, used physical memory on Windows.

## Where the numbers come from

| | Processes | Ports | Memory |
| --- | --- | --- | --- |
| macOS | `ps` | `lsof` | `vm_stat` |
| Linux | `/proc` | `/proc/net/tcp` and each process's sockets | `/proc/meminfo` |
| Windows | one PowerShell kept running (`Get-CimInstance Win32_Process`) | `netstat -ano` | Node's `os` |

Sampling runs every 2 seconds while the panel or the Work Status section is on screen. The shared service stays alive while any viewer is polling; twenty seconds after the last request it stops, along with the PowerShell helper on Windows.

## Build

```bash
bun install
bun run build   # writes panel/main.js, status/main.js and service/main.js
bun run test
bun run typecheck
```

The built files are committed: OpenChamber installs extensions without building them. Bump `version` in `package.json` to ship an update through Git.

## License

MIT
