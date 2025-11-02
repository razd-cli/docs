import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Razd",
  description:
    "Streamlined project setup with git, mise, and taskfile integration",
  base: "/docs/",

  // Support for iconify-icon custom elements
  vue: {
    template: {
      compilerOptions: { isCustomElement: (tag) => tag === "iconify-icon" },
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
    ["meta", { name: "og:locale", content: "en" }],
    ["meta", { name: "og:site_name", content: "Razd Documentation" }],
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

    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "Getting Started", link: "/getting-started" },
      { text: "Installation", link: "/installation/" },
      { text: "FAQ", link: "/faq" },
      {
        text: "v0.1.14",
        items: [
          {
            text: "Release Notes",
            link: "https://github.com/razd-cli/razd/releases",
          },
        ],
      },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            { text: "What is Razd?", link: "/guide/" },
            { text: "Installation", link: "/installation/" },
            { text: "Getting Started", link: "/getting-started" },
            { text: "FAQ", link: "/faq" },
          ],
        },
      ],

      "/installation/": [
        {
          text: "Installation",
          items: [{ text: "Overview", link: "/installation/" }],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/razd-cli/razd" }],

    search: {
      provider: "local",
    },

    editLink: {
      pattern: "https://github.com/razd-cli/docs/edit/main/:path",
      text: "Edit this page on GitHub",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025 razd-cli",
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
