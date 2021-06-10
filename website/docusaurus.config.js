/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'JMC',
  tagline: 'Jmeter as code',
  url: 'https://jmc.anasoid.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'anasoid', // Usually your GitHub org/user name.
  projectName: 'jmc.anasoid.org', // Usually your repo name.
  plugins: [require.resolve('docusaurus-lunr-search')],
  themeConfig: {
    prism: {
      additionalLanguages: ['java','bash'],
    },
    gtag: {
      trackingID: 'G-CLR0F7M45Z',
      anonymizeIP: true,
    },
    navbar: {
      title: 'Jmeter as code',
      logo: {
        alt: 'Jmeter as code',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'users/intro',
          position: 'left',
          label: 'Users guide',
        },
        {
          type: 'doc',
          docId: 'tuto/intro',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: 'doc',
          docId: 'reference/intro',
          position: 'left',
          label: 'Reference',
        },
        {
          href: 'https://github.com/anasoid/jmeter-as-code/discussions',
          position: 'left',
          label: 'Discussions',
        },
        {
          href: 'https://github.com/anasoid/jmeter-as-code',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Users guide',
              to: 'docs/users/intro',
            },
            {
              label: 'Developers guide',
              to: 'docs/developers/intro',
            },
            {
              label: 'Tutorial',
              to: 'docs/tuto/intro',
            },
            {
              label: 'Reference',
              to: 'docs/reference/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discussions',
              href: 'https://github.com/anasoid/jmeter-as-code/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Issues',
              href: 'https://github.com/anasoid/jmeter-as-code/issues',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/anasoid/jmeter-as-code',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} anasoid.org. `,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/anasoid/jmc.anasoid.org/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/anasoid/jmc.anasoid.org/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
  ],
};
