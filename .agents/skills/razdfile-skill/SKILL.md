---
name: razdfile-skill
description: "Generate and validate Razdfile.yml configuration files for razd projects. Use when creating, editing, or validating Razdfile.yml, or when setting up project provisioning with mise or devbox. Triggers on mentions of Razdfile, razdfile, razd init, razd config, provisioning config, or task runner setup."
argument-hint: "[description or path]"
disable-model-invocation: false
user-invocable: true
allowed-tools: Read Write Bash
license: MIT
metadata:
  author: razd-cli
  version: "2.0"
  category: configuration
---

# razdfile-skill — Razdfile.yml Generator

You are a Razdfile.yml configuration generator. Create valid `Razdfile.yml` files based on user requirements.

## What is Razdfile.yml?

`Razdfile.yml` is the configuration file for [razd](https://github.com/razd-cli/razd) — a project environment provisioning CLI. It defines:

- **Dependencies** — which language runtimes and tools to install (via mise or devbox)
- **Tasks** — commands to run (build, test, dev, etc.)
- **Environment** — env vars, settings, hooks
- **Provisioner** — mise or devbox (how tools are installed)

## Supported Version

Only `version: "1"` is valid. Always include it as the first field.

## Preferred Format: `dependencies`

ALL new Razdfile.yml files SHOULD use the `dependencies` section. The `mise` and `devbox` top-level sections exist in the parser but are mutually exclusive with `dependencies` and NOT included in the JSON schema (`additionalProperties: false`). Always generate `dependencies` format.

```yaml
version: "1"
dependencies:
  using: "mise"          # REQUIRED: "mise" or "devbox"
  ensure:                # Package list in tool@version format
    - "node@22"
    - "pnpm@latest"
  extra:                  # OPTIONAL: native provider config pass-through
    mise:
      env:
        NODE_ENV: development
      settings:
        experimental: true
tasks:
  default:
    cmds:
      - npm run dev
```

### With devbox provider

```yaml
version: "1"
dependencies:
  using: "devbox"         # REQUIRED: "mise" or "devbox"
  ensure:
    - "nodejs@22"
  extra:
    devbox:
      shell:
        init_hook:
          - echo "Welcome!"
tasks:
  default:
    cmds:
      - npm run dev
```

### Minimal (dependencies only)

A Razdfile with only dependencies (no tasks) is valid:

```yaml
version: "1"
dependencies:
  using: "mise"
  ensure:
    - "node@22"
```

## Mutual Exclusion Rules

- `dependencies` + `mise` section = ERROR (mutually exclusive)
- `dependencies` + `devbox` section = ERROR (mutually exclusive)
- `dependencies` alone = OK (use `using` field to specify provider)
- NEVER generate `mise:` or `devbox:` as top-level sections alongside `dependencies`

## CLI Reference

razd CLI commands (based on 1.x source):

```
razd [task...]              Run task(s) (default task if none specified)
razd run [task...]          Run one or more tasks
razd up                     Install tools and dependencies via mise/devbox
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
-v, --verbose               Show detailed output
-s, --silent                Suppress all output except errors
-d, --dir <path>            Working directory (default: current)
-c, --color <auto|always|never>  Color output (default: auto)
-y, --yes                   Auto-trust project / answer yes to all prompts
-l, --list                  List available tasks
    --version               Show version information
-h, --help                  Show help
-no-sync                    Skip Razdfile <-> mise.toml sync
--backup                    Create timestamped backup of native config
-t, --taskfile <path>       Path to taskfile/razdfile
   --razdfile <path>        Path to razdfile (priority over --taskfile)
--no-install                Skip automatic dependency installation before running tasks
--json                      JSON output (list command)
```

## Generation Rules

### When to Generate Immediately (no questions)

If the user provides:
- Project language/runtime (e.g., "Node.js project", "Python app")
- A general description (e.g., "Razdfile for a Go microservice")
- Tool list (e.g., "needs Node 22 and pnpm")

Then IMMEDIATELY generate the Razdfile.yml. DO NOT ask for more details.

### Fast Path Examples

- "Create a Razdfile for a Node.js project" → generate with `dependencies.using: mise, ensure: [node@22, pnpm@latest]`
- "Razdfile for Python with devbox" → generate with `dependencies.using: devbox, ensure: [python@3.11]`
- "My Go project needs task runner" → generate with `dependencies.using: mise, ensure: [go@1.23, task@latest]`

### Slow Path

Only if the user says something very vague like "create a Razdfile" without any context:
1. Ask what language/runtime
2. Ask which provisioner (mise or devbox, default: mise)
3. IMMEDIATELY generate after getting answers

**NEVER ask for confirmation before generating.**

## Validation Rules

When generating or reviewing a Razdfile.yml, enforce these rules:

1. **`version` is ALWAYS `"1"`** — first field, required
2. **Always use `dependencies` section** — never `mise:` or `devbox:` as top-level keys alongside it
3. **`dependencies.using` is required** — must be `"mise"` or `"devbox"`
4. **`dependencies.ensure` format** — each entry must match `tool@version` (regex: `^[a-z][a-z0-9_-]*@[a-zA-Z0-9._-]+$`)
5. **No `dependencies` + `mise` section** — mutually exclusive, causes validation error
6. **No `dependencies` + `devbox` section** — mutually exclusive, causes validation error
7. **At least one content section** — `tasks`, `includes`, or `dependencies` must be present
8. **Use `extra` for provider-specific config** — mise env/settings go in `dependencies.extra.mise`, devbox shell/packages go in `dependencies.extra.devbox`
9. **Empty `ensure` list is valid** — `ensure: []` is acceptable (no dependencies to install)
10. **Razdfile with only dependencies (no tasks) is valid** — `HasContent()` returns true for dependencies-only

## Top-Level Fields Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `version` | string | **Yes** | Schema version. Must be `"1"`. |
| `dependencies` | object | No* | Unified dependencies section. Mutually exclusive with `mise`/`devbox`. |
| `tasks` | object | No* | Task definitions (Taskfile-compatible). |
| `includes` | object | No* | Imported taskfiles. |
| `env` | object | No | Global environment variables. |
| `vars` | object | No | Global variables. |
| `silent` | bool | No | Suppress task name/command output. Default: `false`. |
| `dotenv` | list | No | List of `.env` file paths. |
| `method` | string | No | Up-to-date check: `"none"`, `"checksum"`, `"timestamp"`. |
| `output` | string or object | No | Output mode: `"interleaved"`, `"prefixed"`, `"group"`, or object with `group.begin`/`group.end`. |
| `run` | string | No | Run mode: `"always"`, `"once"`, `"when_changed"`. |
| `interval` | string | No | Watch interval (e.g., `"5s"`, `"1m"`). Pattern: `^[0-9]+(?:m|s|ms)$` |
| `set` | list | No | POSIX shell options: `allexport`, `errexit`, `noexec`, `noglob`, `nounset`, `xtrace`, `pipefail`, etc. |
| `shopt` | list | No | Bash shell options: `expand_aliases`, `globstar`, `nullglob`. |

*At least one of `tasks`, `includes`, or `dependencies` must be present.

## dependencies

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `using` | string | **Yes** | `"mise"` or `"devbox"`. |
| `ensure` | list | No | Dependencies in `tool@version` format. Regex: `^[a-z][a-z0-9_-]*@[a-zA-Z0-9._-]+$` |
| `extra.mise` | object | No | Native mise config pass-through (when `using: mise`). Mirrors mise.toml structure. |
| `extra.devbox` | object | No | Native devbox config pass-through (when `using: devbox`). Mirrors devbox.json structure. |

### dependencies.extra.mise fields

| Field | Type | Description |
|-------|------|-------------|
| `env` | object | Environment variables (values can be string, number, boolean, or objects with `value`, `redact`, `required`). Special key `_` for `file`, `path`, `source`, `python`. |
| `settings` | object | Mise settings: `auto_install`, `experimental`, `quiet`, `verbose`, `jobs`. |
| `hooks` | object | Lifecycle hooks (key = hook name, value = string or list of strings). |
| `plugins` | object | Custom plugin URLs (name → URL). |
| `min_version` | string | Minimum required mise version (semver). |

### dependencies.extra.devbox fields

| Field | Type | Description |
|-------|------|-------------|
| `packages` | list or object | Package definitions. Array: `["node@22"]`, Object: `{node: {version: "22"}}`. Supports `platforms`, `excluded_platforms`, `glibc_patch`. |
| `env` | object | Environment variables (all string values). |
| `shell` | object | Shell config with `init_hook` (string or list) and `scripts` (name → string or list). |
| `include` | list | Additional plugins. |
| `env_from` | string | File path to load env vars from. |
| `nixpkgs` | object | `{commit: "hash"}` for nixpkgs pinning. |

## Task Reference

Tasks follow the [Taskfile](https://taskfile.dev/) format. Key fields:

```yaml
tasks:
  default:          # Task name
    desc: "Description shown in task list"
    cmds:           # Commands to run (sequential)
      - echo "Hello"
      - task: install  # Call another task
    deps: [build]   # Run dependencies in parallel first
    env:            # Task-scoped env vars
      NODE_ENV: development
    vars:            # Task-scoped variables
      VERSION: "1.0"
    silent: false   # Suppress output
    interactive: false  # Mark as interactive task
    internal: false  # Hide from CLI listing
    dir: ./src      # Working directory
    sources:        # Up-to-date check sources
      - src/**/*.js
    generates:      # Up-to-date check outputs
      - dist/
    status:         # Commands to check if task should run
      - test -f dist/app.js
    method: checksum # Up-to-date method: none, checksum, timestamp
    run: once       # Run mode: always, once, when_changed
    platforms:      # OS platforms this task runs on
      - linux
      - darwin
    ignore_error: false  # Continue on error
    set: [errexit]  # POSIX shell options for this task
    shopt: [globstar]  # Bash shell options for this task
    dotenv:         # Task-scoped .env files
      - .env.local
    requires:       # Required variables
      vars:
        - VERSION
    preconditions:  # Commands that must succeed
      - sh: test -f package.json
        msg: "package.json is required"
    aliases: [d]    # Alternative names
    label: "dev:{{.TASK}}"  # Override display name
    prompt: "Are you sure?" # Prompt before running
    watch: false     # Run in watch mode
    prefix: "dev"   # Prefix output when running in parallel
```

### Task shorthand

```yaml
tasks:
  install: npm install        # String shorthand
  build: npm run build        # String shorthand
  test:                       # Object form
    desc: "Run tests"
    cmds:
      - npm test
```

### Task call in cmds

```yaml
cmds:
  - echo "running"
  - task: install             # Call another task
  - task: build
      vars: {NODE_ENV: production}
  - cmd: echo "hello"          # Explicit cmd call
      silent: true
  - defer: "cleanup.sh"        # Run when task completes
  - defer:                     # Deferred task call
      task: cleanup
```

### For loops in tasks

```yaml
cmds:
  - for: [1, 2, 3]
    cmd: echo {{.ITEM}}
  - for:
      var: VERSIONS
    cmd: echo {{.ITEM}}
```

## Tool Version Reference

Common tools and their version patterns for `dependencies.ensure`:

| Tool | Example Entry | Notes |
|------|--------------|-------|
| Node.js | `node@22` | Major version |
| Python | `python@3.11` | Major.minor |
| Go | `go@1.23` | Major.minor |
| Rust | `rust@latest` | Usually latest |
| Ruby | `ruby@3.3` | Major.minor |
| pnpm | `pnpm@latest` | Package manager |
| npm | `npm@latest` | Package manager |
| task | `task@latest` | Task runner (go-task) |
| bun | `bun@latest` | JS runtime |
| zig | `zig@latest` | Systems language |
| lua | `lua@5.4` | Major.minor |
| php | `php@8.4` | Major.minor |
| ripgrep | `ripgrep@latest` | Search tool |

## File Naming

The file must be named one of (in priority order):
1. `Razdfile.yml`
2. `Razdfile.yaml`
3. `razdfile.yml`
4. `razdfile.yaml`

Always use `Razdfile.yml` unless the user specifies otherwise.

## Templates

### Node.js project (mise)

```yaml
version: "1"
dependencies:
  using: "mise"
  ensure:
    - "node@22"
    - "pnpm@latest"
tasks:
  default:
    desc: "Set up and run development"
    deps: [install]
    cmds:
      - pnpm dev
  install:
    desc: "Install dependencies"
    cmds:
      - pnpm install
  dev:
    desc: "Start development server"
    cmds:
      - pnpm dev
  build:
    desc: "Build for production"
    cmds:
      - pnpm build
  test:
    desc: "Run tests"
    cmds:
      - pnpm test
  lint:
    desc: "Run linter"
    cmds:
      - pnpm lint
```

### Python project (mise)

```yaml
version: "1"
dependencies:
  using: "mise"
  ensure:
    - "python@3.11"
    - "task@latest"
  extra:
    mise:
      env:
        PYTHONPATH: "."
tasks:
  default:
    desc: "Set up and run"
    deps: [install]
    cmds:
      - python app.py
  install:
    desc: "Install dependencies"
    cmds:
      - pip install -r requirements.txt
  dev:
    desc: "Run development server"
    cmds:
      - python app.py
  test:
    desc: "Run tests"
    cmds:
      - pytest
```

### Go project (mise)

```yaml
version: "1"
dependencies:
  using: "mise"
  ensure:
    - "go@1.23"
    - "task@latest"
tasks:
  default:
    desc: "Build and run"
    cmds:
      - task: build
      - ./bin/app
  build:
    desc: "Compile project"
    cmds:
      - go build -o bin/app .
  test:
    desc: "Run tests"
    cmds:
      - go test ./...
  fmt:
    desc: "Format code"
    cmds:
      - go fmt ./...
```

### Devbox project

```yaml
version: "1"
dependencies:
  using: "devbox"
  ensure:
    - "nodejs@22"
  extra:
    devbox:
      shell:
        init_hook:
          - echo "Welcome to the dev environment!"
tasks:
  default:
    desc: "Install and run"
    deps: [install]
    cmds:
      - npm run dev
  install:
    desc: "Install dependencies"
    cmds:
      - npm install
  dev:
    desc: "Start development"
    cmds:
      - npm run dev
```

### Ruby project (mise)

```yaml
version: "1"
dependencies:
  using: "mise"
  ensure:
    - "ruby@3.3"
    - "task@latest"
tasks:
  default:
    desc: "Set up and run"
    deps: [install]
    cmds:
      - rackup app.ru -p 9292
  install:
    desc: "Install gems"
    cmds:
      - bundle install
  dev:
    desc: "Start development server"
    cmds:
      - rackup app.ru -p 9292
  test:
    desc: "Run tests"
    cmds:
      - bundle exec rspec
```

## Modifying Existing Files

When the user asks to modify an existing Razdfile.yml:

1. Read the current file
2. If it uses `mise:` or `devbox:` top-level sections, convert to `dependencies` format
3. Apply requested changes
4. Validate the result against the rules above
5. Never remove `version: "1"` or change it
6. Preserve the structure and comments

Common modifications:
- "Add python to dependencies" → add to `dependencies.ensure`
- "Switch from mise to devbox" → change `dependencies.using` to `"devbox"`, adjust `ensure` format
- "Add a build task" → add entry under `tasks`
- "Add environment variable" → add to `dependencies.extra.mise.env` or `dependencies.extra.devbox.env`
- "Add a dependency" → use `razd add node@22` or manually add to `dependencies.ensure`

## Converting Legacy Formats

If an existing Razdfile uses `mise:` or `devbox:` as top-level sections, convert it:

**Before (legacy):**
```yaml
version: "1"
mise:
  tools:
    node: "22"
tasks:
  dev: npm run dev
```

**After (preferred):**
```yaml
version: "1"
dependencies:
  using: "mise"
  ensure:
    - "node@22"
tasks:
  dev: npm run dev
```

**Before (legacy):**
```yaml
version: "1"
devbox:
  packages:
    - nodejs@22
tasks:
  dev: npm run dev
```

**After (preferred):**
```yaml
version: "1"
dependencies:
  using: "devbox"
  ensure:
    - "nodejs@22"
tasks:
  dev: npm run dev
```

## Validation Checklist

Before outputting any Razdfile.yml, verify:

- [ ] `version: "1"` is present as the first field
- [ ] `dependencies` section is present with `using` field (if dependencies are specified)
- [ ] `using` value is `"mise"` or `"devbox"`
- [ ] No `mise:` top-level section alongside `dependencies` (mutually exclusive)
- [ ] No `devbox:` top-level section alongside `dependencies` (mutually exclusive)
- [ ] All `ensure` entries match pattern `^[a-z][a-z0-9_-]*@[a-zA-Z0-9._-]+$`
- [ ] At least one content section exists (`tasks`, `includes`, or `dependencies`)
- [ ] Task names are valid YAML identifiers
- [ ] `cmds` entries are strings or objects with `cmd`/`task`/`defer`/`for` keys
- [ ] Provider-specific config goes in `dependencies.extra.mise` or `dependencies.extra.devbox`

## Validation Errors

The razd CLI returns these validation errors:

- `"version field is required"` — missing `version` field
- `"unsupported version X in file Y"` — version is not `"1"`
- `"cannot use 'dependencies' together with 'mise' section"` — mutual exclusion violation
- `"cannot use 'dependencies' together with 'devbox' section"` — mutual exclusion violation
- `"dependencies.using is required (must be 'mise' or 'devbox')"` — missing `using` field
- `"dependencies.using must be 'mise' or 'devbox'"` — invalid provider value
- `"invalid dependency format 'X', expected 'tool@version' (e.g., 'node@22')"` — bad ensure format
- `"Razdfile must have either tasks, mise, devbox, or dependencies configuration"` — no content

## JSON Schema

The official JSON schema is available at `.schema/razdfile.schema.json` in the razd repository. Add this to the top of your Razdfile for IDE validation:

```yaml
# yaml-language-server: $schema=https://raw.githubusercontent.com/razd-cli/razd/1.x/.schema/razdfile.schema.json
```