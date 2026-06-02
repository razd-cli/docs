import { defineConfig } from "vitepress";
import { vitepressPluginLegend } from "vitepress-plugin-legend";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Razd",
  description:
    "Современный инструмент для настройки проектовУпрощённая настройка проекта с интеграцией git, mise и taskfile",

  // Support for iconify-icon custom elements
  vue: {
    template: {
      compilerOptions: { isCustomElement: (tag) => tag === "iconify-icon" },
    },
  },

  // Internationalization configuration
  locales: {
    root: {
      label: "Русский",
      lang: "ru",
      title: "Razd",
      description:
        "Современный инструмент для настройки проектов. Упрощённая настройка проекта с интеграцией git, mise и taskfile",
      themeConfig: {
        nav: [
          { text: "Примеры", link: "/examples/" },
          { text: "Документация", link: "/guide/" },
          {
            text: "v0.4.4",
            items: [
              {
                text: "Примечания к релизу",
                link: "https://github.com/razd-cli/razd/releases",
              },
            ],
          },
        ],
        sidebar: [
          {
            text: "Документация",
            items: [
              { text: "Начало работы", link: "/getting-started" },
              { text: "Установка", link: "/installation/" },
              { text: "Руководство", link: "/guide/" },
              { text: "FAQ", link: "/faq" },
            ],
          },
          {
            text: "Стек технологий",
            items: [
              { text: "Обзор", link: "/stack/" },
              { text: "Node.js", link: "/stack/nodejs/" },
            ],
          },
        ],
        editLink: {
          pattern: "https://github.com/razd-cli/docs/edit/main/:path",
          text: "Редактировать на GitHub",
        },
        footer: {
          message: "Выпущено под лицензией MIT.",
          copyright: "Copyright © 2025 razd-cli",
        },
        docFooter: {
          prev: "Предыдущая страница",
          next: "Следующая страница",
        },
        outline: {
          label: "Содержание страницы",
        },
        lastUpdated: {
          text: "Обновлено",
        },
        langMenuLabel: "Изменить язык",
        returnToTopLabel: "Вернуться к началу",
        sidebarMenuLabel: "Меню",
        darkModeSwitchLabel: "Оформление",
        lightModeSwitchTitle: "Переключить на светлую тему",
        darkModeSwitchTitle: "Переключить на тёмную тему",
      },
    },
    en: {
      label: "English",
      lang: "en",
      title: "Razd",
      description:
        "Streamlined project setup with git, mise, and taskfile integration",
      themeConfig: {
        nav: [
          { text: "Docs", link: "/en/guide/" },
          { text: "Stack", link: "/en/stack/" },
          {
            text: "v0.4.42",
            items: [
              {
                text: "Release Notes",
                link: "https://github.com/razd-cli/razd/releases",
              },
            ],
          },
        ],
        sidebar: [
          {
            text: "Docs",
            items: [
              { text: "Getting Started", link: "/en/getting-started" },
              { text: "Installation", link: "/en/installation/" },
              { text: "Guide", link: "/en/guide/" },
              { text: "FAQ", link: "/en/faq" },
            ],
          },
          {
            text: "Stack",
            items: [
              { text: "Overview", link: "/en/stack/" },
              { text: "Node.js", link: "/en/stack/nodejs/" },
            ],
          },
        ],
        editLink: {
          pattern: "https://github.com/razd-cli/docs/edit/main/:path",
          text: "Edit this page on GitHub",
        },
        footer: {
          message: "Released under the MIT License.",
          copyright: "Copyright © 2025 razd-cli",
        },
      },
    },
  },

  head: [
    // Favicon configurations
    ["link", { rel: "icon", href: "https://razd-cli.com/favicon.ico" }],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/logo.png",
      },
    ],
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/logo.png" }],

    // Theme and meta configurations
    ["meta", { name: "theme-color", content: "#cba6f7" }], // Catppuccin Mocha Mauve

    // SEO Meta Tags
    [
      "meta",
      {
        name: "keywords",
        content:
          "razd, project setup, mise, taskfile, git, automation, cross-platform, cli tool, developer tools, project management",
      },
    ],
    ["meta", { name: "author", content: "razd-cli" }],
    ["meta", { name: "robots", content: "index, follow" }],

    // Open Graph Tags
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://razd-cli.com/" }],
    ["meta", { property: "og:site_name", content: "Razd" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://razd-cli.com/logo.png",
      },
    ],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    [
      "meta",
      { property: "og:image:alt", content: "Razd - Modern Project Setup Tool" },
    ],

    // Twitter Card Tags
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://razd-cli.com/logo.png",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image:alt",
        content: "Razd - Modern Project Setup Tool",
      },
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/razd-cli/razd",
        ariaLabel: "GitHub",
      },
      {
        icon: "telegram",
        link: "https://t.me/razd_cli",
        ariaLabel: "Telegram",
      },
    ],

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "Поиск",
                buttonAriaLabel: "Поиск",
              },
              modal: {
                noResultsText: "Нет результатов для",
                resetButtonTitle: "Сбросить поиск",
                footer: {
                  selectText: "для выбора",
                  navigateText: "для навигации",
                  closeText: "закрыть",
                },
              },
            },
          },
          en: {
            translations: {
              button: {
                buttonText: "Search",
                buttonAriaLabel: "Search",
              },
              modal: {
                noResultsText: "No results for",
                resetButtonTitle: "Reset search",
                footer: {
                  selectText: "to select",
                  navigateText: "to navigate",
                  closeText: "to close",
                },
              },
            },
          },
        },
      },
    },
  },

  // Enable line numbers in code blocks
  markdown: {
    lineNumbers: true,
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
    config(md) {
      vitepressPluginLegend(md as any);
    },
  },

  // Performance optimization
  lastUpdated: true,
  cleanUrls: true,

  // Generate sitemap for better SEO
  sitemap: {
    hostname: "https://razd-cli.com/",
  },

  // Transform page data to add canonical URLs and dynamic meta tags
  transformPageData(pageData) {
    const canonicalUrl = `https://razd-cli.com/${pageData.relativePath}`
      .replace(/index\.md$/, "")
      .replace(/\.md$/, ".html");

    pageData.frontmatter.head ??= [];

    // Add canonical URL
    pageData.frontmatter.head.push([
      "link",
      { rel: "canonical", href: canonicalUrl },
    ]);

    // Determine the appropriate title
    const isHomePage = pageData.frontmatter.layout === "home";
    const pageTitle = isHomePage
      ? "Razd - Modern Project Setup Tool"
      : pageData.title
      ? `${pageData.title} | Razd`
      : "Razd";

    // Add dynamic Open Graph title
    pageData.frontmatter.head.push([
      "meta",
      {
        property: "og:title",
        content: pageTitle,
      },
    ]);

    // Add dynamic Open Graph description
    if (pageData.description) {
      pageData.frontmatter.head.push([
        "meta",
        {
          property: "og:description",
          content: pageData.description,
        },
      ]);

      // Add Twitter description
      pageData.frontmatter.head.push([
        "meta",
        {
          name: "twitter:description",
          content: pageData.description,
        },
      ]);
    }

    // Add dynamic Twitter title
    pageData.frontmatter.head.push([
      "meta",
      {
        name: "twitter:title",
        content: pageTitle,
      },
    ]);
  },
});
