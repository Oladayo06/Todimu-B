// Journal (blog) collection — one Markdown file per post in src/content/journal/
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const categories = ['News', 'Process', 'Behind the Scenes', 'Craft & Training'] as const;

const journal = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/journal' }),
    schema: z.object({
        title: z.string().max(90),
        excerpt: z.string().max(220),
        date: z.coerce.date(),
        updated: z.coerce.date().optional(),
        category: z.enum(categories),
        tags: z.array(z.string()).default([]),
        cover: z.string().default(''), // e.g. '/media/journal/berlinale.jpg'
        coverAlt: z.string().optional(),
        draft: z.boolean().default(false),
    }),
});

export const collections = { journal };