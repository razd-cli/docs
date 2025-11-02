# Frequently Asked Questions

## General Questions

### What is Razd?

Razd is a command-line tool that automates project setup by integrating git, mise, and taskfile. Instead of running multiple commands to clone, install tools, and set up a project, you can do it all with a single `razd up` command.

### How is Razd different from other setup tools?

Razd is unique because it:
- **Integrates existing tools** rather than replacing them
- **Requires zero configuration** for most projects
- **Works cross-platform** with consistent behavior
- **Focuses on developer experience** with clear error messages
- **Respects project autonomy** - projects control their own setup

### Do I need to modify my existing projects to use Razd?

No! Razd works with existing mise and taskfile configurations. If your project already uses `.mise.toml` and `Taskfile.yml`, Razd will work immediately with no changes required.

## Installation and Setup

### Which platforms does Razd support?

Razd works on:
- **Windows** (PowerShell, Command Prompt, WSL)
- **macOS** (Intel and Apple Silicon)
- **Linux** (all major distributions)

### Do I need to install mise and task separately?

You need mise installed, but task is optional. If task isn't available, Razd will install it automatically via mise when needed.

### Can I use Razd without mise?

Currently, mise is required for tool management. If your project doesn't use mise, Razd will still work but won't install any tools automatically.

### How do I update Razd?

With mise:
```bash
mise use -g razd@latest
```

For manual installations, download the latest binary from [GitHub releases](https://github.com/razd-cli/razd/releases).

## Usage Questions

### What happens when I run `razd up`?

`razd up` performs these steps:
1. **Clone**: If a URL is provided, clone the repository
2. **Detect**: Look for `.mise.toml` and `Taskfile.yml`
3. **Install**: Run `mise install` if configuration is found
4. **Setup**: Run `task setup` if Taskfile is found
5. **Report**: Show what was accomplished

### Can I use `razd up` on an existing project?

Yes! Running `razd up` in an existing project directory will:
- Skip the clone step
- Install tools via mise (if configured)
- Run setup tasks (if available)

### What if my project doesn't have a `setup` task?

Razd will skip the setup step and let you know. You can create a `setup` task in your `Taskfile.yml` to define what should happen during project initialization.

### Can I customize which task runs during setup?

Currently, Razd runs the `setup` task by default. Custom task configuration is planned for future releases. For now, you can:
- Use `razd install` + `razd task your-custom-task`
- Create a `setup` task that calls your custom tasks

### How do I see what tasks are available?

```bash
razd task --list
# or
task --list
```

## Configuration and Customization

### What is a Razdfile.yml?

A Razdfile.yml is an optional configuration file that allows you to customize Razd's behavior. You can create one with:
```bash
razd init
```

### Can I configure Razd globally?

Yes, you can create a global configuration file at `~/.config/razd/config.yml` or use environment variables like `RAZD_VERBOSE=1`.

### How do I set up Razd for my team?

1. Ensure your project has `.mise.toml` with required tools
2. Create a `Taskfile.yml` with a `setup` task
3. Team members just run `razd up` to get started
4. Consider adding a `Razdfile.yml` for project-specific configuration

### Can I use Razd with monorepos?

Yes! Razd works well with monorepos. You can:
- Have a top-level setup for shared tools
- Use individual Taskfiles in each package
- Run `razd up` from any directory with configuration

## Troubleshooting

### "Command not found: razd"

This means Razd isn't in your PATH. Solutions:
1. Reinstall using the [installation guide](/installation/)
2. Check that the binary is executable (`chmod +x razd` on Unix)
3. Verify your PATH includes the installation directory

### "mise command not found"

Razd requires mise for tool management:
```bash
# Install mise
curl https://mise.jdx.dev/install.sh | sh
# or
brew install mise
```

### Setup fails with "Task 'setup' not found"

Your `Taskfile.yml` doesn't have a `setup` task. You can:
1. Add a `setup` task to your Taskfile
2. Use `razd install` to just install tools
3. Run tasks manually with `razd task task-name`

### Tools aren't being installed

Check that:
1. You have a `.mise.toml` or `.tool-versions` file
2. The file is properly formatted
3. You have network access for tool downloads
4. mise is working: `mise doctor`

### Git clone fails

Common causes:
1. **Repository doesn't exist**: Check the URL
2. **No access**: Verify your credentials for private repos
3. **Network issues**: Check your internet connection
4. **SSH keys**: For SSH URLs, ensure your keys are set up

### Tasks fail to run

Debugging steps:
1. Run with verbose output: `razd --verbose task task-name`
2. Check task definition in `Taskfile.yml`
3. Verify all dependencies are installed
4. Try running the task directly: `task task-name`

## Project Setup

### How do I create a new project with Razd?

1. Create a new directory: `mkdir my-project && cd my-project`
2. Initialize configuration: `razd init`
3. Edit the generated files to match your needs
4. Add your project files
5. Test with `razd up`

### What should go in my `setup` task?

Common setup tasks include:
```yaml
setup:
  deps: [install-deps, setup-env, setup-db]
  cmds:
    - echo "Project setup complete!"

install-deps:
  cmds:
    - npm install # or pip install, etc.

setup-env:
  cmds:
    - cp .env.example .env

setup-db:
  cmds:
    - task db:create
    - task db:migrate
```

### How do I handle sensitive configuration?

Best practices:
1. Use `.env.example` files with placeholder values
2. Copy to `.env` in your setup task
3. Never commit sensitive values to git
4. Use mise for managing API keys when possible

## Integration Questions

### Can I use Razd in CI/CD?

Absolutely! Razd is perfect for CI/CD:
```yaml
# GitHub Actions example
- name: Setup project
  run: razd up
```

Benefits:
- Consistent environment setup
- Faster than manual steps
- Easy to maintain

### Does Razd work with Docker?

Yes! You can:
- Use Razd to set up projects that use Docker
- Run Razd inside Docker containers
- Include Docker tools in your `.mise.toml`

### Can I use Razd with existing build tools?

Razd complements existing tools:
- **npm/yarn**: Works great with Node.js projects
- **cargo**: Perfect for Rust projects
- **pip/poetry**: Excellent for Python projects
- **make**: Can be used alongside or instead of task

### How does Razd work with IDEs?

Razd sets up your project environment, which IDEs can then use:
- VS Code: Will detect tool versions automatically
- IntelliJ: Can use mise-managed tools
- Vim/Neovim: Works with any LSP configuration

## Performance and Best Practices

### How fast is Razd?

Razd is designed for speed:
- Written in Rust for performance
- Parallel tool installation where possible
- Smart caching reduces repeat operations
- Typical setup: 30 seconds to 2 minutes depending on project size

### Best practices for team adoption?

1. **Start simple**: Begin with basic `.mise.toml` and `Taskfile.yml`
2. **Document setup**: Include Razd instructions in your README
3. **Provide examples**: Show common commands and workflows
4. **Test regularly**: Verify setup works on clean environments
5. **Be consistent**: Use similar patterns across projects

### How do I optimize setup performance?

Tips for faster setup:
1. **Use mise caching**: Tools are cached after first install
2. **Parallel tasks**: Use task dependencies smartly
3. **Minimal installs**: Only include necessary tools in `.mise.toml`
4. **Local mirrors**: Use local package mirrors when available

## Getting Help

### Where can I get support?

- **Documentation**: This site covers most common scenarios
- **GitHub Issues**: [Report bugs or request features](https://github.com/razd-cli/razd/issues)
- **GitHub Discussions**: [Community Q&A](https://github.com/razd-cli/razd/discussions)

### How do I report a bug?

Please include:
1. Your operating system and version
2. Razd version (`razd --version`)
3. Complete error message
4. Steps to reproduce
5. Expected vs actual behavior

### How can I contribute?

We welcome contributions:
- **Documentation**: Improve these docs
- **Bug reports**: Help us find and fix issues
- **Feature requests**: Suggest improvements
- **Code**: Submit pull requests
- **Examples**: Share your project setups

Check the [GitHub repository](https://github.com/razd-cli/razd) for more details on contributing.