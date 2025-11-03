# Начало работы

Быстрый старт с Razd — установите инструменты и запустите проект одной командой.

## Установка

**1. Установите mise:**
```bash
# macOS/Linux
curl https://mise.run | sh

# Windows
winget install jdx.mise
```
Подробнее: [https://mise.jdx.dev/installing-mise.html](https://mise.jdx.dev/installing-mise.html)

**2. Установите Razd:**
```bash
mise plugin install razd https://github.com/razd-cli/vfox-plugin-razd
mise use -g razd@latest
razd --version
```

## Быстрый старт

### Клонировать и настроить проект
```bash
razd up https://github.com/razd-cli/razd-nodejs-example
```

### Настроить существующий проект
```bash
cd my-project
razd up
```

### Создать новый проект
```bash
cd my-project
razd up --init
```

## Основные команды

```bash
razd up              # Настроить проект
razd install         # Установить инструменты
razd dev             # Запустить dev-сервер
razd build           # Собрать проект
razd run <задача>    # Выполнить задачу
```

## Razdfile.yml

Пример конфигурации:

```yaml
version: '3'

mise:
  tools:
    node: "22"
    python: "3.11"

tasks:
  default:
    cmds:
      - task: install
      - task: dev
  
  install:
    cmds:
      - npm install
  
  dev:
    cmds:
      - npm run dev
  
  build:
    cmds:
      - npm run build
```

## Что дальше?

- [Полное руководство](/guide/) — подробная документация
- [Установка](/installation/) — Подробная инструкция по установке
- [FAQ](/faq) — ответы на вопросы
- [GitHub](https://github.com/razd-cli/razd) — исходный код и примеры
