import Link from 'next/link';

const providers = {
  mise: {
    label: 'Mise',
    url: 'https://mise.jdx.dev/',
    color: '#2B579A',
  },
  devbox: {
    label: 'Devbox',
    url: 'https://www.jetify.com/devbox',
    color: '#F7A41D',
  },
} as const;

export type Provider = keyof typeof providers;

export function ProviderBadge({ provider }: { provider: Provider }) {
  const p = providers[provider];
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md"
      style={{ backgroundColor: p.color + '18', color: p.color }}
    >
      {p.label}
    </span>
  );
}

export function ProviderNotice({ provider }: { provider: Provider }) {
  const p = providers[provider];
  return (
    <div className="flex items-start gap-3 rounded-lg border border-fd-border bg-fd-card p-4 mb-6">
      <span
        className="inline-flex items-center justify-center w-8 h-8 rounded-md text-sm font-bold shrink-0"
        style={{ backgroundColor: p.color + '18', color: p.color }}
      >
        {p.label[0]}
      </span>
      <div className="text-sm text-fd-muted-foreground">
        Этот кейс использует <strong className="text-fd-foreground">{p.label}</strong> для
        управления инструментами. Убедитесь, что{' '}
        <Link
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-fd-primary hover:underline"
        >
          {p.label} установлен
        </Link>{' '}
        на вашей системе.
      </div>
    </div>
  );
}
