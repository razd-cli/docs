"use client";

import { useState } from "react";
import { Check, Clipboard } from "lucide-react";

const platforms = [
  {
    id: "linux",
    label: "Linux / macOS",
    icon: "🐧",
    command: "curl -fsSL https://get.razd-cli.com/install.sh | bash",
  },
  {
    id: "windows",
    label: "Windows (PowerShell)",
    icon: "🪟",
    command: "irm https://get.razd-cli.com/install.ps1 | iex",
  },
];

export function InstallCommand() {
  const [activeTab, setActiveTab] = useState("linux");
  const [copied, setCopied] = useState(false);

  const activePlatform = platforms.find((p) => p.id === activeTab)!;

  async function handleCopy() {
    await navigator.clipboard.writeText(activePlatform.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="rounded-xl border border-fd-border bg-fd-card overflow-hidden shadow-sm">
      <div className="flex items-center border-b border-fd-border bg-fd-secondary/50">
        {platforms.map((p) => (
          <button
            key={p.id}
            onClick={() => {
              setActiveTab(p.id);
              setCopied(false);
            }}
            className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
              activeTab === p.id
                ? "border-fd-primary text-fd-foreground"
                : "border-transparent text-fd-muted-foreground hover:text-fd-foreground"
            }`}
          >
            <span>{p.icon}</span>
            <span className="hidden sm:inline">{p.label}</span>
          </button>
        ))}
        <div className="flex-1" />
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 mr-2 text-xs font-medium rounded-md text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-secondary transition-colors"
          aria-label={copied ? "Скопировано" : "Копировать команду"}
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-green-500" />
              <span className="hidden sm:inline">Скопировано!</span>
            </>
          ) : (
            <>
              <Clipboard className="size-3.5" />
              <span className="hidden sm:inline">Копировать</span>
            </>
          )}
        </button>
      </div>
      <div className="px-5 py-4 font-mono text-sm overflow-x-auto">
        <span className="text-fd-muted-foreground select-none mr-2">$</span>
        <span>{activePlatform.command}</span>
      </div>
    </div>
  );
}