# Razdfile.yml Reference

Complete field reference for all Razdfile.yml sections, based on the 1.x source code and JSON schema.

## JSON Schema

The official JSON schema is at `.schema/razdfile.schema.json` in the razd repository. Add to the top of your Razdfile for IDE validation:

```yaml
# yaml-language-server: $schema=https://raw.githubusercontent.com/razd-cli/razd/1.x/.schema/razdfile.schema.json
```

## Top-Level Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `version` | string or number | **Yes** | Schema version. Must be `"1"` or `1`. |
| `dependencies` | object | No* | Unified dependencies section. Mutually exclusive with `mise`/`devbox`. |
| `tasks` | object | No* | Task definitions (Taskfile-compatible). |
| `includes` | object | No* | Imported taskfiles. |
| `env` | object | No | Global environment variables. |
| `vars` | object | No | Global variables. |
| `silent` | bool | No | Suppress task name/command output. Default: `false`. |
| `dotenv` | list | No | List of `.env` file paths. |
| `method` | string | No | Up-to-date check: `"none"`, `"checksum"`, `"timestamp"`. |
| `output` | string or object | No | Output mode: `"interleaved"`, `"prefixed"`, `"group"`, or `{group: {begin: "...", end: "...", error_only: false}}`. |
| `run` | string | No | Run mode: `"always"`, `"once"`, `"when_changed"`. |
| `interval` | string | No | Watch interval. Pattern: `^[0-9]+(?:m|s|ms)$` |
| `set` | list | No | POSIX shell options. Values: `allexport`/`a`, `errexit`/`e`, `noexec`/`n`, `noglob`/`f`, `nounset`/`u`, `xtrace`/`x`, `pipefail`. |
| `shopt` | list | No | Bash shell options. Values: `expand_aliases`, `globstar`, `nullglob`. |

*At least one of `tasks`, `includes`, or `dependencies` must be present.

## dependencies

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `using` | string | **Yes** | `"mise"` or `"devbox"`. |
| `ensure` | list | No | Dependencies in `tool@version` format. Regex: `^[a-z][a-z0-9_-]*@[a-zA-Z0-9._-]+$` |
| `extra.mise` | object | No | Native mise config pass-through (when `using: mise`). Mirrors mise.toml structure. |
| `extra.devbox` | object | No | Native devbox config pass-through (when `using: devbox`). Mirrors devbox.json structure. |

**ensure format:** `^[a-z][a-z0-9_-]*@[a-zA-Z0-9._-]+$`

Examples: `node@22`, `python@3.11`, `go@1.23`, `pnpm@latest`, `php@8.4`, `ripgrep@latest`

### dependencies.extra.mise

| Field | Type | Description |
|-------|------|-------------|
| `env` | object | Environment variables. Values can be string, number, boolean, or objects with `value`, `redact`, `required`. Special key `_` for `file`, `path`, `source`, `python`. |
| `settings` | object | Mise settings: `auto_install` (bool, default true), `experimental` (bool), `quiet` (bool), `verbose` (bool), `jobs` (int). |
| `hooks` | object | Lifecycle hooks. Values are string or list of strings. |
| `plugins` | object | Custom plugin URLs (name → URL). |
| `min_version` | string | Minimum required mise version (semver pattern: `^\d+\.\d+\.\d+$`). |

**env value formats:**

```yaml
env:
  NODE_ENV: development          # Simple string value
  DEBUG: true                    # Boolean value
  PORT: 3000                    # Number value
  API_KEY:                       # Object with options
    value: "secret"
    redact: true
    required: true
  _:                             # Special directives
    file: ".env"
    path: ["./node_modules/.bin"]
    source: "setup.sh"
    python:
      venv:
        path: ".venv"
        create: true
```

### dependencies.extra.devbox

| Field | Type | Description |
|-------|------|-------------|
| `packages` | list or object | Package definitions. Array: `["node@22"]`, Object: `{node: {version: "22", platforms: [...]}}`. Supports `platforms`, `excluded_platforms`, `glibc_patch`. |
| `env` | object | Environment variables (all string values). |
| `shell` | object | Shell config with `init_hook` (string or list) and `scripts` (name → string or list). |
| `include` | list | Additional plugins. |
| `env_from` | string | File path to load env vars from. |
| `nixpkgs` | object | `{commit: "hash"}` for nixpkgs pinning. |

**packages object format:**

```yaml
packages:
  nodejs:
    version: "22"
    platforms: [x86_64-linux, aarch64-darwin]
    excluded_platforms: [i686-linux]
    glibc_patch: true
```

**Valid platform values:** `i686-linux`, `aarch64-linux`, `aarch64-darwin`, `x86_64-darwin`, `x86_64-linux`, `armv7l-linux`

## mise (legacy/top-level)

> **Note:** `mise` as a top-level section is mutually exclusive with `dependencies`. Prefer using `dependencies` with `using: "mise"` and `extra.mise` for pass-through config.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `tools` | object | No | Tool definitions. Keys=tool names, values=version string/array/object. |
| `env` | object | No | Environment variables. |
| `settings` | object | No | Mise settings (`auto_install`, `experimental`, `quiet`, `verbose`, `jobs`). |
| `hooks` | object | No | Lifecycle hooks. |
| `plugins` | object | No | Custom plugin URLs (name→URL). |
| `min_version` | string | No | Minimum required mise version. |

**Tool value formats:**
- String: `node: "22"` → simple version
- Array: `node: ["20", "22"]` → multiple versions, first is primary
- Object: `node: {version: "22", os: [linux, darwin], postinstall: "npm i -g npm"}` → full config

## devbox (legacy/top-level)

> **Note:** `devbox` as a top-level section is mutually exclusive with `dependencies`. Prefer using `dependencies` with `using: "devbox"` and `extra.devbox` for pass-through config.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No | Project name. |
| `description` | string | No | Project description. |
| `packages` | list or object | No | Package definitions. Array: `["node@22"]`, Object: `{node: {version: "22"}}`. |
| `env` | object | No | Environment variables (all string values). |
| `shell` | object | No | Shell config with `init_hook` (string or list) and `scripts` (name→command). |
| `include` | list | No | Additional plugins. |
| `env_from` | string | No | File path to load env vars from. |
| `nixpkgs` | object | No | `{commit: "hash"}` for nixpkgs pinning. |

## tasks

Each task is a named object under `tasks:`:

| Field | Type | Description |
|-------|------|-------------|
| `cmds` | list | Commands to execute sequentially. Items can be string, `{cmd: "..."}`, `{task: "name"}`, `{defer: "..."}`, or `{for: [...], cmd: "..."}`. |
| `cmd` | string | Single command shorthand (alternative to `cmds`). |
| `deps` | list | Task dependencies to run in parallel first. Items can be string, `{task: "name", vars: {...}}`, or `{for: {...}, task: "name"}`. |
| `desc` | string | Short description (shown in `razd list`). |
| `label` | string | Override display name (supports variables). |
| `prompt` | string or list | Prompt(s) shown before running the task. |
| `summary` | string | Longer description. |
| `aliases` | list | Alternative task names. |
| `env` | object | Task-scoped environment variables. |
| `vars` | object | Task-scoped variables. Supports `sh`, `ref`, `map` sub-keys. |
| `silent` | bool | Suppress output. Default: `false`. |
| `interactive` | bool | Mark as interactive. Default: `false`. |
| `internal` | bool | Hide from CLI listing. Default: `false`. |
| `dir` | string | Working directory. |
| `set` | list | POSIX shell options for this task. Values: `allexport`/`a`, `errexit`/`e`, `noexec`/`n`, `noglob`/`f`, `nounset`/`u`, `xtrace`/`x`, `pipefail`. |
| `shopt` | list | Bash shell options. Values: `expand_aliases`, `globstar`, `nullglob`. |
| `sources` | list | Source file globs for up-to-date checks. Items can be string or `{exclude: "..."}`. |
| `generates` | list | Output file globs. Items can be string or `{exclude: "..."}`. |
| `status` | list | Commands to check if task should run. |
| `preconditions` | list | Conditions that must be met before running. Items can be string or `{sh: "...", msg: "..."}`. |
| `method` | string | Up-to-date check method: `"none"`, `"checksum"`, `"timestamp"`. |
| `platforms` | list | OS platforms this task runs on. |
| `run` | string | Run mode: `"always"`, `"once"`, `"when_changed"`. |
| `dotenv` | list | Task-scoped `.env` file paths. |
| `ignore_error` | bool | Continue on error. Default: `false`. |
| `requires` | object | Required variables. `{vars: ["VAR1", {name: "VAR2", enum: ["a","b"]}]}`. |
| `watch` | bool | Run in watch mode. Default: `false`. |
| `failfast` | bool | Stop all parallel tasks if one fails. Default: `false`. |
| `prefix` | string | Prefix for parallel task output. |

**Shorthand:** A task value can be a string (single command) or list of strings instead of an object.

**Task call in cmds:**
```yaml
cmds:
  - echo "running"                      # Simple command string
  - task: install                       # Call another task
  - task: build                         # Call with vars
      vars: {NODE_ENV: production}
  - cmd: echo "hello"                   # Explicit cmd
      silent: true
  - defer: "cleanup.sh"                 # Deferred command
  - defer:                               # Deferred task call
      task: cleanup
  - for: [1, 2, 3]                      # For loop over list
    cmd: echo {{.ITEM}}
  - for:                                  # For loop over variable
      var: FILES
    cmd: echo {{.ITEM}}
```

## Validation Rules

The razd CLI validates Razdfile.yml with these rules:

1. `version` field is required
2. Only version `"1"` is supported
3. `dependencies` + `mise` section = ERROR (mutually exclusive)
4. `dependencies` + `devbox` section = ERROR (mutually exclusive)
5. `dependencies.using` is required when `dependencies` is present
6. `dependencies.using` must be `"mise"` or `"devbox"`
7. `dependencies.ensure` entries must match `^[a-z][a-z0-9_-]*@[a-zA-Z0-9._-]+$`
8. At least one content section must exist (`tasks`, `includes`, `mise`, `devbox`, or `dependencies`)

## CLI Commands

```
razd [task...]              Run task(s) (default task if none specified)
razd run [task...]          Run one or more tasks
razd up                     Install tools and dependencies
razd up -r                  Install tools and run default task
razd init                   Create Razdfile.yml in current directory
razd init --using devbox    Create with devbox provider
razd init --using mise      Create with mise provider (default)
razd init --force           Overwrite existing Razdfile
razd init --migrate         Migrate from existing mise.toml/devbox.json
razd add <tool@version>     Add a dependency to Razdfile
razd list                   List available tasks
razd list --json            List tasks in JSON
razd list --all             Show all tasks including internals
razd shell                  Start interactive shell with provisioned env
razd dev                    Start development server (runs 'dev' task)
razd build                  Build the project (runs 'build' task)
razd trust                  Trust current project
razd trust --show           Show trust status
razd trust --untrust        Remove trust
razd trust --ignore         Don't ask again for this project
razd trust --all            Show all trusted projects
razd version                Show version information
```

### Global Flags

```
-v, --verbose                      Show detailed output
-s, --silent                       Suppress all output except errors
-d, --dir <path>                   Working directory (default: current)
-c, --color <auto|always|never>    Color output (default: auto)
-y, --yes                          Auto-trust project / answer yes to all prompts
-l, --list                         List available tasks
    --version                      Show version information
-h, --help                         Show help
    --no-sync                      Skip Razdfile <-> mise.toml sync
    --backup                       Create timestamped backup of native config
-t, --taskfile <path>              Path to taskfile/razdfile
    --razdfile <path>              Path to razdfile (priority over --taskfile)
    --no-install                   Skip automatic dependency installation before running tasks
    --json                         JSON output (list command)
-r, --run                          Run default task after setup (up command)
-f, --force                        Force overwrite (init command)
    --using <mise|devbox>          Package manager (init command)
    --migrate                      Migrate from existing config (init command)
    --untrust                      Remove trust (trust command)
    --show                         Show trust status (trust command)
    --all                          Show all trusted projects (trust command)
    --ignore                       Don't ask again (trust command)
```

## Validation Error Messages

| Condition | Error Message |
|-----------|---------------|
| Missing version | `"version field is required"` |
| Unsupported version | `"unsupported version \"X\" in file \"Y\""` |
| `dependencies` + `mise` | `"cannot use 'dependencies' together with 'mise' section"` |
| `dependencies` + `devbox` | `"cannot use 'dependencies' together with 'devbox' section"` |
| Missing `dependencies.using` | `"dependencies.using is required (must be 'mise' or 'devbox')"` |
| Invalid `using` value | `"dependencies.using must be 'mise' or 'devbox'"` |
| Bad ensure format | `"invalid dependency format 'X', expected 'tool@version' (e.g., 'node@22')"` |
| Empty ensure entry | `"invalid dependency format: empty string, expected 'tool@version'"` |
| No content | `"Razdfile must have either tasks, mise, devbox, or dependencies configuration"` |
| No Razdfile found | `"no Razdfile found"` |