const codeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
	title: 'Documentación servicios ACTSIS',
	tagline: 'Todas las herramientas que necesita para comenzar a utilizar nuestros servicios.',
	url: 'https://actsis.com',
	baseUrl: '/',
	favicon: '/img/favicon.png',
	organizationName: 'actsis',
	projectName: 'actsis-docs',
	staticDirectories: ['static'],
	scripts: [
		{
			src: 'https://buttons.github.io/buttons.js',
			async: true,
			defer: true,
		}
	],
	themeConfig: {
		navbar: {
			logo: {
				alt: 'Actsis Logo',
				src: '/img/logo.svg',
			},
			items: [
				{
					to: 'docs/welcome',
					activeBasePath: 'docs',
					label: 'Docs',
					position: 'right',
				},
				{
					to: '/blog',
					activeBasePath: 'blog',
					label: 'Blog',
					position: 'right',
				},
				{
					to: '/showcase',
					activeBasePath: 'showcase',
					label: 'Showcase',
					position: 'right',
				},
			],
		},
		footer: {
			links: [
				{
					title: 'Community',
					items: [
						{
							label: 'Facebook',
							href: 'https://facebook.com/actsis',
							icon: 'facebook',
						},
						{
							label: 'Instagram',
							href: 'https://instagram.com/actsis/',
							icon: 'instagram',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/actsis',
							icon: 'twitter',
						},
						{
							label: 'Clutch',
							href: 'https://clutch.co/profile/actsis',
							icon: 'clutch',
						},
						{
							label: 'Dribbble',
							href: 'https://dribbble.com/actsis',
							icon: 'dribbble',
						},
						{
							label: 'LinkedIn',
							href: 'https://linkedin.com/company/actsis/',
							icon: 'linkedin',
						},
					],
				},
			],
			copyright: 'Hecho con ❤️ por equipo Actsis.',
		},
		algolia: {
			appId: 'Q6UCWVTIW4',
			apiKey: '22eb72a73f4a054c232c15ff770f10cd',
			indexName: 'actsis_docs',
		},
		prism: {
			theme: codeTheme,
			additionalLanguages: ['php'],
		},
		colorMode: {
			defaultMode: 'light',
			disableSwitch: true,
			respectPrefersColorScheme: false,
		},
		trailingSlash: false
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
				},
				gtag: {
					trackingID: 'GTM-P5GG5DH',
					anonymizeIP: true,
				},
				theme: {
					customCss: [
						require.resolve('./src/theme/styles.css'),
						require.resolve('@infinum/docusaurus-theme/dist/style.css'),
					],
				},
				blog: {
					blogTitle: 'Tutorials and articles about Eightshift development kit',
					blogDescription: 'Tutorials and articles about Eightshift development kit',
					blogSidebarTitle: 'Latest posts',
					showReadingTime: true,
					postsPerPage: 6,
				},
				sitemap: {
					changefreq: 'weekly',
					priority: 0.5,
				},
			},
		],
	],
	plugins: [
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'forms',
				path: 'forms',
				routeBasePath: 'forms',
				sidebarPath: require.resolve('./sidebars-forms.js'),
			}, 
		],
	],
	customFields: {
		keywords: [
			'wordpress tools',
			'development tools',
			'wordpress project',
			'Gutenberg blocks',
			'development kit',
			'wordpress kit',
			'devkit'
		],
		image: 'img-why-boilerplate@2x.png',
	}
};
