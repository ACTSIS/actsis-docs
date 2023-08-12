const codeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
	title: 'Docs',
	tagline: 'Todas las herramientas que necesita para comenzar a utilizar nuestros servicios.',
	url: 'https://actsis.github.io',
	baseUrl: '/actsis-docs/',
	favicon: '/img/favicon.png',
	organizationName: 'actsis',
	projectName: 'actsis-docs',
	staticDirectories: ['public','static'],
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	deploymentBranch: 'gh-pages',
	i18n: {
		defaultLocale: 'es',
		locales: ['es'],
	},
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
					to: 'docs/Artemis',
					activeBasePath: 'docs',
					label: 'Artemis',
					position: 'right',
				},
				{
					to: '/blog',
					activeBasePath: 'blog',
					label: 'Blog',
					position: 'right',
				},
				{
					to: '/links',
					activeBasePath: 'links',
					label: 'Links',
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
							label: 'LinkedIn',
							href: 'https://linkedin.com/company/actsis-ltda/',
							icon: 'linkedin',
						},
					],
				},
			],
			copyright: 'Inspirado de Infinum con ❤️ por el equipo Actsis',
		},
		algolia: {
			appId: 'Q6UCWVTIW4',
			apiKey: '22eb72a73f4a054c232c15ff770f10cd',
			indexName: 'actsis_docs',
			searchParameters: {
				facetFilters: ['language:es'],
			  },
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
						require.resolve('@actsis/docusaurus-theme/dist/style.css'),
					],
				},
				blog: {
					blogTitle: 'Blog Actsis',
					blogDescription: 'Articulos acerca de Actsis y sus mejoras en los servicios',
					blogSidebarTitle: 'Últimos posts',
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
	customFields: {
		keywords: [
			'Actsis Docs',
			'Documentación',
			'Artemis',
			'Actsis'
		],
		image: 'img-why-boilerplate@2x.png',
	}
};
