# Installation

This guide covers multiple ways to install Razd on your system. Choose the method that works best for your setup.

## Quick Install (Recommended)

### Using mise

The easiest way to install Razd is through mise, which also manages the tool dependencies:

```bash
# Install the Razd plugin
mise plugin install razd https://github.com/razd-cli/vfox-plugin-razd

# Install and use the latest version globally
mise use -g razd@latest

# Verify installation
razd --version
```

### Using a specific version

```bash
# Install a specific version
mise use -g razd@0.1.14

# Or install locally for a project
mise use razd@0.1.14
```

## Alternative Installation Methods

### Download Binary (All Platforms)

Download the latest binary for your platform from the [releases page](https://github.com/razd-cli/razd/releases):

#### Windows

```powershell
# Download and extract (PowerShell)
Invoke-WebRequest -Uri "https://github.com/razd-cli/razd/releases/latest/download/razd-windows.zip" -OutFile "razd.zip"
Expand-Archive -Path "razd.zip" -DestinationPath "C:\tools\razd"

# Add to PATH
$env:PATH += ";C:\tools\razd"
```

#### macOS

```bash
# Download and install
curl -L "https://github.com/razd-cli/razd/releases/latest/download/razd-macos.tar.gz" | tar xz
sudo mv razd /usr/local/bin/

# Verify installation
razd --version
```

#### Linux

```bash
# Download and install
curl -L "https://github.com/razd-cli/razd/releases/latest/download/razd-linux.tar.gz" | tar xz
sudo mv razd /usr/local/bin/

# Or install to user directory
mkdir -p ~/.local/bin
mv razd ~/.local/bin/
export PATH="$HOME/.local/bin:$PATH"
```

### Build from Source

If you prefer to build from source or need the latest development version:

#### Prerequisites

- [Rust](https://rustup.rs/) (latest stable version)
- [git](https://git-scm.com/)

#### Build and Install

```bash
# Clone the repository
git clone https://github.com/razd-cli/razd.git
cd razd

# Build and install
cargo install --path .

# Verify installation
razd --version
```

#### Development Build

```bash
# Clone and build for development
git clone https://github.com/razd-cli/razd.git
cd razd

# Build in debug mode
cargo build

# Run directly
./target/debug/razd --version

# Or install for development
cargo install --path . --debug
```

## Verify Installation

After installation, verify that Razd is working correctly:

```bash
# Check version
razd --version

# Check help
razd --help

# Test with a simple command
razd init --help
```

You should see output similar to:
```
razd 0.1.14
```

## Installing Dependencies

Razd works best with these companion tools:

### mise (Required)

Razd uses mise for tool version management:

```bash
# Install mise (if not already installed)
curl https://mise.jdx.dev/install.sh | sh

# Or on macOS with Homebrew
brew install mise

# On Windows with Scoop
scoop install mise
```

### task (Optional, auto-installed)

Task is used for running project tasks. If not present, Razd will install it via mise:

```bash
# Manual installation (optional)
mise use -g task@latest
```

## Platform-Specific Notes

### Windows

- **PowerShell**: Razd works with both PowerShell and Command Prompt
- **WSL**: Razd works great in Windows Subsystem for Linux
- **Path Setup**: Make sure the installation directory is in your PATH

### macOS

- **Apple Silicon**: Native ARM64 binaries available
- **Intel Macs**: x64 binaries work on all Intel Macs
- **Homebrew**: Support coming soon

### Linux

- **Distributions**: Works on all major Linux distributions
- **Package Managers**: Native packages coming for popular distros
- **AppImage**: Portable AppImage available for easy installation

## Troubleshooting Installation

### Common Issues

#### "Command not found: razd"

The binary is not in your PATH. Solutions:

1. **Check installation location**:
   ```bash
   which razd  # Unix/Linux/macOS
   where razd  # Windows
   ```

2. **Add to PATH** (adjust path as needed):
   ```bash
   # Add to ~/.bashrc or ~/.zshrc
   export PATH="$HOME/.local/bin:$PATH"
   
   # Or for mise installation
   mise env >> ~/.bashrc
   ```

#### "Permission denied" on Unix systems

Make the binary executable:
```bash
chmod +x /path/to/razd
```

#### mise plugin installation fails

Make sure you have the latest mise version:
```bash
mise self-update
mise plugin install razd https://github.com/razd-cli/vfox-plugin-razd
```

### Getting Help

If you're still having installation issues:

1. Check the [FAQ](/troubleshooting/faq) for common solutions
2. Search [existing issues](https://github.com/razd-cli/razd/issues)
3. Create a [new issue](https://github.com/razd-cli/razd/issues/new) with:
   - Your operating system and version
   - Installation method attempted
   - Full error messages

## Upgrading Razd

### With mise

```bash
# Update to latest version
mise use -g razd@latest

# Or update all tools
mise upgrade
```

### Manual Upgrade

1. Download the latest release
2. Replace the existing binary
3. Verify with `razd --version`

## Uninstalling

### mise Installation

```bash
# Remove from global config
mise unuse -g razd

# Remove plugin (optional)
mise plugin uninstall razd
```

### Manual Installation

Simply remove the binary from your system:
```bash
# Find and remove
which razd  # Note the location
rm /path/to/razd
```