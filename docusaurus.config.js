const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion

/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'FPGA Multi-Agent FabrIc Architecture ',
  tagline: '',
 url: 'https://noamsabb.github.io ',
  baseUrl: '/fpga_mafia_doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'noamsabb', // Usually your GitHub org/user name.
  projectName: 'fpga_mafia_doc', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/noamsabb/fpga_mafia_doc/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'FPGA MAFIA',
        logo: {
          alt: 'BIU logo',
          src: 'img/BIU.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'how_to/github_action',
            position: 'right',
            label: 'How To',
          },
          {
            type: 'doc',
            docId: 'cache/cache_intro',
            position: 'left',
            label: 'Cache', 
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
			  // Down left
            title: 'Docs',
            items: [
              {
                label: 'Tuto',
                to: '/docs/intro',
              },
              // {
              //   label: 'Cache',
              //   to: '/cache/cache_intro',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/amichai-bd/fpga_mafia',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MAFIA Project`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
