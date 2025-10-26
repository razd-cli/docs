# What is Razd?

Razd (Russian: разд, from "раздуплиться" - to wake up and get yourself together) is a Rust CLI tool that dramatically simplifies project setup across popular technology stacks.

## The Problem

Setting up a new development project typically involves multiple manual steps:

```bash
# The traditional way
git clone https://github.com/company/awesome-project.git
cd awesome-project
mise install          # Install tools (Node.js, Python, etc.)
npm install           # Or pip install, bundle install, etc.
cp .env.example .env  # Setup configuration
task setup           # Run project-specific setup
task db:migrate      # Database setup
# ... more setup steps
```

This process is:
- **Time-consuming**: Multiple commands to remember and run
- **Error-prone**: Easy to miss steps or run them in wrong order
- **Inconsistent**: Different projects have different setup procedures
- **Frustrating**: Especially for new team members

## The Solution

Razd automates this entire workflow into a single command:

```bash
# The Razd way
razd up https://github.com/company/awesome-project.git
```

That's it! Razd handles the entire setup process automatically.

## How Razd Works

Razd integrates three powerful tools to create a seamless setup experience:

### 1. **git** - Repository Management
- Clones repositories from any Git hosting service
- Supports all Git protocols (HTTPS, SSH, Git)
- Works with public and private repositories

### 2. **mise** - Tool Version Management
- Automatically installs required development tools
- Ensures consistent tool versions across team members
- Supports 500+ tools (Node.js, Python, Ruby, Go, etc.)

### 3. **task** - Project Automation
- Runs project-specific setup tasks
- Handles dependencies, databases, configuration
- Provides consistent task interface across projects

## Key Benefits

### 🚀 **Speed**
- One command replaces 5-10 manual steps
- Parallel tool installation where possible
- Smart caching reduces repeat setup time

### 🌍 **Consistency**
- Same workflow across all projects and platforms
- Standardized setup process for teams
- Works identically on Windows, macOS, and Linux

### 🛡️ **Reliability**
- Automated error handling and recovery
- Clear error messages with suggested fixes
- Validation of each setup step

### 👥 **Team Friendly**
- New team members get productive faster
- Eliminates "works on my machine" problems
- Documented setup process through configuration

### 🔧 **Integration**
- Works with existing mise and taskfile setups
- Non-intrusive - doesn't change your project structure
- Extensible through custom configurations

## Core Concepts

### Convention Over Configuration
Razd follows standard conventions:
- Looks for `.mise.toml` or `.tool-versions` for tool requirements
- Expects `Taskfile.yml` for project tasks
- Runs the `setup` task by default

### Zero Configuration
Razd works immediately with projects that follow standard patterns:
- No Razd-specific configuration required
- Uses existing mise and taskfile configurations
- Gracefully handles missing configurations

### Smart Detection
Razd automatically detects and adapts to your project:
- Identifies available configuration files
- Skips missing steps gracefully
- Provides feedback on what's happening

## When to Use Razd

### Perfect For:
- **Team Onboarding**: Get new developers productive immediately
- **Personal Productivity**: Eliminate repetitive setup tasks
- **CI/CD Pipelines**: Consistent environment setup in automation
- **Project Templates**: Create reusable project setups
- **Workshops/Tutorials**: Quick project setup for participants

### Works Great With:
- Modern development stacks (Node.js, Python, Rust, Go, etc.)
- Monorepos with consistent tooling
- Projects with automated setup procedures
- Teams using mise for tool management
- Projects with Taskfile.yml automation

## What Makes Razd Different

Unlike other setup tools, Razd:

### Integrates Existing Tools
- Doesn't reinvent the wheel
- Leverages proven tools (git, mise, task)
- Works with your existing workflows

### Focuses on Developer Experience
- Designed for daily use by developers
- Minimal learning curve
- Clear, actionable error messages

### Respects Project Autonomy
- Projects control their own setup process
- Razd just orchestrates existing configurations
- No vendor lock-in or proprietary formats

### Cross-Platform Native
- Built in Rust for performance and reliability
- Single binary with no runtime dependencies
- Consistent behavior across all platforms

## Getting Started

Ready to try Razd? Here's what to do next:

1. **[Install Razd](/guide/installation)** - Quick installation guide
2. **[Quick Start](/guide/getting-started)** - Your first project setup
3. **[Examples](/examples/)** - See real-world usage patterns

## Philosophy

Razd is built on the principle that **project setup should be effortless**. We believe:

- Developers should focus on building, not configuring
- Setup processes should be fast, reliable, and consistent
- Tools should integrate seamlessly with existing workflows
- Automation should enhance, not replace, developer knowledge

Razd embodies the Russian concept of "раздуплиться" - to wake up, get organized, and get moving efficiently. It's about cutting through setup friction so you can get to what matters: building great software.