import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Razd",
  description:
    "Упрощённая настройка проекта с интеграцией git, mise и taskfile",
  base: "/docs/",

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
        "Упрощённая настройка проекта с интеграцией git, mise и taskfile",
      themeConfig: {
        nav: [
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
    [
      "link",
      { rel: "icon", href: "https://razd-cli.github.io/docs/favicon.ico" },
    ],
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
    ["meta", { name: "og:type", content: "website" }],
    [
      "meta",
      { name: "og:image", content: "https://razd-cli.github.io/docs/logo.png" },
    ],
    ["meta", { name: "og:image:width", content: "1200" }],
    ["meta", { name: "og:image:height", content: "630" }],
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
  },

  // Performance optimization
  lastUpdated: true,
  cleanUrls: true,
});
