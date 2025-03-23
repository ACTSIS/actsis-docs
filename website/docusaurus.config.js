const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

module.exports = {
  title: "Docs",
  tagline:
    "Todas las herramientas que necesita para comenzar a utilizar nuestros servicios.",
  url: "https://docs.actsis.com",
  baseUrl: "/",
  favicon: "/img/favicon.png",
  organizationName: "actsis",
  projectName: "actsis-docs",
  staticDirectories: ["public", "static"],
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  deploymentBranch: "gh-pages",
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },
  // Configuración de Mermaid
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  scripts: [
    {
      src: "https://buttons.github.io/buttons.js",
      async: true,
      defer: true,
    },
  ],
  themeConfig: {
    navbar: {
      logo: {
        alt: "Actsis Logo",
        src: "/img/logo.svg",
      },
      items: [
        {
          to: "docs/Artemis",
          activeBasePath: "docs",
          label: "Artemis",
          position: "right",
        },
        {
          to: "/installs/instalacion-iis",
          activeBasePath: "installs",
          label: "Instalaciones",
          position: "right",
        },
        {
          to: "/blog",
          activeBasePath: "blog",
          label: "Blog",
          position: "right",
        },
        {
          to: "/links",
          activeBasePath: "links",
          label: "Links",
          position: "right",
        },
        {
          to: "/api",
          activeBasePath: "openapi",
          label: "API",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Community",
          items: [
            {
              label: "LinkedIn",
              href: "https://linkedin.com/company/actsis-ltda/",
              icon: "linkedin",
            },
          ],
        },
      ],
      copyright: "Made with ❤️ on planet Earth.",
    },
    algolia: {
      appId: "ZXRIVNLAAG",
      apiKey: "6c919b1589a4f917fd6a06ef17ed40be",
      indexName: "actsis_docs",
      contextualSearch: true,
      placeholder: "Buscar en la documentación de ACTSIS..",
      searchParameters: {
        facetFilters: ["language:es"],
      },
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    trailingSlash: false,
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        gtag: {
          trackingID: "GTM-P5GG5DH",
          anonymizeIP: true,
        },
        theme: {
          customCss: [
            require.resolve("./src/theme/styles.css"),
            require.resolve("@actsis/docusaurus-theme/dist/style.css"),
            require.resolve("./src/css/custom.css"),
          ],
        },
        blog: {
          blogTitle: "Blog Actsis",
          blogDescription:
            "Articulos acerca de Actsis y sus mejoras en los servicios",
          blogSidebarTitle: "Últimos posts",
          showReadingTime: true,
          postsPerPage: 6,
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
    [
      "redocusaurus",
      {
        specs: [
          {
            spec: "openapi/index.yaml",
            route: "/api/",
          },
          {
            spec: "https://redocly.github.io/redoc/openapi.yaml",
            route: "/openapi/",
          },
        ],
        theme: {
          primaryColor: "#1e1e1e",
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "installs",
        path: "installs",
        routeBasePath: "installs",
        sidebarPath: require.resolve("./sidebars-installs.js"),
      },
    ],
    "es-text-loader",
  ],
  customFields: {
    authConfig: {
      clientId: "aefd1102-5932-42c2-8385-6b1eb9937537",
      authority:
        "https://login.microsoftonline.com/6020db66-8a41-417f-9c87-691ad3ee560f",
      redirectUri: "https://docs.actsis.com",
      postLogoutRedirectUri: "/",
    },
    keywords: [
      "Actsis Docs",
      "Documentación",
      "Artemis",
      "Actsis",
      "Instalaciones",
    ],
    image: "/img/logo.svg",
  },
};
