import Link from 'next/link';
import { ProviderBadge } from '@/components/provider';
import type { showcasesSource } from '@/lib/source';

type ShowcasePage = (typeof showcasesSource)['$inferPage'];

const iconMap: Record<string, { emoji: string; color: string }> = {
  nodedotjs: { emoji: '🟢', color: '#339933' },
  py: { emoji: '🐍', color: '#3776AB' },
  go: { emoji: '🔷', color: '#00ADD8' },
  rust: { emoji: '🦀', color: '#CE422B' },
  deno: { emoji: '🦕', color: '#000000' },
  docker: { emoji: '🐳', color: '#2496ED' },
  ruby: { emoji: '💎', color: '#CC342D' },
  lua: { emoji: '🌙', color: '#2C2D72' },
  luau: { emoji: '🌙', color: '#00A2FF' },
  zig: { emoji: '⚡', color: '#F7A41D' },
  laravel: { emoji: '🎯', color: '#FF2D20' },
};

export function ShowcaseIcon({ name }: { name: string }) {
  const mapped = iconMap[name];
  if (mapped) {
    return (
      <span
        className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-xl shrink-0"
        style={{ backgroundColor: mapped.color + '18' }}
      >
        {mapped.emoji}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-xl bg-fd-secondary shrink-0">
      📦
    </span>
  );
}

export function ShowcaseCard({ page }: { page: ShowcasePage }) {
  const data = page.data;
  const tags: string[] = data.tags ?? [];
  const source = data.source;
  const icon = data.icon ?? '';
  const provider = data.provider;

  return (
    <div className="group rounded-xl border border-fd-border bg-fd-card p-6 transition-all duration-300 hover:border-fd-primary/40 hover:shadow-lg flex flex-col">
      <Link href={page.url} className="no-underline">
        <div className="flex items-center gap-3 mb-4">
          <ShowcaseIcon name={icon} />
          <h2 className="text-lg font-semibold group-hover:text-fd-primary transition-colors">
            {data.title}
          </h2>
        </div>
        <p className="text-fd-muted-foreground text-sm mb-4 line-clamp-3">
          {data.description}
        </p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {provider && <ProviderBadge provider={provider} />}
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-fd-secondary text-fd-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-fd-border">
        <Link
          href={page.url}
          className="text-sm font-medium text-fd-primary hover:underline"
        >
          Подробнее →
        </Link>
        {source && (
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-fd-muted-foreground hover:underline"
          >
            Репозиторий →
          </a>
        )}
      </div>
    </div>
  );
}
