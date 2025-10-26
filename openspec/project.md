# Project Context

## Purpose
razd (from Russian "раздуплиться" - to wake up and get yourself together) is a Rust CLI tool that dramatically simplifies project setup across popular technology stacks. It provides one-command project initialization by integrating git, mise, and taskfile.dev.

## Tech Stack
- Rust (primary language for CLI implementation)
- VitePress/Vue.js (documentation site)
- OpenSpec (spec-driven development)
- GitHub Actions (CI/CD)
- mise (tool version management)
- Task/Taskfile.yml (task automation)

## Project Conventions

### Code Style
- Rust: Standard rustfmt formatting
- Documentation: Markdown with VitePress conventions
- Configuration: YAML for Taskfiles and mise.toml

### Architecture Patterns
- CLI follows standard Rust patterns with clap for argument parsing
- Cross-platform compatibility (Windows, macOS, Linux)
- Integration-focused design (git + mise + task)

### Testing Strategy
- Unit tests for core CLI functionality
- Integration tests for end-to-end workflows
- Documentation examples should be tested/validated

### Git Workflow
- Main branch with feature branches
- Conventional commits
- Automated releases with semantic versioning

## Domain Context
razd is focused on developer experience and project setup automation. Key concepts:
- **Project Setup Workflow**: git clone → mise install → task setup
- **Tool Integration**: Seamless interaction between git, mise, and taskfile
- **Cross-platform Support**: Works consistently across operating systems
- **Zero Configuration**: Works out-of-box with convention over configuration

## Important Constraints
- Must maintain compatibility with existing mise and taskfile ecosystems
- CLI should remain lightweight and fast
- Documentation must be accessible to developers of all experience levels
- Installation should be simple across all supported platforms

## External Dependencies
- git: Required for repository operations
- mise: Required for tool management (optional if project doesn't use mise)
- task: Required for task execution (optional if project doesn't use taskfile)
- GitHub: Primary hosting and release platform
