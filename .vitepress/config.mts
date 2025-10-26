import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Razd",
  description:
    "Streamlined project setup with git, mise, and taskfile integration",
  base: "/docs/",

  head: [
    ["link", { rel: "icon", href: "/docs/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#646cff" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["meta", { name: "og:site_name", content: "Razd Documentation" }],
    ["meta", { name: "og:image", content: "/docs/og-image.png" }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",

    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Reference", link: "/reference/commands" },
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
          text: "Getting Started",
          items: [
            { text: "What is Razd?", link: "/guide/what-is-razd" },
            { text: "Installation", link: "/guide/installation" },
            { text: "Quick Start", link: "/guide/getting-started" },
          ],
        },
      ],

      "/reference/": [
        {
          text: "Command Reference",
          items: [{ text: "Overview", link: "/reference/commands" }],
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
  },

  // Performance optimization
  lastUpdated: true,
  cleanUrls: true,
});
