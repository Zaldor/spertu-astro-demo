import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		hero: z.object({
			eyebrow: z.string(),
			title: z.string(),
			subtitle: z.string(),
			primaryCtaLabel: z.string(),
			primaryCtaHref: z.string(),
			secondaryCtaLabel: z.string(),
			secondaryCtaHref: z.string(),
			stats: z.array(
				z.object({
					value: z.string(),
					label: z.string(),
				}),
			),
		}),
		services: z.object({
			eyebrow: z.string(),
			title: z.string(),
			description: z.string(),
			items: z.array(
				z.object({
					title: z.string(),
					description: z.string(),
				}),
			),
		}),
		featuredCaseStudies: z.object({
			eyebrow: z.string(),
			title: z.string(),
			description: z.string(),
			featuredSlugs: z.array(z.string()),
		}),
		team: z.object({
			eyebrow: z.string(),
			title: z.string(),
			description: z.string(),
		}),
		contact: z.object({
			eyebrow: z.string(),
			title: z.string(),
			description: z.string(),
		}),
	}),
});

const caseStudies = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		client: z.string(),
		sector: z.string(),
		results: z.array(z.string()),
		featured: z.boolean().default(false),
		accent: z.string(),
		order: z.number(),
	}),
});

export const collections = {
	pages,
	'case-studies': caseStudies,
};