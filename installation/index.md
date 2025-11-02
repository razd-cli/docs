# Установка

Это руководство охватывает несколько способов установки Razd в вашей системе. Выберите метод, который лучше всего подходит для вашей конфигурации.

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

### Использование определённой версии

```bash
# Установите определённую версию
mise use -g razd@0.1.14

# Или установите локально для проекта
mise use razd@0.1.14
```

## Альтернативные методы установки

### Скачать исполняемый файл (Все платформы)

Скачайте последний исполняемый файл для вашей платформы со [страницы релизов](https://github.com/razd-cli/razd/releases):

#### Windows

```powershell
# Скачайте и распакуйте (PowerShell)
Invoke-WebRequest -Uri "https://github.com/razd-cli/razd/releases/latest/download/razd-windows.zip" -OutFile "razd.zip"
Expand-Archive -Path "razd.zip" -DestinationPath "C:\tools\razd"

# Добавьте в PATH
$env:PATH += ";C:\tools\razd"
```

#### macOS

```bash
# Скачайте и установите
curl -L "https://github.com/razd-cli/razd/releases/latest/download/razd-macos.tar.gz" | tar xz
sudo mv razd /usr/local/bin/

# Проверьте установку
razd --version
```

#### Linux

```bash
# Скачайте и установите
curl -L "https://github.com/razd-cli/razd/releases/latest/download/razd-linux.tar.gz" | tar xz
sudo mv razd /usr/local/bin/

# Или установите в пользовательскую директорию
mkdir -p ~/.local/bin
mv razd ~/.local/bin/
export PATH="$HOME/.local/bin:$PATH"
```

### Сборка из исходников

Если вы предпочитаете собрать из исходников или вам нужна последняя версия разработки:

#### Предварительные требования

- [Rust](https://rustup.rs/) (последняя стабильная версия)
- [git](https://git-scm.com/)

#### Сборка и установка

```bash
# Клонируйте репозиторий
git clone https://github.com/razd-cli/razd.git
cd razd

# Соберите и установите
cargo install --path .

# Проверьте установку
razd --version
```

#### Сборка для разработки

```bash
# Клонируйте и соберите для разработки
git clone https://github.com/razd-cli/razd.git
cd razd

# Соберите в режиме отладки
cargo build

# Запустите напрямую
./target/debug/razd --version

# Или установите для разработки
cargo install --path . --debug
```

## Проверка установки

После установки убедитесь, что Razd работает корректно:

```bash
# Проверьте версию
razd --version

# Проверьте справку
razd --help

# Протестируйте с простой командой
razd init --help
```

Вы должны увидеть вывод примерно такой:
```
razd 0.1.14
```

## Установка зависимостей

Razd лучше всего работает с этими сопутствующими инструментами:

### mise (Требуется)

Razd использует mise для управления версиями инструментов:

```bash
# Установите mise (если ещё не установлен)
curl https://mise.jdx.dev/install.sh | sh

# Или на macOS с Homebrew
brew install mise

# На Windows со Scoop
scoop install mise
```

### task (Опционально, устанавливается автоматически)

Task используется для запуска задач проекта. Если он отсутствует, Razd установит его через mise:

```bash
# Ручная установка (опционально)
mise use -g task@latest
```

## Примечания для конкретных платформ

### Windows

- **PowerShell**: Razd работает как с PowerShell, так и с Command Prompt
- **WSL**: Razd отлично работает в Windows Subsystem for Linux
- **Настройка Path**: Убедитесь, что директория установки находится в вашем PATH

### macOS

- **Apple Silicon**: Доступны нативные ARM64 бинарники
- **Intel Macs**: x64 бинарники работают на всех Intel Mac
- **Homebrew**: Поддержка скоро появится

### Linux

- **Дистрибутивы**: Работает на всех основных дистрибутивах Linux
- **Менеджеры пакетов**: Нативные пакеты появятся для популярных дистрибутивов
- **AppImage**: Доступен портативный AppImage для простой установки

## Устранение проблем при установке

### Распространённые проблемы

#### "Command not found: razd"

Исполняемый файл не в вашем PATH. Решения:

1. **Проверьте местоположение установки**:
   ```bash
   which razd  # Unix/Linux/macOS
   where razd  # Windows
   ```

2. **Добавьте в PATH** (настройте путь по необходимости):
   ```bash
   # Добавьте в ~/.bashrc или ~/.zshrc
   export PATH="$HOME/.local/bin:$PATH"
   
   # Или для установки mise
   mise env >> ~/.bashrc
   ```

#### "Permission denied" на Unix системах

Сделайте исполняемый файл исполняемым:
```bash
chmod +x /path/to/razd
```

#### Установка mise plugin не удалась

Убедитесь, что у вас последняя версия mise:
```bash
mise self-update
mise plugin install razd https://github.com/razd-cli/vfox-plugin-razd
```

### Получение помощи

Если у вас всё ещё проблемы с установкой:

1. Проверьте [FAQ](/faq) для распространённых решений
2. Поищите [существующие проблемы](https://github.com/razd-cli/razd/issues)
3. Создайте [новую проблему](https://github.com/razd-cli/razd/issues/new) с:
   - Вашей операционной системой и версией
   - Попыткой метода установки
   - Полными сообщениями об ошибках

## Обновление Razd

### С mise

```bash
# Обновите до последней версии
mise use -g razd@latest

# Или обновите все инструменты
mise upgrade
```

### Ручное обновление

1. Скачайте последний релиз
2. Замените существующий исполняемый файл
3. Проверьте с помощью `razd --version`

## Удаление

### Установка mise

```bash
# Удалите из глобальной конфигурации
mise unuse -g razd

# Удалите плагин (опционально)
mise plugin uninstall razd
```

### Ручная установка

Просто удалите исполняемый файл из вашей системы:
```bash
# Найдите и удалите
which razd  # Заметьте местоположение
rm /path/to/razd
```
