---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Razd"
  tagline: "The Modern Project Setup Tool"
  image:
    src: /logo.png
    alt: Razd
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/razd-cli/razd

features:
  - icon: 🚀
    title: Project Setup Automation
    details: One command to clone, install tools, and run setup. No more multi-step project initialization.

  - icon: 🌍
    title: Cross-Platform
    details: Works consistently on Windows, macOS, and Linux with no extra configuration.
  
  - icon: 📦
    title: Automatic Tool Management
    details: No need to manually install Node.js, Python, Go, and other tools — everything is installed automatically via mise during project setup.
---

<h2 style="text-align: center; margin-top: 2rem; font-size: 2rem;">Demo</h2>

<div style="max-width: 100%; margin: 2rem auto;">
  <VideoPlayer 
    src="/2025-11-03 08-58-58.mp4"
  />
</div>

<style scoped>
@media (min-width: 768px) {
  div[style*="max-width: 100%"] {
    max-width: 75% !important;
  }
}
</style>