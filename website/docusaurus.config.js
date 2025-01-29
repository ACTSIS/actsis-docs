const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

module.exports = {
    title: 'Docs',
    tagline: 'Todas las herramientas que necesita para comenzar a utilizar nuestros servicios.',
    url: 'https://docs.actsis.com',
    baseUrl: '/',
    favicon: '/img/favicon.png',
    organizationName: 'actsis',
    projectName: 'actsis-docs',
    staticDirectories: ['public', 'static'],
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    deploymentBranch: 'gh-pages',
    i18n: {
        defaultLocale: 'es',
        locales: ['es'],
    },
    scripts: [{
        src: 'https://buttons.github.io/buttons.js',
        async: true,
        defer: true,
    }],
    themeConfig: {
        navbar: {
            logo: {
                alt: 'Actsis Logo',
                src: '/img/logo.svg',
            },
            items: [{
                    to: 'docs/Artemis',
                    activeBasePath: 'docs',
                    label: 'Artemis',
                    position: 'right',
                },
                {
                    to: '/installs/welcome',
                    activeBasePath: 'installs',
                    label: 'Instalaciones',
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
                {
                    to: '/api',
                    activeBasePath: 'openapi',
                    label: 'API',
                    position: 'right',
                },
            ],
        },
        footer: {
            links: [{
                title: 'Community',
                items: [{
                    label: 'LinkedIn',
                    href: 'https://linkedin.com/company/actsis-ltda/',
                    icon: 'linkedin',
                }, ],
            }, ],
            copyright: 'Made with ❤️ on planet Earth.',
        },
        algolia: {
            appId: 'Q6UCWVTIW4',
            apiKey: '22eb72a73f4a054c232c15ff770f10cd',
            indexName: 'actsis_docs',
            contextualSearch: true,
            placeholder: 'Buscar en la documentación de ACTSIS..',
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
        // Redocusaurus config
        [
            'redocusaurus',
            {
                // Plugin Options for loading OpenAPI files
                specs: [
                    // Pass it a path to a local OpenAPI YAML file
                    {
                        // Redocusaurus will automatically bundle your spec into a single file during the build
                        spec: 'openapi/index.yaml',
                        route: '/api/',
                    },
                    // You can also pass it a OpenAPI spec URL
                    {
                        spec: 'https://redocly.github.io/redoc/openapi.yaml',
                        route: '/openapi/',
                    },
                ],
                // Theme Options for modifying how redoc renders them
                theme: {
                    // Change with your site colors
                    primaryColor: '#1e1e1e',
                },
            },
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'installs',
                path: 'installs',
                routeBasePath: 'installs',
                sidebarPath: require.resolve('./sidebars-installs.js'),
            },
        ],
        'es-text-loader',
    ],
    customFields: {
        authConfig: {
            clientId: "",
            authority: "https://login.microsoftonline.com/",
            redirectUri: "http://localhost:3000",
            postLogoutRedirectUri: '/',
        },
        keywords: [
            'Actsis Docs',
            'Documentación',
            'Artemis',
            'Actsis',
            'Instalaciones',
        ],
        image: '/img/logo.svg',
    }
};
