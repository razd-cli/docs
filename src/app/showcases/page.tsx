import Link from 'next/link';
import { showcasesSource } from '@/lib/source';

const iconMap: Record<string, { emoji: string; color: string }> = {
  nodedotjs: { emoji: '🟢', color: '#339933' },
  py: { emoji: '🐍', color: '#3776AB' },
  go: { emoji: '🔷', color: '#00ADD8' },
  rust: { emoji: '🦀', color: '#CE422B' },
  deno: { emoji: '🦕', color: '#000000' },
  docker: { emoji: '🐳', color: '#2496ED' },
};

function ShowcaseIcon({ name }: { name: string }) {
  const mapped = iconMap[name];
  if (mapped) {
    return (
      <span
        className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-xl"
        style={{ backgroundColor: mapped.color + '18' }}
      >
        {mapped.emoji}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-xl bg-fd-secondary">
      📦
    </span>
  );
}

export default async function ShowcasesPage() {
  const pages = showcasesSource
    .getPages()
    .filter((p) => p.slugs.length > 0 && !(p.data as any).full);

  return (
    <div className="container mx-auto px-4 py-12 max-w-fd-container">
      <h1 className="text-4xl font-bold mb-4">Showcases</h1>
      <p className="text-lg text-fd-muted-foreground mb-12 max-w-2xl">
        Проекты, использующие Razd. Клонируйте и запускайте одной командой.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page) => {
          const data = page.data as any;
          const tags: string[] = data.tags || [];
          const source = data.source;
          const icon = data.icon || '';

          return (
            <div
              key={page.url}
              className="group rounded-xl border border-fd-border bg-fd-card p-6 transition-all duration-300 hover:border-fd-primary/40 hover:shadow-lg flex flex-col"
            >
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
        })}
      </div>
      <p className="text-center text-fd-muted-foreground text-sm mt-12">
        Смотрите{' '}
        <Link href="/docs/stack" className="text-fd-foreground underline">
          документацию по стекам технологий
        </Link>{' '}
        для подробных руководств.
      </p>
    </div>
  );
}