---
title: Установка
description: Руководство по установке Razd на различные операционные системы.
icon: lucide:download
---

Это руководство охватывает несколько способов установки Razd в вашей системе. Текущая актуальная версия: **v0.4.4**.

## Предварительные требования

Перед установкой Razd убедитесь, что установлен **mise** — менеджер инструментов разработки. Подробное руководство: [https://mise.jdx.dev/installing-mise.html](https://mise.jdx.dev/installing-mise.html)

### Установка mise

**Unix/Linux/macOS:**

```bash
curl https://mise.run | sh
```

**macOS (через Homebrew):**

```bash
brew install mise
```

**Windows:**

```powershell
winget install jdx.mise
```

::: tip
После установки mise перезапустите терминал или выполните `source ~/.bashrc` (Linux) / `source ~/.zshrc` (macOS), чтобы обновить PATH.
:::

## Быстрая установка (Рекомендуется)

### Используя mise

Самый простой способ установить Razd — через mise, который также управляет зависимостями инструмента:

```bash
# Установите плагин Razd
mise plugin install razd https://github.com/razd-cli/vfox-plugin-razd

# Установите и используйте последнюю версию глобально
mise use -g razd@latest

# Проверьте установку
razd --version
```

### Установка конкретной версии

```bash
# Установите версию 0.4.4
mise use -g razd@0.4.4

# Или установите локально для проекта
cd my-project
mise use razd@0.4.4
```

## Проверка установки

После установки любым методом проверьте корректность работы:

```bash
# Проверьте версию
razd --version
# Должно вывести: razd 0.4.2 (или выше)

# Проверьте справку
razd --help

# Убедитесь, что mise установлен
mise --version
```

## Обновление Razd

### Обновление через mise

```bash
# Обновите до последней версии
mise use -g razd@latest

# Или до конкретной версии
mise use -g razd@0.4.2
```

## Удаление

### Удаление через mise

```bash
# Удалите Razd
mise uninstall razd

# Удалите плагин (опционально)
mise plugin uninstall razd
```

### Ошибка: "mise not found"

Установите mise, следуя инструкциям в разделе [Предварительные требования](#предварительные-требования).

## Дополнительные инструменты

### VS Code расширение (Рекомендуется)

Для удобной работы с Razd в Visual Studio Code установите официальное расширение:

**Установка через VS Code:**

1. Откройте VS Code
2. Перейдите в раздел расширений (Ctrl+Shift+X)
3. Найдите "Razd" или используйте ID: `razd-cli.vscode-razd`
4. Нажмите "Install"

**Установка через командную строку:**

```bash
code --install-extension razd-cli.vscode-razd
```

**Ссылка на Marketplace:** [https://marketplace.visualstudio.com/items?itemName=razd-cli.vscode-razd](https://marketplace.visualstudio.com/items?itemName=razd-cli.vscode-razd)

Расширение предоставляет удобства при работе с Razdfile.

### task (Опционально, устанавливается автоматически)

Task используется для запуска задач проекта. Если он отсутствует, Razd установит его через mise:

```bash
# Ручная установка (опционально)
mise use -g task@latest
```
