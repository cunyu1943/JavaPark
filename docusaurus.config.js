// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const math = require('remark-math');
const katex = require('rehype-katex');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        language: ["en", "zh"],
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
      })
    ]
  ],

  title: 'JavaPark',
  tagline: 'Java 自学指南',
  favicon: '/img/site/logo.svg',

  // Set the production url of your site here
  url: 'https://cunyu1943.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/JavaPark/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cunyu1943', // Usually your GitHub org/user name.
  projectName: 'JavaPark', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'JavaPark',
        logo: {
          alt: 'JavaPark',
          src: 'img/site/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '基础教程',
          },
          {
            type: 'docSidebar',
            sidebarId: 'interviewSidebar',
            position: 'left',
            label: '面试宝典',
          },
          {
            type: 'docSidebar',
            sidebarId: 'weeklySidebar',
            position: 'left',
            label: '好物周刊',
          },
          { to: '/blog', label: '生活近况', position: 'left' },
          {
            type: 'dropdown',
            label: '开源项目',
            position: 'left',
            items: [
              {
                label: 'JavaPark',
                href: 'https://github.com/cunyu1943/JavaPark',
              },
              {
                label: '免费电子书',
                href: 'https://github.com/cunyu1943/ebooks',
              },
              {
                label: '代码仓库',
                href: 'https://github.com/cunyu1943/java-park-code-warehouse',
              },
            ],
          },
          {
            type: 'dropdown',
            label: '联系方式',
            position: 'left',
            items: [
              {
                label: '快速联系',
                href: 'docs/contract',
              },
              {
                label: 'Github',
                href: 'https://github.com/cunyu1943',
              },
              {
                label: 'CSDN',
                href: 'https://cunyu1943.blog.csdn.net',
              },
              {
                label: '掘金',
                href: 'https://juejin.cn/user/747323637904519',
              },
            ],
          },
          // {
          //   type: 'dropdown',
          //   label: '关于本站',
          //   position: 'left',
          //   items: [
          //     // {
          //     //   label: 'Facebook',
          //     //   href: 'https://www.facebook.com',
          //     // },
          //     // {
          //     //   label: '社交',
          //     //   href: 'https://www.facebook.com',
          //     // },
          //   ],
          // },
          {
            href: 'https://github.com/cunyu1943/JavaPark',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        // links: [
        //   {
        //     title: '基础教程',
        //     items: [
        //       {
        //         label: '基础',
        //         to: '/docs/tutorial/tutorial-basics/create-a-page',
        //       },
        //       {
        //         label: '高级',
        //         to: '/docs/tutorial/tutorial-extras/manage-docs-versions',
        //       }
        //     ],
        //   },
        //   {
        //     title: '开源项目',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/cunyu1943/JavaPark">JavaPark</a>, Inc. All rights reserved by <a href="https://cunyu1943.github.io/JavaPark/docs/contract">村雨遥</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'c', 'cpp', 'python', 'sql'],
      },

      announcementBar: {
        id: 'star',
        content:
          '<b>文章首发公众号<a href="https://cunyu1943.github.io/JavaPark/docs/contract">「村雨遥」</a>，如果你喜欢 JavaPark，那就去 <a href="https://github.com/cunyu1943/JavaPark">Github</a> 点个 Star ⭐️ 再走吧！</b>',
        backgroundColor: '#fafbfc',
        textColor: '#25C2A0',
        isCloseable: false,
      },
    }),
};

module.exports = config;
