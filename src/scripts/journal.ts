// Build-time helpers for the Journal (runs on the server, ships no JS)
import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'journal'>;

/** Published posts, newest first. Drafts show in `npm run dev` only. */
export async function getPosts(): Promise<Post[]> {
    const posts = await getCollection('journal', ({ data }) => import.meta.env.DEV || !data.draft);
    return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const categorySlug = (c: string) =>
    c
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

export const formatDate = (d: Date) =>
    d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' });

/** ~220 words per minute */
export const readingTime = (body = '') => {
    const words = body.replace(/<[^>]+>|[#*_>`\[\]()!-]/g, ' ').split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.round(words / 220))} min read`;
};