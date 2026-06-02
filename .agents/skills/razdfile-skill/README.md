# razdfile-skill

[![skills.sh](https://img.shields.io/endpoint?url=https://www.skills.sh/api/badge/razd-cli/razdfile-skill)](https://www.skills.sh/razd-cli/razdfile-skill)

Agent Skill for generating and validating Razdfile.yml configuration files.

## What is Razdfile.yml?

Razdfile.yml is the configuration file for [razd](https://github.com/razd-cli/razd) — a project environment provisioning CLI. It defines which tools to install (via mise or devbox), what tasks to run, and environment configuration.

## Installation

Install globally:

```bash
npx skills add razd-cli/razdfile-skill -g
```

Install in a project:

```bash
npx skills add razd-cli/razdfile-skill
```

## Usage

Ask your AI agent to create, edit, or validate a Razdfile.yml:

- "Create a Razdfile for my Node.js project"
- "Add Python 3.11 to my Razdfile"
- "Validate this Razdfile.yml"
- "Switch my Razdfile from mise to devbox"
- "Add build and test tasks to my Razdfile"

## Features

- Generates valid Razdfile.yml with correct `version: "1"` field
- Enforces `dependencies` format with `using` field for mise or devbox
- Validates mutual exclusion rules (dependencies vs mise/devbox top-level)
- Validates `ensure` entries match `^[a-z][a-z0-9_-]*@[a-zA-Z0-9._-]+$`
- Task definitions compatible with Taskfile format
- Templates for common project types (Node.js, Python, Go, Ruby, Devbox)
- CLI command reference for razd 1.x

## CLI Reference

```
razd init                   Create Razdfile.yml
razd init --using devbox    Create with devbox provider
razd add <tool@version>     Add a dependency
razd up                     Install dependencies
razd up -r                  Install and run default task
razd run [task]             Run task(s)
razd list                   List tasks
razd shell                  Start provisioned shell
razd trust                  Trust project
razd dev                    Run 'dev' task
razd build                  Run 'build' task
```

## License

MIT