import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const contenido = defineCollection({
  loader: glob({ base: './contenido', pattern: ['guias/**/*.md', 'colecciones/**/*.md'] }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    icon: z.string().default('💡'),
    updatedAt: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { contenido };

