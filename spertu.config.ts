export default {
	site: {
		name: 'Spertu Studio',
		framework: 'astro',
	},
	content: {
		pages: [
			{
				id: 'home',
				label: 'Homepage',
				source: 'src/content/pages/home.md',
				fields: [
					{ key: 'title', type: 'text', label: 'SEO Title', required: true },
					{ key: 'description', type: 'textarea', label: 'SEO Description', required: true },
					{ key: 'hero.eyebrow', type: 'text', label: 'Hero Eyebrow' },
					{ key: 'hero.title', type: 'text', label: 'Hero Title', required: true },
					{ key: 'hero.subtitle', type: 'textarea', label: 'Hero Subtitle' },
					{ key: 'hero.primaryCtaLabel', type: 'text', label: 'Primary CTA Label' },
					{ key: 'hero.primaryCtaHref', type: 'text', label: 'Primary CTA Link' },
					{ key: 'hero.secondaryCtaLabel', type: 'text', label: 'Secondary CTA Label' },
					{ key: 'hero.secondaryCtaHref', type: 'text', label: 'Secondary CTA Link' },
					{ key: 'services.title', type: 'text', label: 'Services Section Title' },
					{ key: 'services.description', type: 'textarea', label: 'Services Section Description' },
					{ key: 'featuredCaseStudies.title', type: 'text', label: 'Case Studies Section Title' },
					{ key: 'team.title', type: 'text', label: 'Team Section Title' },
					{ key: 'contact.title', type: 'text', label: 'Contact Section Title' },
				],
			},
		],
		collections: [
			{
				id: 'case-studies',
				label: 'Case Studies',
				folder: 'src/content/case-studies',
				schema: [
					{ key: 'title', type: 'text', required: true },
					{ key: 'description', type: 'textarea', required: true },
					{ key: 'client', type: 'text', required: true },
					{ key: 'sector', type: 'text' },
					{ key: 'results', type: 'list' },
					{ key: 'featured', type: 'boolean' },
				],
			},
			{
				id: 'team',
				label: 'Team',
				folder: 'src/data/team.json',
				schema: [
					{ key: 'name', type: 'text', required: true },
					{ key: 'role', type: 'text', required: true },
					{ key: 'bio', type: 'textarea' },
					{ key: 'email', type: 'text' },
				],
			},
		],
		data: [
			{
				id: 'site-settings',
				label: 'Site Settings',
				source: 'src/data/site-settings.json',
				fields: [
					{ key: 'siteName', type: 'text', required: true },
					{ key: 'tagline', type: 'textarea' },
					{ key: 'primaryEmail', type: 'text' },
					{ key: 'primaryPhone', type: 'text' },
					{ key: 'ctaLabel', type: 'text' },
					{ key: 'ctaHref', type: 'text' },
					{ key: 'location', type: 'text' },
				],
			},
		],
	},
	deploy: {
		provider: 'github',
		mode: 'git',
	},
};