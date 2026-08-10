import Link from 'next/link';
import { blogSource } from '@/lib/source';
import { formatDate } from '@/lib/date';

export default async function BlogPage() {
  const posts = blogSource
    .getPages()
    .filter((p) => p.slugs.length > 0 && !p.data.full);

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">Блог</h1>
      <p className="text-lg text-fd-muted-foreground mb-12 max-w-2xl">
        Новости, обновления и руководства по Razd.
      </p>
      <div className="divide-y divide-fd-border">
        {posts.map((page) => {
          const data = page.data;
          const date = data.date;
          const author = data.author;

          return (
            <Link
              key={page.url}
              href={page.url}
              className="group block py-6 first:pt-0 last:pb-0"
            >
              <div className="text-sm text-fd-muted-foreground mb-2">
                {date && <span>{formatDate(date)}</span>}
                {author && date && <span> · </span>}
                {author && <span>{author}</span>}
              </div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-fd-primary transition-colors">
                {data.title}
              </h2>
              <p className="text-fd-muted-foreground text-sm">
                {data.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
