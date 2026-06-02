import { defineConfig, defineCollections, defineDocs } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { z } from 'zod';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export const blog = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  schema: pageSchema.extend({
    date: z.string().optional(),
    author: z.string().optional(),
  }),
  postprocess: {
    includeProcessedMarkdown: true,
  },
});

export const examples = defineCollections({
  type: 'doc',
  dir: 'content/showcases',
  schema: pageSchema.extend({
    source: z.string().optional(),
    tags: z.array(z.string()).optional(),
    icon: z.string().optional(),
  }),
});

export const blogMeta = defineCollections({
  type: 'meta',
  dir: 'content/blog',
  schema: metaSchema,
});

export const examplesMeta = defineCollections({
  type: 'meta',
  dir: 'content/showcases',
  schema: metaSchema,
});

export default defineConfig({
  mdxOptions: {},
});