import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "Smallpeice CER Docs",
    tagline: "Student documentation for the Smallpeice CER summer school.",
    favicon: "img/favicon.ico",

    url: "https://sp.roboticsoutreach.org/",
    baseUrl: "/",

    // GitHub pages deployment config.
    organizationName: "roboticsoutreach",
    projectName: "smallpeice-docs",

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        navbar: {
            title: "Smallpeice CER Docs",
            logo: {
                alt: "SRO Logo",
                src: "img/logo.svg",
            },
            items: [
                {
                    href: "/rules",
                    position: "left",
                    label: "Rules",
                },
                {
                    type: "docSidebar",
                    sidebarId: "docsSidebar",
                    position: "left",
                    label: "Docs",
                },
                {
                    href: "/resources",
                    position: "left",
                    label: "Resources",
                },
            ],
        },
        footer: {
            style: "dark",
            copyright: `Made with love by volunteers from <a href="https://roboticsoutreach.org">Southampton Robotics Outreach</a>. Built with <a href="https://docusaurus.io/">Docusaurus</a>.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;

