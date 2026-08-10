import Link from 'next/link';
import { showcasesSource } from '@/lib/source';
import { ShowcaseCard } from '@/components/showcase-card';

export default async function ShowcasesPage() {
  const pages = showcasesSource
    .getPages()
    .filter((p) => p.slugs.length > 0 && !p.data.full);

  return (
    <div className="container mx-auto px-4 py-12 max-w-fd-container">
      <h1 className="text-4xl font-bold mb-4">Кейсы</h1>
      <p className="text-lg text-fd-muted-foreground mb-12 max-w-2xl">
        Проекты, использующие Razd. Клонируйте и запускайте одной командой.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page) => (
          <ShowcaseCard key={page.url} page={page} />
        ))}
      </div>
      <p className="text-center text-fd-muted-foreground text-sm mt-12">
        Смотрите{' '}
        <Link href="/docs" className="text-fd-primary hover:underline">
          документацию
        </Link>{' '}
        для подробностей.
      </p>
    </div>
  );
}
