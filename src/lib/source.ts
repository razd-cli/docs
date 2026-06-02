import { docs, blog, blogMeta, examples, examplesMeta } from 'collections/server';
import { loader } from 'fumadocs-core/source';
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { docsContentRoute, docsImageRoute, docsRoute } from './shared';

export const docsSource = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

export const blogSource = loader({
  baseUrl: '/blog',
  source: toFumadocsSource(blog, blogMeta),
  plugins: [lucideIconsPlugin()],
});

export const showcasesSource = loader({
  baseUrl: '/showcases',
  source: toFumadocsSource(examples, examplesMeta),
  plugins: [lucideIconsPlugin()],
});

export function getPageImage(page: (typeof docsSource)['$inferPage']) {
  const segments = [...page.slugs, 'image.webp'];

  return {
    segments,
    url: `${docsImageRoute}/${segments.join('/')}`,
  };
}

export function getPageMarkdownUrl(page: (typeof docsSource)['$inferPage']) {
  const segments = [...page.slugs, 'content.md'];

  return {
    segments,
    url: `${docsContentRoute}/${segments.join('/')}`,
  };
}

export async function getLLMText(page: (typeof docsSource)['$inferPage']) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title} (${page.url})

${processed}`;
}