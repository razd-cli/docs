import { blogSource } from '@/lib/source';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import Link from 'next/link';

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params;
  const page = blogSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const data = page.data as any;

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link
        href="/blog"
        className="text-sm text-fd-muted-foreground hover:text-fd-foreground mb-8 inline-block"
      >
        ← Блог
      </Link>
      <article>
        <h1 className="text-3xl font-bold mb-3">{data.title}</h1>
        {data.description && (
          <p className="text-lg text-fd-muted-foreground mb-4">{data.description}</p>
        )}
        {(data.author || data.date) && (
          <div className="text-sm text-fd-muted-foreground mb-8 border-b pb-6">
            {data.author && <span>{data.author}</span>}
            {data.author && data.date && <span> · </span>}
            {data.date && <span>{data.date}</span>}
          </div>
        )}
        <div className="prose max-w-none">
          <MDX components={getMDXComponents()} />
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return blogSource
    .generateParams()
    .filter((p: any) => p.slug && p.slug.length > 0);
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string[] }> },
): Promise<Metadata> {
  const params = await props.params;
  const page = blogSource.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}