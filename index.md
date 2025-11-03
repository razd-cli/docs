---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Razd"
  tagline: "Современный инструмент для настройки проектов"
  image:
    src: /logo.png
    alt: Razd
  actions:
    - theme: brand
      text: Начать
      link: /getting-started
    - theme: alt
      text: Посмотреть на GitHub
      link: https://github.com/razd-cli/razd

features:
  - icon: 🚀
    title: Автоматизация настройки проекта
    details: Одна команда для клонирования, установки инструментов и запуска настройки. Больше никаких многоэтапных инициализаций проектов.

  - icon: 🌍
    title: Кроссплатформенность
    details: Работает одинаково на Windows, macOS и Linux без дополнительной настройки.
  
  - icon: 📦
    title: Автоматическое управление инструментами
    details: Не нужно вручную устанавливать Node.js, Python, Go и другие инструменты — всё устанавливается автоматически через mise при настройке проекта.

---

<h2 style="text-align: center; margin-top: 2rem;">Демонстрация</h2>

<div style="max-width: 80%; margin: 2rem auto;">
  <AsciinemaPlayer 
    src="https://asciinema.org/a/7l6SCqIfb6Ic8AfgeQhcegqBB.js" 
    castId="asciicast-7l6SCqIfb6Ic8AfgeQhcegqBB" 
  />
</div>
