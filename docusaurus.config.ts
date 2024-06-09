import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SRO Docusaurus Template',
  tagline: 'A Docusaurus template for Southampton Robotics Outreach projects.',
  favicon: 'img/favicon.ico',

  url: 'https://docusaurus-template.roboticsoutreach.org/',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'roboticsoutreach',
  projectName: 'docusaurus-template',

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
          routeBasePath: '/',
        }
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'SRO Docusaurus Template',
      logo: {
        alt: 'SRO Logo',
        src: 'img/logo.svg',
      },
      items: [],
    },
    footer: {
      style: 'dark',
      copyright: `Made with love by volunteers from <a href="https://roboticsoutreach.org">Southampton Robotics Outreach</a>. Built with <a href="https://docusaurus.io/">Docusaurus</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
