// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wetlify Colors',
  tagline: 'Find out how all our tools work',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.colors.wetlify.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'skyleen', // Usually your GitHub org/user name.
  // projectName: 'wetlify colors', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/Skyleen-EI/docs-wetlify-colors',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/Skyleen-EI/docs-wetlify-colors',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // themes: ['@docusaurus/theme-search-algolia'],

  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: 'JLZSXR1H0T',

      // Public API key: it is safe to commit it
      apiKey: '4e4b7999d2497e67405b8da6d890980e',

      indexName: 'colors-wetlify-docs',
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Wetlify Colors',
      logo: {
        href: 'https://colors.wetlify.com',
        alt: 'Wetlify Colors Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          label: 'Home',
          position: 'left',
          activeBaseRegex: '^/$',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },

        // { to: '/blog', label: 'Blog', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Wetlify Colors Logo',
        src: 'img/logo_white.png',
        href: 'https://colors.wetlify.com',
        height: 51,
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'Go to Wetlify Colors',
              to: 'https://colors.wetlify.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Skyleen-EI/docs-wetlify-colors',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Skyleen.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
