# Getting Started

Welcome to Razd! This guide will help you get up and running with Razd in just a few minutes.

## What You'll Learn

- How to install Razd on your system
- Your first project setup with `razd up`
- Understanding the Razd workflow
- Next steps for customization

## Prerequisites

Before using Razd, make sure you have:

- **git**: Required for repository operations
- **mise**: Required for tool management ([installation guide](https://mise.jdx.dev/getting-started.html))
- **task**: Will be installed automatically via mise if not present

::: tip
Don't have mise installed? No problem! Check out our [installation guide](/installation/) for step-by-step instructions.
:::

## Your First Project Setup

Let's set up your first project with Razd. We'll use a simple example repository:

### Option 1: Clone and Setup a New Project

```bash
# Clone and set up a project in one command
razd up https://github.com/razd-cli/example-nodejs-project
```

This command will:
1. Clone the repository to your current directory
2. Install development tools via mise
3. Run the project setup task
4. Your project is ready!

### Option 2: Setup an Existing Local Project

If you already have a project locally:

```bash
cd my-existing-project
razd up
```

This will detect your project configuration and run the setup workflow.

## What Just Happened?

When you ran `razd up`, here's what happened behind the scenes:

1. **Detection**: Razd looked for configuration files:
   - `.mise.toml` or `.tool-versions` (for tool management)
   - `Taskfile.yml` (for project tasks)

2. **Tool Installation**: If mise configuration was found:
   ```bash
   mise install  # Installs all tools defined in .mise.toml
   ```

3. **Project Setup**: If a Taskfile was found:
   ```bash
   task setup    # Runs the setup task defined in Taskfile.yml
   ```

4. **Ready**: Your development environment is now ready!

## Verifying the Setup

To verify everything worked correctly:

```bash
# Check that razd is working
razd --version

# Check available tasks (if Taskfile.yml exists)
razd task --list

# Run the default development task
razd task
```

## Next Steps

Now that you have Razd working, explore these topics:

- **[Installation Guide](/installation/)**: Learn about different installation methods
- **[What is Razd](/guide/)**: Understand Razd's philosophy and benefits
- **[FAQ](/faq)**: Common questions and troubleshooting

## Common Issues

Having trouble? Check these common solutions:

### Command not found: razd
Make sure Razd is properly installed and in your PATH. See the [installation guide](/installation/).

### mise command not found
Razd requires mise for tool management. Install it from [mise.jdx.dev](https://mise.jdx.dev/getting-started.html).

### Task fails to run
Make sure your `Taskfile.yml` has a `setup` task defined. You can create a simple setup task to get started.

::: tip Need Help?
If you're still having issues, check our [FAQ](/faq) or reach out on [GitHub](https://github.com/razd-cli/razd/issues).
:::

## What's Next?

Ready to dive deeper? Here are some recommended next steps:

1. **Explore FAQ**: Learn about [common usage patterns](/faq#usage-questions)
2. **Team Setup**: Set up Razd for your development team
3. **Advanced Usage**: Create custom project setups and automation