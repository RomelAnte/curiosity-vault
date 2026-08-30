import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const contenido = defineCollection({
  loader: glob({ base: './contenido', pattern: '**/*.md' }),
});

export const collections = { contenido };
