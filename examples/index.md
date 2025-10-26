# Examples

This section provides real-world examples of using Razd with different project types and scenarios. Each example includes complete configuration files and step-by-step instructions.

## Project Types

### Node.js Projects
Complete setup for Node.js applications with npm, pnpm, or yarn

### Python Projects  
Python applications with pip, poetry, or pipenv dependency management

### Rust Projects
Rust applications with Cargo build system and tool management

### Go Projects
Go applications with modules and development tools

### Full-Stack Applications
Multi-language applications with frontend and backend components

## Common Use Cases

### Team Onboarding
Set up new team members quickly and consistently

### CI/CD Integration
Use Razd in continuous integration and deployment pipelines

### Monorepo Setup
Manage multiple projects in a single repository

## Quick Start Examples

### Simple Node.js Project

```bash
# Clone and setup
razd up https://github.com/example/simple-node-app.git
```

**Project structure:**
```
.mise.toml          # Node.js version
Taskfile.yml        # Setup and dev tasks
package.json        # Dependencies
```

### Python with Poetry

```bash
# Setup existing project
cd my-python-project
razd up
```

**Configuration:**
```toml
# .mise.toml
[tools]
python = "3.11"
poetry = "latest"
```

```yaml
# Taskfile.yml
tasks:
  setup:
    cmds:
      - poetry install
      - poetry run pre-commit install
```

### Full-Stack Application

```bash
# Multi-service setup
razd up https://github.com/example/fullstack-app.git
```

**Features:**
- Frontend (React/Vue)
- Backend (Node.js/Python)
- Database setup
- Development environment

## Configuration Templates

### Basic Web Application
```yaml
# Taskfile.yml
version: '3'

tasks:
  setup:
    desc: Initialize the project
    deps: [install, env, db]
    
  install:
    desc: Install dependencies
    cmds:
      - npm install
      
  env:
    desc: Set up environment
    cmds:
      - cp .env.example .env
      
  db:
    desc: Set up database
    cmds:
      - npm run db:create
      - npm run db:migrate
      
  dev:
    desc: Start development server
    cmds:
      - npm run dev
```

### Multi-Language Project
```toml
# .mise.toml
[tools]
node = "18"
python = "3.11"
go = "1.21"
task = "latest"

[env]
NODE_ENV = "development"
PYTHON_ENV = "development"
```

### Team Collaboration
```yaml
# Taskfile.yml
version: '3'

tasks:
  setup:
    desc: Complete project setup for new team members
    cmds:
      - task: welcome
      - task: install
      - task: configure
      - task: verify
      
  welcome:
    desc: Welcome message
    cmds:
      - echo "Welcome to the Awesome Project!"
      - echo "Setting up your development environment..."
      
  install:
    desc: Install all dependencies
    deps: [install:system, install:project]
    
  install:system:
    desc: Install system dependencies
    cmds:
      - task: install:{{OS}}
      
  install:linux:
    cmds:
      - sudo apt-get update
      - sudo apt-get install -y build-essential
      
  install:darwin:
    cmds:
      - brew install libpq
      
  install:project:
    cmds:
      - npm install
      - pip install -r requirements.txt
      
  configure:
    desc: Set up configuration files
    cmds:
      - cp .env.example .env
      - cp config/database.yml.example config/database.yml
      
  verify:
    desc: Verify installation
    cmds:
      - task: test:quick
      - echo "Setup complete! Run 'razd task dev' to start development."
```

## Advanced Patterns

### Conditional Setup
```yaml
# Taskfile.yml with conditional logic
tasks:
  setup:
    deps: [install]
    cmds:
      - task: setup:{{.PLATFORM}}
      
  setup:linux:
    cmds:
      - sudo systemctl start postgresql
      - task: db:setup
      
  setup:darwin:
    cmds:
      - brew services start postgresql
      - task: db:setup
      
  setup:windows:
    cmds:
      - net start postgresql
      - task: db:setup
```

### Environment-Specific Setup
```yaml
# Different setups for different environments
tasks:
  setup:
    cmds:
      - task: setup:{{.ENV | default "development"}}
      
  setup:development:
    cmds:
      - task: install:dev
      - task: db:seed
      
  setup:production:
    cmds:
      - task: install:prod
      - task: db:migrate
      
  setup:test:
    cmds:
      - task: install:test
      - task: db:test-setup
```

## Tips and Best Practices

### 1. Keep Setup Tasks Idempotent
Ensure tasks can be run multiple times safely:

```yaml
tasks:
  setup-db:
    cmds:
      - |
        if ! psql -lqt | cut -d \| -f 1 | grep -qw myapp; then
          createdb myapp
        fi
```

### 2. Provide Clear Feedback
Use descriptive task descriptions and progress indicators:

```yaml
tasks:
  setup:
    desc: "Set up the entire development environment"
    cmds:
      - echo "📦 Installing dependencies..."
      - task: install
      - echo "🗄️ Setting up database..."
      - task: db:setup
      - echo "✅ Setup complete!"
```

### 3. Handle Errors Gracefully
Provide helpful error messages:

```yaml
tasks:
  setup:
    cmds:
      - task: check-prerequisites
      - task: install
    
  check-prerequisites:
    cmds:
      - |
        if ! command -v node >/dev/null 2>&1; then
          echo "❌ Node.js is required but not installed"
          echo "Please install Node.js: https://nodejs.org"
          exit 1
        fi
```

### 4. Document Your Setup
Include helpful information in your tasks:

```yaml
tasks:
  setup:
    desc: |
      Complete project setup for new contributors.
      This will install dependencies, set up the database,
      and configure your development environment.
    cmds:
      - task: install
      - task: configure
      - echo "🎉 Setup complete! Try running 'razd task dev'"
```

## Next Steps

- Explore specific project type examples
- Learn about [command reference](/reference/commands)
- Check out the [FAQ](/troubleshooting/faq) for common questions