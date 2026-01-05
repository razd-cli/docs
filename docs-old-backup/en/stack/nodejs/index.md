# Node.js

Guide for setting up Node.js projects using Razd.

## Usage

For Node.js projects, Razd automatically installs the required Node.js version through mise and sets up the development environment.

### Quick Start

Clone and set up a ready example:

```bash
razd up https://github.com/razd-cli/razd-nodejs-example
```

Or set up an existing project:

```bash
cd your-nodejs-project
razd up
```

### What happens with `razd up`

1. 🔧 Installs the specified Node.js version via mise
2. 📦 Installs Task (if specified in configuration)
3. 🚀 Runs setup tasks (install dependencies)
4. ✅ Project is ready to go!

## Configuration

### Razdfile.yml

Minimal configuration for a Node.js project:

```yaml
mise:
  tools:
    node: "22"      # Node.js version
    task: latest    # Task runner (optional)

tasks:
  default:
    - install
    - dev
  
  install:
    desc: "Install dependencies"
    cmds:
      - npm install
  
  dev:
    desc: "Run dev server"
    cmds:
      - npm run dev
  
  build:
    desc: "Build project"
    cmds:
      - npm run build
```

### mise.toml

Alternative configuration via mise:

```toml
[tools]
node = "22"
task = "latest"

[env]
NODE_ENV = "development"
```

### Taskfile.yml

Example Taskfile for a Node.js project:

```yaml
version: '3'

tasks:
  install:
    desc: Install dependencies
    cmds:
      - npm install

  dev:
    desc: Run development server
    cmds:
      - npm run dev

  build:
    desc: Build project for production
    cmds:
      - npm run build

  test:
    desc: Run tests
    cmds:
      - npm test

  lint:
    desc: Lint code
    cmds:
      - npm run lint
```

## Node.js Version Management

### Using specific versions

```yaml
mise:
  tools:
    node: "22.0.0"     # Exact version
    node: "22"         # Latest 22.x.x
    node: "lts"        # Latest LTS version
    node: "latest"     # Latest version
```

### Using .nvmrc

If the project has an `.nvmrc` file, mise automatically uses the version specified in it:

```bash
# .nvmrc
22
```

## Working with Package Managers

### npm (default)

```yaml
tasks:
  install:
    cmds:
      - npm install
```

### pnpm

```yaml
mise:
  tools:
    node: "22"
    pnpm: "latest"

tasks:
  install:
    cmds:
      - pnpm install
```

### yarn

```yaml
mise:
  tools:
    node: "22"
    yarn: "latest"

tasks:
  install:
    cmds:
      - yarn install
```

### bun

```yaml
mise:
  tools:
    bun: "latest"

tasks:
  install:
    cmds:
      - bun install
```

## Common Tasks

### Install dependencies

```bash
razd run install
```

### Run dev server

```bash
razd run dev
```

### Build project

```bash
razd run build
```

### Run tests

```bash
razd run test
```

### View all available tasks

```bash
razd run
```

## Example Projects

- [razd-nodejs-example](https://github.com/razd-cli/razd-nodejs-example) - simple HTTP server with basic setup

## Without Razd

If you prefer to work without Razd, you can use mise and task directly:

```bash
# Install mise
curl https://mise.run | sh

# Install tools
mise install node@22
mise install task@latest

# Use task
task install
task dev
```

## Environment Variables

Configure environment variables in `mise.toml`:

```toml
[tools]
node = "22"

[env]
NODE_ENV = "development"
PORT = "3000"
LOG_LEVEL = "debug"
```

Or create a `.env` file:

```bash
NODE_ENV=development
PORT=3000
LOG_LEVEL=debug
```

## Useful Links

- [Node.js Documentation](https://nodejs.org/docs/)
- [mise Documentation](https://mise.jdx.dev/)
- [Task Documentation](https://taskfile.dev/)
- [npm documentation](https://docs.npmjs.com/)
- [pnpm documentation](https://pnpm.io/)
