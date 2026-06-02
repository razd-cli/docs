# Terminology Glossary / Глоссарий терминологии

This document provides standard Russian translations for technical terms used throughout the Razd documentation to ensure consistency.

Этот документ предоставляет стандартные русские переводы технических терминов, используемых в документации Razd, для обеспечения согласованности.

## Core Concepts / Основные концепции

| English | Русский | Notes |
|---------|---------|-------|
| project setup | настройка проекта | Main concept |
| tool | инструмент | Software tool/utility |
| command | команда | CLI command |
| configuration | конфигурация | Settings/config files |
| repository | репозиторий | Git repository |
| workflow | рабочий процесс | Development workflow |
| setup task | задача настройки | Task named "setup" |
| task | задача | Generic task |
| installation | установка | Installing software |
| dependency | зависимость | Software dependency |

## Actions / Действия

| English | Русский | Notes |
|---------|---------|-------|
| clone | клонирование/клонировать | Git clone |
| install | установка/установить | Install tools |
| run | запуск/запустить | Run command/task |
| set up | настройка/настроить | Configure/setup |
| detect | обнаружение/обнаружить | Automatic detection |
| integrate | интеграция/интегрировать | Tool integration |
| configure | конфигурация/настроить | Configure settings |
| build | сборка/собрать | Build from source |
| verify | проверка/проверить | Verify/validate |

## Features / Возможности

| English | Русский | Notes |
|---------|---------|-------|
| cross-platform | кроссплатформенный | Works on all platforms |
| zero dependencies | нулевые зависимости | No dependencies |
| zero configuration | нулевая конфигурация | No config needed |
| smart detection | умное определение | Automatic detection |
| convention over configuration | соглашения вместо конфигурации | Design principle |
| tool integration | интеграция инструментов | Integration feature |

## Development Terms / Термины разработки

| English | Русский | Notes |
|---------|---------|-------|
| developer | разработчик | Software developer |
| development | разработка | Software development |
| environment | окружение | Dev environment |
| version | версия | Software version |
| release | релиз | Software release |
| binary | исполняемый файл / бинарник | Executable file |
| source code | исходный код | Source code |
| CI/CD | CI/CD | Keep as-is (abbreviation) |
| pipeline | пайплайн | CI/CD pipeline |

## Status/States / Статусы/Состояния

| English | Русский | Notes |
|---------|---------|-------|
| ready | готово | State: ready |
| pending | ожидание | State: pending |
| complete | завершено | State: complete |
| failed | не удалось | State: failed |
| required | требуется | Required/mandatory |
| optional | опционально | Optional |
| available | доступен | Available |

## Platform Terms / Платформенные термины

| English | Русский | Notes |
|---------|---------|-------|
| Windows | Windows | Keep as-is |
| macOS | macOS | Keep as-is |
| Linux | Linux | Keep as-is |
| PowerShell | PowerShell | Keep as-is |
| Command Prompt | Command Prompt | Keep as-is |
| WSL | WSL | Keep as-is (abbreviation) |

## File/Directory Terms / Файлы/Директории

| English | Русский | Notes |
|---------|---------|-------|
| file | файл | Generic file |
| directory | директория | Folder/directory |
| path | путь | File path |
| executable | исполняемый файл | Executable file |
| config file | конфигурационный файл | Configuration file |

## User-Facing Text / Пользовательский интерфейс

| English | Русский | Notes |
|---------|---------|-------|
| Getting Started | Начало работы | Page title |
| Installation | Установка | Page title |
| Guide | Руководство | Page title |
| FAQ | FAQ | Keep as-is |
| Documentation | Документация | Generic docs |
| Quick Start | Быстрый старт | Section title |
| Prerequisites | Предварительные требования | Requirements |
| Troubleshooting | Устранение неполадок | Help section |
| Release Notes | Примечания к релизу | Release info |
| Edit this page | Редактировать на GitHub | UI text |

## Common Phrases / Распространённые фразы

| English | Русский | Notes |
|---------|---------|-------|
| Works out of the box | Работает из коробки | Common phrase |
| No problem! | Не проблема! | Friendly response |
| That's it! | Вот и всё! | Emphasis |
| You can... | Вы можете... | Instruction |
| Make sure... | Убедитесь... | Instruction |
| Check that... | Проверьте, что... | Instruction |

## Notes on Usage / Примечания по использованию

1. **Consistency**: Always use the same Russian term for each English term throughout the documentation.
2. **Context**: Some terms may need different translations based on context (e.g., "run" can be "запуск" as noun or "запустить" as verb).
3. **Abbreviations**: Common abbreviations like CI/CD, WSL, FAQ are kept as-is in both languages.
4. **Product Names**: Tool and product names (Git, mise, task, etc.) are never translated.
5. **Code Elements**: Code, commands, and technical identifiers are never translated.

## Verification / Проверка

To check terminology consistency across documentation:

```bash
# Search for a specific term
rg "настройка проекта" docs/*.md

# Verify no mixed usage
rg "project setup|настройка проекта" docs/*.md
```
