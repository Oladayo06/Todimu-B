// RSS feed at /journal/rss.xml
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../../scripts/journal';
import { site } from '../../data/site';

export async function GET(context: APIContext) {
    const posts = await getPosts();
    return rss({
        title: `${site.name} — Journal`,
        description: 'Notes on story, production, editing and life on set.',
        site: context.site ?? site.url,
        items: posts.map((p) => ({
            title: p.data.title,
            description: p.data.excerpt,
            pubDate: p.data.date,
            link: `/journal/${p.id}/`,
            categories: [p.data.category, ...p.data.tags],
        })),
        customData: '<language>en-gb</language>',
    });
}