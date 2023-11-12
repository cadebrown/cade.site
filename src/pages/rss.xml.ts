// src/pages/rss.xml.ts - generate RSS feed for your site

import { DEFAULT_TITLE, DEFAULT_DESCRIPTION } from '../consts';
import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export async function get(context) {
	// read all blog posts
	const posts = await getCollection('blog');

	// use Astro's RSS helper to generate the feed
	return rss({
		title: DEFAULT_TITLE,
		description: DEFAULT_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			link: `/${post.slug}`,
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
		}))
	})
}
