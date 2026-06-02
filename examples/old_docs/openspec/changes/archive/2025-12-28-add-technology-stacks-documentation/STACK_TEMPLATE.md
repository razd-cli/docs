# Stack Documentation Template

Use this template when adding documentation for a new technology stack.

## File Structure

```
/stack/
  /[stack-name]/
    index.md
/en/stack/
  /[stack-name]/
    index.md
```

## Required Sections

Each stack documentation page should include:

### 1. Title and Introduction
Brief description of the stack and what Razd provides for it.

### 2. Usage
- Quick start instructions
- What happens during `razd up`
- Basic workflow

### 3. Configuration
- **Razdfile.yml** example
- **mise.toml** example (if applicable)
- **Taskfile.yml** example

### 4. Version Management
How to specify and manage different versions of the technology.

### 5. Package Managers / Build Tools
Common tools used with this stack and how to configure them.

### 6. Common Tasks
Standard tasks developers will use (install, dev, build, test, etc.)

### 7. Example Projects
Links to working example repositories (if available).

### 8. Without Razd
How to achieve the same setup manually using mise and task.

### 9. Environment Variables
How to configure environment-specific settings.

### 10. Useful Links
Official documentation and resources.

## Template Structure

```markdown
# [Stack Name]

Brief introduction and description.

## Usage

### Quick Start

\`\`\`bash
razd up https://github.com/razd-cli/razd-[stack]-example
\`\`\`

### What happens with `razd up`

1. 🔧 Step one
2. 📦 Step two
3. 🚀 Step three
4. ✅ Ready!

## Configuration

### Razdfile.yml

\`\`\`yaml
mise:
  tools:
    [tool]: "[version]"
    task: latest

tasks:
  default:
    - install
    - dev
  
  install:
    desc: "Install dependencies"
    cmds:
      - [command]
\`\`\`

### mise.toml

\`\`\`toml
[tools]
[tool] = "[version]"

[env]
[VAR] = "value"
\`\`\`

### Taskfile.yml

\`\`\`yaml
version: '3'

tasks:
  install:
    desc: Description
    cmds:
      - [command]
\`\`\`

## Version Management

How to specify versions...

## Package Managers / Build Tools

### Tool 1

Configuration example...

## Common Tasks

### Task name

\`\`\`bash
razd run [task]
\`\`\`

## Example Projects

- [razd-[stack]-example](https://github.com/razd-cli/razd-[stack]-example) - description

## Without Razd

\`\`\`bash
# Manual setup instructions
\`\`\`

## Environment Variables

\`\`\`toml
[env]
VAR = "value"
\`\`\`

## Useful Links

- [Official Documentation](https://example.com)
- [mise Documentation](https://mise.jdx.dev/)
- [Task Documentation](https://taskfile.dev/)
```

## Checklist

When adding a new stack:

- [ ] Create `/stack/[name]/index.md` (Russian)
- [ ] Create `/en/stack/[name]/index.md` (English)
- [ ] Add to navigation in `.vitepress/config.mts` (both locales)
- [ ] Add to `/stack/index.md` overview page (both locales)
- [ ] Create example project repository (optional but recommended)
- [ ] Update ExamplesList component if example project exists
- [ ] Add appropriate icon from simple-icons library
- [ ] Test all code examples
- [ ] Verify internal links work
- [ ] Build documentation to check for errors

## Icon Selection

Use [simple-icons](https://simpleicons.org/) for technology logos. Find the icon name and use it in lowercase:

- Node.js: `nodedotjs`
- Python: `python`
- Rust: `rust`
- Go: `go`
- Deno: `deno`
- Bun: `bun`

## Example Updates

### Update config.mts

```typescript
// Russian locale
sidebar: [
  // ...
  {
    text: "Стек технологий",
    items: [
      { text: "Обзор", link: "/stack/" },
      { text: "Node.js", link: "/stack/nodejs/" },
      { text: "Python", link: "/stack/python/" }, // NEW
    ],
  },
],

// English locale
sidebar: [
  // ...
  {
    text: "Stack",
    items: [
      { text: "Overview", link: "/en/stack/" },
      { text: "Node.js", link: "/en/stack/nodejs/" },
      { text: "Python", link: "/en/stack/python/" }, // NEW
    ],
  },
],
```

### Update stack/index.md

```markdown
### [Python](/stack/python/)
Set up Python projects with pip, poetry, and virtual environments.
```
