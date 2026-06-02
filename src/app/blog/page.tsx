import Link from 'next/link';
import { blogSource } from '@/lib/source';

export default async function BlogPage() {
  const posts = blogSource
    .getPages()
    .filter((p) => p.slugs.length > 0 && !(p.data as any).full);

  return (
    <div className="container mx-auto px-4 py-12 max-w-fd-container">
      <h1 className="text-4xl font-bold mb-4">Блог</h1>
      <p className="text-lg text-fd-muted-foreground mb-12 max-w-2xl">
        Новости, обновления и руководства по Razd.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((page) => {
          const data = page.data as any;
          const date = data.date;
          const author = data.author;

          return (
            <Link
              key={page.url}
              href={page.url}
              className="group block rounded-xl border border-fd-border bg-fd-card p-6 transition-all duration-300 hover:border-fd-primary/40 hover:shadow-lg h-full"
            >
              <h2 className="text-xl font-semibold mb-2 group-hover:text-fd-primary transition-colors">
                {data.title}
              </h2>
              <p className="text-fd-muted-foreground text-sm mb-4 line-clamp-3">
                {data.description}
              </p>
              {(author || date) && (
                <div className="text-xs text-fd-muted-foreground mt-auto pt-3 border-t border-fd-border">
                  {author && <span>{author}</span>}
                  {author && date && <span> · </span>}
                  {date && <span>{date}</span>}
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}