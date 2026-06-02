# Translation Maintenance Guide

This guide explains how to maintain synchronized translations between Russian and English documentation.

## File Structure

```
docs/
├── index.md              # Russian (default)
├── getting-started.md    # Russian
├── faq.md               # Russian
├── guide/
│   └── index.md         # Russian
├── installation/
│   └── index.md         # Russian
└── en/                  # English translations
    ├── index.md
    ├── getting-started.md
    ├── faq.md
    ├── guide/
    │   └── index.md
    └── installation/
        └── index.md
```

## Translation Workflow

### When Adding New Content

1. **Write in Russian first** (default language)
2. **Translate to English** and place in corresponding `en/` directory
3. **Verify terminology** using `.github/TERMINOLOGY.md`
4. **Test both versions** to ensure functionality

### When Updating Existing Content

1. **Identify the change**: What content needs updating?
2. **Update Russian version**: Make changes to root `.md` files
3. **Update English version**: Apply equivalent changes to `en/` files
4. **Check links**: Ensure internal links work in both languages
5. **Verify consistency**: Use the checklist below

## Translation Checklist

Use this checklist when updating documentation:

- [ ] Russian version updated
- [ ] English version updated
- [ ] Terminology consistent (check `.github/TERMINOLOGY.md`)
- [ ] Code examples identical in both versions
- [ ] Commands unchanged (language-agnostic)
- [ ] Internal links work (`/path` for Russian, `/en/path` for English)
- [ ] External links identical in both versions
- [ ] Navigation structure matches
- [ ] Page titles translated
- [ ] Meta descriptions translated

## Quick Reference Commands

### Search for Untranslated Content

```bash
# Find English text in Russian files (excluding code blocks)
rg "(?<!```)(\bthe\b|\band\b)" docs/*.md docs/guide/*.md docs/installation/*.md

# Find Russian text in English files
rg "[а-яА-Я]+" docs/en/**/*.md
```

### Verify File Structure Parity

```bash
# List Russian files
ls -R docs/*.md docs/guide docs/installation

# List English files  
ls -R docs/en

# Compare (should have same structure)
diff <(ls -R docs/*.md docs/guide docs/installation | sort) <(ls -R docs/en | sort)
```

### Check Terminology Consistency

```bash
# Search for specific term across all docs
rg "настройка проекта" docs/**/*.md

# Verify no mixed terminology
rg "project setup" docs/*.md docs/guide/*.md docs/installation/*.md
```

## Common Translation Patterns

### Page Frontmatter

Always use the same frontmatter structure:

```yaml
# Russian version
---
layout: home
title: Заголовок
---

# English version (en/)
---
layout: home
title: Title
---
```

### Internal Links

```markdown
# Russian (root)
[Установка](/installation/)
[FAQ](/faq)

# English (en/)
[Installation](/en/installation/)
[FAQ](/en/faq)
```

### Code Examples

**Never translate** code, commands, or technical identifiers:

```markdown
# Both Russian and English versions
```bash
razd up https://github.com/example/project.git
```
```

### Terminology

Always use the glossary (`.github/TERMINOLOGY.md`) for consistent translations:

- project setup → настройка проекта ✅
- project setup → установка проекта ❌
- project setup → инициализация проекта ❌

## Syncing Process

### For Major Updates

1. Create a branch for the update
2. Update Russian content
3. Update English content
4. Run verification commands
5. Test locally with `pnpm run docs:dev`
6. Create PR with both language updates

### For Minor Fixes

1. Update both language versions in same commit
2. Use commit message format: `docs: update [page] (ru + en)`
3. Include brief description of what changed

## Testing Translations

### Local Testing

```bash
# Start dev server
pnpm run docs:dev

# Test Russian version
open http://localhost:5173/docs/

# Test English version
open http://localhost:5173/docs/en/

# Test language switcher
# Click language switcher and verify navigation
```

### Validation Checklist

- [ ] Navigation menus work in both languages
- [ ] Search works for both Russian and English
- [ ] Language switcher switches correctly
- [ ] All pages load without errors
- [ ] Links don't break across languages
- [ ] Mobile view works for both languages

## Contributing Translations

### For Contributors

When contributing documentation changes:

1. **Check if both languages need updates**
2. **Use the terminology glossary**
3. **Keep translations natural** (not literal)
4. **Preserve technical accuracy**
5. **Test both versions locally**

### Translation Guidelines

- **Natural Language**: Write naturally, not word-for-word translations
- **Technical Accuracy**: Preserve all technical details
- **Cultural Adaptation**: Adapt idioms appropriately
- **Code Unchanged**: Never translate code examples
- **Commands Unchanged**: Never translate CLI commands
- **Consistency**: Use glossary for standard terms

## Troubleshooting

### Mixed Language Content

**Problem**: Russian page has English text
**Solution**:
```bash
# Find English words in Russian docs
rg "\b(the|and|for|with)\b" docs/*.md docs/guide/*.md docs/installation/*.md
```

### Broken Links

**Problem**: Links don't work after language switch
**Solution**: Check that links include `/en/` prefix for English version

### Terminology Inconsistency

**Problem**: Same concept translated differently
**Solution**: Search for all instances and standardize using glossary

### Missing Translations

**Problem**: English version not updated
**Solution**: Use diff to find changes:
```bash
# Compare Russian and English versions of a page
diff docs/getting-started.md docs/en/getting-started.md
```

## Maintenance Schedule

### Regular Tasks

- **Weekly**: Check for terminology consistency
- **Before Release**: Verify all translations are synced
- **After Major Update**: Run full validation checklist
- **Monthly**: Review and update terminology glossary

## Contact

For questions about translations or to report issues:
- GitHub Issues: [razd-cli/docs](https://github.com/razd-cli/docs/issues)
- Label: `documentation`, `translation`
