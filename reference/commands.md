# Command Reference

Razd provides a simple but powerful command-line interface. All commands are designed to be intuitive and follow common CLI patterns.

## Global Options

All Razd commands support these global options:

- `--help, -h`: Show help information
- `--version, -V`: Show version information
- `--verbose, -v`: Enable verbose output
- `--quiet, -q`: Suppress non-essential output

## Available Commands

### [`razd up`](/reference/up)
Set up a project (clone + install + setup)

```bash
razd up [URL] [OPTIONS]
```

The primary command for project setup. Can clone a repository and set it up, or set up an existing local project.

### [`razd install`](/reference/install)
Install development tools via mise

```bash
razd install [OPTIONS]
```

Runs `mise install` to install all tools defined in `.mise.toml` or `.tool-versions`.

### [`razd setup`](/reference/setup)
Run project setup tasks

```bash
razd setup [OPTIONS]
```

Runs the `setup` task from `Taskfile.yml` to initialize the project.

### [`razd task`](/reference/task)
Execute tasks from Taskfile.yml

```bash
razd task [TASK] [ARGS...]
```

Execute specific tasks or run the default task if no task is specified.

### [`razd init`](/reference/init)
Initialize Razd configuration

```bash
razd init [OPTIONS]
```

Create a new Razdfile.yml with common configuration templates.

## Command Categories

### Project Setup Commands
- **`razd up`**: Complete project setup workflow
- **`razd install`**: Tool installation only
- **`razd setup`**: Project setup only

### Task Execution
- **`razd task`**: Run project tasks

### Configuration
- **`razd init`**: Create configuration files

## Common Usage Patterns

### New Project Setup
```bash
# Clone and set up in one command
razd up https://github.com/user/project.git

# With custom directory name
razd up https://github.com/user/project.git -n my-project
```

### Existing Project Setup
```bash
# Set up current directory
razd up

# Just install tools
razd install

# Just run setup tasks
razd setup
```

### Task Execution
```bash
# Run default task (usually starts dev server)
razd task

# Run specific task
razd task build

# Run task with arguments
razd task test -- --coverage

# List available tasks
razd task --list
```

### Project Initialization
```bash
# Create a new Razdfile.yml
razd init

# Use a specific template
razd init --template nodejs
```

## Exit Codes

Razd uses standard exit codes to indicate command status:

- **0**: Success
- **1**: General error
- **2**: Misuse of shell command
- **126**: Command invoked cannot execute
- **127**: Command not found
- **128+n**: Fatal error signal "n"

## Environment Variables

Razd respects these environment variables:

- **`RAZD_CONFIG`**: Path to custom Razdfile.yml
- **`RAZD_VERBOSE`**: Enable verbose output (set to "1" or "true")
- **`RAZD_QUIET`**: Suppress output (set to "1" or "true")
- **`NO_COLOR`**: Disable colored output

## Configuration Files

Razd looks for configuration in this order:

1. `./Razdfile.yml` (project-specific)
2. `~/.config/razd/config.yml` (user-specific)
3. Built-in defaults

## Integration with Other Tools

### mise Integration
Razd automatically detects and uses:
- `.mise.toml`
- `.tool-versions`
- `mise.toml`

### Taskfile Integration
Razd works with standard Taskfile.yml:
- `Taskfile.yml`
- `taskfile.yml`
- `Taskfile.yaml`
- `taskfile.yaml`

### Git Integration
Razd supports all Git URL formats:
- HTTPS: `https://github.com/user/repo.git`
- SSH: `git@github.com:user/repo.git`
- Git protocol: `git://github.com/user/repo.git`

## Error Handling

Razd provides clear error messages and suggestions:

```bash
$ razd up missing-repo
Error: Repository not found
Suggestion: Check the URL and your access permissions

$ razd task missing-task
Error: Task 'missing-task' not found
Available tasks: build, test, lint, dev
```

## Debugging

For troubleshooting, use verbose mode:

```bash
# See detailed execution information
razd --verbose up

# Or set environment variable
RAZD_VERBOSE=1 razd up
```

## Quick Reference

| Command | Purpose | Example |
|---------|---------|---------|
| `razd up [URL]` | Complete setup | `razd up github.com/user/repo` |
| `razd install` | Install tools | `razd install` |
| `razd setup` | Run setup tasks | `razd setup` |
| `razd task [name]` | Execute task | `razd task build` |
| `razd init` | Create config | `razd init` |

## Next Steps

- Learn about specific commands in detail:
  - [`razd up`](/reference/up) - The main command
  - [`razd task`](/reference/task) - Task execution
  - [`razd init`](/reference/init) - Configuration setup
- Explore [configuration options](/reference/razdfile)
- See [real-world examples](/examples/)