// src/content/config.ts: defines the collections in your project

import { defineCollection, z } from 'astro:content';

export const collections = { 
	// src/content/blog: all blog posts
	'blog': defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string().optional(),
			author: z.string(),
			date: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			keywords: z.string().optional(),
			image: z.string().optional(),
		}),
	})
};