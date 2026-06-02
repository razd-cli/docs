# Specification: Internationalization Support

## Overview

This specification defines internationalization (i18n) support for the razd-cli documentation site, enabling the documentation to be available in multiple languages with Russian as the default language.

---

## ADDED Requirements

### Requirement: VitePress i18n Configuration

The documentation site MUST support multiple languages through VitePress's built-in internationalization features.

**Acceptance Criteria:**
- VitePress `locales` configuration is present in `config.mts`
- Russian locale is configured as the default root locale (`/`)
- English locale is configured as a secondary locale (`/en/`)
- Each locale has its own navigation, sidebar, and theme text configuration
- Locale-specific meta tags are configured (lang, og:locale)

#### Scenario: User visits documentation without language preference

**Given** a user navigates to the documentation site root URL  
**When** the page loads  
**Then** the documentation displays in Russian (default language)  
**And** the page HTML has `lang="ru"` attribute  
**And** meta tags indicate Russian locale (`og:locale="ru_RU"`)

#### Scenario: User selects English language

**Given** a user is viewing Russian documentation  
**When** the user clicks the language switcher and selects "English"  
**Then** the page navigates to the `/en/` version  
**And** the content displays in English  
**And** the page HTML has `lang="en"` attribute  
**And** meta tags indicate English locale (`og:locale="en_US"`)

---

### Requirement: Default Language is Russian

Russian MUST be the default language for all documentation content, reflecting the primary target audience.

**Acceptance Criteria:**
- Root URL (`/`) serves Russian content
- Russian content is stored in the root docs directory (not in a subdirectory)
- VitePress configuration sets Russian as the default locale
- Russian is the first language option in the language switcher

#### Scenario: First-time visitor sees Russian content

**Given** a new user visits the documentation site for the first time  
**When** they land on any documentation page  
**Then** they see content in Russian by default  
**And** no additional navigation or configuration is required

---

### Requirement: English Language Support

English translations MUST be fully available as a secondary language option.

**Acceptance Criteria:**
- All Russian documentation pages have English equivalents
- English content is stored in `en/` subdirectory
- English pages are accessible via `/en/` URL prefix
- Navigation and UI elements are translated for English locale

#### Scenario: English speaker accesses documentation

**Given** an English-speaking user wants to read the documentation  
**When** they navigate to `/en/` or use the language switcher  
**Then** all documentation pages are available in English  
**And** navigation, sidebar, and UI elements are in English  
**And** all functionality works identically to the Russian version

---

### Requirement: Language Switcher

Users MUST be able to switch between languages easily from any page.

**Acceptance Criteria:**
- Language switcher is visible in the navigation area
- Switcher shows current language and available alternatives
- Clicking switcher navigates to the equivalent page in the selected language
- Language preference is maintained across navigation within the same language
- Switcher is accessible on all documentation pages

#### Scenario: User switches from Russian to English mid-session

**Given** a user is reading the "Getting Started" guide in Russian  
**When** they click the language switcher and select "English"  
**Then** they are navigated to the English version of the "Getting Started" guide  
**And** the URL changes from `/getting-started` to `/en/getting-started`  
**And** subsequent navigation remains in English

#### Scenario: User switches back to Russian

**Given** a user is viewing English documentation  
**When** they click the language switcher and select "Русский"  
**Then** they are navigated to the Russian version of the current page  
**And** the URL changes from `/en/[page]` to `/[page]`  
**And** subsequent navigation remains in Russian

---

### Requirement: Translated Content Coverage

All core documentation pages MUST be fully translated into both Russian and English.

**Acceptance Criteria:**
- Landing page (`index.md`) translated to both languages
- Getting Started guide translated to both languages
- Installation guide translated to both languages
- "What is Razd?" guide translated to both languages
- FAQ page translated to both languages
- Navigation menus translated to both languages
- Sidebar items translated to both languages
- Theme UI text translated to both languages (search, edit link, footer)

#### Scenario: User navigates entire documentation in Russian

**Given** a Russian-speaking user is exploring the documentation  
**When** they navigate through all pages (landing, guide, installation, getting-started, FAQ)  
**Then** every page displays complete Russian content  
**And** no English text appears except in code examples  
**And** all navigation labels and UI elements are in Russian

#### Scenario: User navigates entire documentation in English

**Given** an English-speaking user is exploring the documentation  
**When** they navigate through all pages in the `/en/` section  
**Then** every page displays complete English content  
**And** no Russian text appears except in intentional examples  
**And** all navigation labels and UI elements are in English

---

### Requirement: Technical Terminology Consistency

Technical terms MUST be translated consistently across all documentation pages.

**Acceptance Criteria:**
- A terminology glossary exists documenting standard translations
- Key technical terms use the same Russian translation everywhere
- Common terms include: project setup, tool, command, configuration, repository, workflow
- Glossary is accessible to contributors for maintaining consistency

#### Scenario: User reads about "project setup" across multiple pages

**Given** the documentation mentions "project setup" in multiple contexts  
**When** a Russian-speaking user reads these references  
**Then** the term is consistently translated as "настройка проекта" everywhere  
**And** no alternative translations (e.g., "установка проекта", "инициализация проекта") are used interchangeably

---

### Requirement: SEO and Metadata Localization

Search engines MUST be able to identify and index content in both languages correctly.

**Acceptance Criteria:**
- Each locale has appropriate `lang` attribute on the `<html>` element
- Meta tags include locale-specific values (`og:locale`, `og:site_name`)
- Each page has `hreflang` alternate links pointing to translations (future enhancement)
- Page titles and descriptions are translated per locale

#### Scenario: Search engine crawls Russian documentation

**Given** a search engine crawler visits the Russian documentation  
**When** it parses the HTML  
**Then** it finds `lang="ru"` on the html element  
**And** it finds `<meta property="og:locale" content="ru_RU">`  
**And** page titles and descriptions are in Russian

#### Scenario: Search engine crawls English documentation

**Given** a search engine crawler visits the English documentation  
**When** it parses the HTML of any `/en/` page  
**Then** it finds `lang="en"` on the html element  
**And** it finds `<meta property="og:locale" content="en_US">`  
**And** page titles and descriptions are in English

---

### Requirement: Search Functionality per Language

The built-in search MUST work correctly for both Russian and English content.

**Acceptance Criteria:**
- Search indexes Russian content separately from English content
- Searching in Russian returns Russian results
- Searching in English returns English results
- Search placeholder text is localized per language

#### Scenario: User searches in Russian

**Given** a user is viewing Russian documentation  
**When** they enter a search query in Russian (e.g., "установка")  
**Then** search results show relevant Russian pages  
**And** result snippets display Russian content  
**And** clicking a result navigates to the Russian version of the page

#### Scenario: User searches in English

**Given** a user is viewing English documentation (`/en/`)  
**When** they enter a search query in English (e.g., "installation")  
**Then** search results show relevant English pages  
**And** result snippets display English content  
**And** clicking a result navigates to the English version of the page

---

### Requirement: Mobile Responsiveness for Both Languages

The documentation site MUST display correctly on mobile devices in both languages.

**Acceptance Criteria:**
- Russian text displays properly on mobile screens (no overflow, appropriate wrapping)
- English text displays properly on mobile screens
- Language switcher is accessible and functional on mobile
- Navigation menus work correctly in both languages on mobile
- Typography and spacing accommodate different text lengths per language

#### Scenario: Mobile user views Russian documentation

**Given** a user accesses the documentation on a mobile device  
**When** they view Russian pages  
**Then** all text is readable without horizontal scrolling  
**And** navigation is easily accessible  
**And** the language switcher is usable on mobile

#### Scenario: Mobile user switches languages on mobile

**Given** a mobile user is viewing Russian documentation  
**When** they tap the language switcher and select "English"  
**Then** the page switches to English content  
**And** the layout remains mobile-friendly  
**And** no functionality is lost

---

### Requirement: Translation Quality and Naturalness

Translated content MUST be technically accurate and read naturally in the target language.

**Acceptance Criteria:**
- Russian translations are reviewed by native Russian speakers
- Technical accuracy is maintained in translations
- Idiomatic expressions are adapted appropriately (not literal translations)
- Code examples remain unchanged (language-agnostic)
- Command snippets remain unchanged (CLI commands are universal)

#### Scenario: Native Russian speaker reads documentation

**Given** a native Russian speaker who is a developer  
**When** they read any page of the Russian documentation  
**Then** the text reads naturally and professionally  
**And** technical concepts are clear and accurate  
**And** there are no awkward literal translations or unnatural phrasing

#### Scenario: Developer follows installation guide in Russian

**Given** a Russian-speaking developer is setting up razd  
**When** they follow the Russian installation guide  
**Then** all instructions are clear and unambiguous  
**And** they can successfully complete installation without confusion  
**And** code examples and commands work as documented

---

### Requirement: Documentation Maintenance Process

A clear process MUST exist for keeping translations synchronized as content evolves.

**Acceptance Criteria:**
- Translation process is documented in contributor guidelines
- Checklist exists for updating both language versions
- Terminology glossary is accessible to contributors
- File structure conventions are documented

#### Scenario: Contributor updates English documentation

**Given** a contributor wants to improve the installation guide  
**When** they read the contribution guidelines  
**Then** they find clear instructions on updating both language versions  
**And** they can identify the corresponding Russian file to update  
**And** they have access to the terminology glossary for consistent translations

#### Scenario: Maintainer reviews translation PR

**Given** a pull request updates documentation content  
**When** the maintainer reviews the changes  
**Then** they can verify both languages have been updated  
**And** they can check the diff for both Russian and English versions  
**And** they can confirm terminology consistency using the glossary

---

## Related Capabilities

This specification introduces a new capability (`i18n-support`) to the razd-cli documentation. It does not modify or remove any existing capabilities.

**Dependencies:**
- Existing `user-documentation` capability (from `add-comprehensive-documentation` change)
- VitePress framework's built-in i18n features

**Future Enhancements:**
- Additional language support beyond Russian and English
- Automated translation management workflows
- Community translation contributions
- Per-language documentation versioning
