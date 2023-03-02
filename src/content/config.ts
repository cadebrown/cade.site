import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		author: z.string(),
		// Transform string to Date object
		date: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		keywords: z.string().optional(),
		image: z.string().optional(),
		/*updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),*/
		//heroImage: z.string().optional(),

		//description: z.string(),


	}),
});

export const collections = { blog };
