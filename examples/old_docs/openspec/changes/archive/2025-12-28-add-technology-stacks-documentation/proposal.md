# Add Technology Stacks Documentation

## Overview
Create a dedicated documentation section for technology stacks (Node.js, Python, Rust, Go, etc.), similar to mise.jdx.dev's language-specific pages. Each stack will have its own page with usage examples, Razdfile configurations, and best practices.

## Motivation
Currently, the documentation has:
- Examples page with project cards
- General guides that don't focus on specific technology stacks

Users need stack-specific guidance:
- How to set up a project with a specific technology using Razd
- Stack-specific Razdfile, mise.toml, and Taskfile.yml examples
- Best practices for working with Razd and each technology stack
- Quick reference for common tasks in each stack

## Goals
1. Create a "Стек технологий" (Stack) navigation section in the documentation
2. Establish a consistent structure for technology stack documentation pages
3. Document Node.js first (since we have razd-nodejs-example)
4. Provide a template for adding future stacks (Python, Rust, Go, etc.)
5. Link stack pages with example projects where available

## Scope
**In Scope:**
- Create `/stack/` directory structure
- Add "Стек технологий" section to navigation (Russian) and "Stack" (English)
- Create Node.js stack page with:
  - Usage instructions
  - Razdfile examples
  - mise.toml configuration
  - Taskfile.yml examples
  - Link to razd-nodejs-example project
- Update VitePress config for new navigation structure
- Create template structure for future stack pages

**Out of Scope:**
- Python, Rust, Go, and other stack pages (can be added later)
- Modifications to existing guide or installation pages
- Changes to example project repositories

## User Impact
- Developers can quickly find stack-specific setup instructions
- Clearer path from "I want to use Razd with Node.js" to working project
- Better discoverability of Razdfile configuration options
- Consistent documentation structure across all stacks

## Implementation Notes
Structure will follow mise.jdx.dev pattern:
```
/stack/
  index.md (overview of available stacks)
  /nodejs/
    index.md (Node.js specific guide)
```

Each stack page includes:
- Usage section (how to set up project)
- Example Razdfile
- Example mise.toml
- Example Taskfile.yml
- Link to example project (if exists)
- Common tasks and patterns

## Success Criteria
- [x] Navigation includes "Стек технологий" (Russian) and "Stack" (English) sections
- [x] Node.js stack page is complete and accessible at `/stack/nodejs/`
- [x] Stack pages are properly styled and consistent with existing docs
- [x] Cross-links between examples page and stack pages work correctly
- [x] Documentation builds without errors
- [x] Structure is extensible for adding new stacks

## Open Questions
None at this time.
