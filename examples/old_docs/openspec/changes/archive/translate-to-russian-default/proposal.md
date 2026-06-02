# Translate Documentation to Russian and Make it Default Language

## Summary

Translate all razd-cli documentation from English to Russian and configure VitePress to use Russian as the default language. This change makes the documentation primarily accessible to Russian-speaking users while preserving the English version for international audiences.

## Motivation

The razd-cli project has a strong connection to Russian-speaking developers:
- **Project Name Origin**: "razd" comes from Russian "раздуплиться" (to wake up and get yourself together)
- **Target Audience**: Primary user base is Russian-speaking developers
- **Creator's Native Language**: The project maintainers are native Russian speakers
- **Market Focus**: Initial market and adoption strategy focuses on Russian-speaking tech communities

Currently, all documentation is in English, creating unnecessary friction for the primary audience. Russian-speaking users must:
- Read technical content in a non-native language
- Mentally translate concepts and explanations
- Miss nuances in idiomatic expressions
- Experience slower comprehension and reduced engagement

## Why

Making Russian the default language addresses several critical needs:

1. **Reduced Friction for Primary Users**: Russian-speaking developers can read documentation in their native language, improving comprehension and reducing cognitive load
2. **Authentic Voice**: Technical content written in the creator's native language feels more natural and authentic
3. **Market Alignment**: Aligns with the initial target market (Russian-speaking developer community)
4. **Cultural Connection**: Preserves the cultural context embedded in the project name and philosophy
5. **Faster Adoption**: Native language documentation accelerates onboarding for the primary user base

International users will still have access to English documentation, ensuring the project remains accessible globally while prioritizing the core audience.

## Goals

1. **Complete Russian Translation**: All user-facing documentation translated to Russian
2. **Russian as Default**: VitePress configured to show Russian content by default
3. **Preserve English Version**: Keep English documentation available for international users
4. **Maintain Quality**: Translations maintain technical accuracy and readability
5. **Consistent Terminology**: Establish consistent Russian terminology for technical concepts

## What Changes

This proposal introduces internationalization (i18n) support to the razd-cli documentation and translates all content to Russian as the default language.

### VitePress i18n Configuration Changes

**`config.mts` modifications:**
- Add `locales` configuration with Russian (`ru`) as default root locale
- Configure English (`en`) as secondary locale
- Update navigation, sidebar, and theme text for both languages
- Set proper `lang` and `label` for each locale
- Configure locale-specific meta tags and SEO

**Locale structure:**
```
docs/
├── index.md                 # Russian (default)
├── getting-started.md       # Russian
├── faq.md                   # Russian
├── guide/                   # Russian
│   └── index.md
├── installation/            # Russian
│   └── index.md
└── en/                      # English translations
    ├── index.md
    ├── getting-started.md
    ├── faq.md
    ├── guide/
    │   └── index.md
    └── installation/
        └── index.md
```

### Content Changes

**Pages to translate:**
1. `index.md` - Landing page with hero and features
2. `getting-started.md` - Getting started guide
3. `faq.md` - Frequently asked questions
4. `guide/index.md` - "What is Razd?" explanation
5. `installation/index.md` - Installation guide

**Translation approach:**
- Professional-quality Russian translations
- Preserve technical accuracy
- Adapt idiomatic expressions appropriately
- Maintain consistent terminology (e.g., "project setup" → "настройка проекта")
- Keep code examples and command snippets unchanged

### UI Elements to Localize

**Navigation and theme text:**
- Navigation menu items
- Sidebar headers
- Search placeholder text
- "Edit this page" link text
- Footer content
- Version dropdown labels
- Social links aria-labels

### Technical Terminology Mapping

Establish consistent Russian translations for key terms:
- Project setup → Настройка проекта
- Tool → Инструмент
- Command → Команда
- Configuration → Конфигурация
- Repository → Репозиторий
- Workflow → Рабочий процесс

## Scope

### In Scope
- VitePress i18n configuration
- Full Russian translation of all 5 core documentation pages
- Russian UI text for navigation and theme elements
- Locale-specific meta tags and SEO
- Language switcher in navigation
- Testing both Russian and English versions

### Out of Scope
- Additional languages beyond Russian and English
- Translation of code comments or CLI output
- Automated translation workflows
- Translation memory or glossary tools
- Community translation contributions (future enhancement)
- Documentation versioning per language (future consideration)

## Impact

### User Experience Impact
- **Positive**: Russian-speaking users get native language documentation
- **Positive**: English-speaking users retain full documentation access
- **Positive**: Language switcher allows users to choose preferred language
- **Neutral**: Small learning curve for users expecting English-first docs

### Development Impact
- **Maintenance Overhead**: Documentation updates must be applied to both languages
- **Translation Quality**: Need to ensure technical accuracy in translations
- **Content Drift Risk**: Risk of English and Russian versions diverging over time
- **Mitigation**: Establish clear process for keeping translations synchronized

### SEO and Discoverability
- **Positive**: Better ranking in Russian-language search results
- **Positive**: Proper `hreflang` tags help search engines serve correct language
- **Neutral**: May split SEO authority between language versions

### Project Positioning
- **Positive**: Signals focus on Russian-speaking developer community
- **Positive**: Authentic cultural positioning strengthens brand identity
- **Positive**: Differentiates from English-only projects in the space

## Risks and Mitigations

### Risk: Translation Quality
**Mitigation**: Native Russian speakers review translations for accuracy and naturalness

### Risk: Content Synchronization
**Mitigation**: Document translation process in contributor guidelines; establish update checklist

### Risk: Maintenance Burden
**Mitigation**: Accept minor version drift initially; establish regular sync schedule

### Risk: International Perception
**Mitigation**: Prominently display language switcher; maintain high-quality English version

## Future Considerations

- Automated translation checks or diff tools
- Translation contribution guidelines for community
- Additional language support based on user requests
- Translation management system for larger documentation sets
- Versioned documentation per language (if version-specific content differs)
