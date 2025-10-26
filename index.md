---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Razd"
  text: "The Modern Project Setup Tool"
  tagline: "Streamlined project setup with git, mise, and taskfile integration"
  image:
    src: /logo.png
    alt: Razd
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/razd-cli/razd

features:
  - icon: 🚀
    title: 30-Second Setup
    details: One command to clone, install tools, and run setup. No more multi-step project initialization.
  
  - icon: 🔧
    title: Tool Integration
    details: Seamlessly integrates git, mise, and taskfile for a complete development workflow.
  
  - icon: 🌍
    title: Cross-Platform
    details: Works consistently on Windows, macOS, and Linux with no extra configuration.
  
  - icon: ⚡
    title: Smart Detection
    details: Automatically detects mise and taskfile configurations in any project.
  
  - icon: 📦
    title: Zero Dependencies
    details: Single binary with no runtime dependencies beyond git, mise, and task.
  
  - icon: 🎯
    title: Convention Over Configuration
    details: Works out-of-the-box with sensible defaults while remaining fully customizable.
---

## Quick Example

Get a project up and running in seconds:

```bash
# Clone and set up a project in one command
razd up https://github.com/hello/world.git

# Or set up an existing local project
cd my-project
razd up
```

## How It Works

Razd automates the common project setup workflow:

1. **Clone**: Uses git to clone the repository (if URL provided)
2. **Install Tools**: Detects `.mise.toml` and runs `mise install`
3. **Project Setup**: Detects `Taskfile.yml` and runs `task setup`
4. **Ready**: Your project is ready for development

## Why Razd?

Instead of running multiple commands every time you set up a project:

```bash
git clone https://github.com/hello/world.git
cd world
mise install
task setup
```

Just run:

```bash
razd up https://github.com/hello/world.git
```

Perfect for:
- **Team onboarding**: New developers get productive faster
- **CI/CD**: Consistent environment setup in pipelines
- **Personal productivity**: Eliminate repetitive setup tasks

