import { showcasesSource } from '@/lib/source';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import Link from 'next/link';

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
        className="inline-flex items-center justify-center w-12 h-12 rounded-lg text-2xl"
        style={{ backgroundColor: mapped.color + '18' }}
      >
        {mapped.emoji}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg text-2xl bg-fd-secondary">
      📦
    </span>
  );
}

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params;
  const page = showcasesSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const data = page.data as any;
  const icon = data.icon || '';
  const tags: string[] = data.tags || [];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link
        href="/showcases"
        className="text-sm text-fd-muted-foreground hover:text-fd-foreground mb-8 inline-block"
      >
        ← Showcases
      </Link>
      <article>
        <div className="flex items-center gap-4 mb-4">
          <ShowcaseIcon name={icon} />
          <h1 className="text-3xl font-bold">{data.title}</h1>
        </div>
        {data.description && (
          <p className="text-lg text-fd-muted-foreground mb-6">{data.description}</p>
        )}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
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
        {data.source && (
          <a
            href={data.source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-fd-muted-foreground hover:text-fd-foreground mb-8 inline-block"
          >
            Исходный код →
          </a>
        )}
        <div className="prose max-w-none mt-8">
          <MDX components={getMDXComponents()} />
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return showcasesSource
    .generateParams()
    .filter((p: any) => p.slug && p.slug.length > 0);
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string[] }> },
): Promise<Metadata> {
  const params = await props.params;
  const page = showcasesSource.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}