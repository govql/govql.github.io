import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'GovQL',
  tagline: 'Making government data available in GraphQL',
  favicon: 'img/govql-logo.svg',

  // Set the production url of your site here
  url: 'https://www.govql.us',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'govql', // Usually your GitHub org/user name.
  projectName: 'govql.github.io', // Usually your repo name.
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/govql-social-card.svg',
    navbar: {
      title: 'GovQL',
      logo: {
        alt: 'GovQL Logo',
        src: 'img/govql-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'sourcesSidebar',
          position: 'left',
          label: 'Sources',
        },
        {
          href: 'https://github.com/govql',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Data',
          items: [
            {
              label: 'Federal',
              to: '/docs/sources/federal/votes',
            },
          ],
        },
        {
          title: 'Code',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/govql',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GovQL`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
