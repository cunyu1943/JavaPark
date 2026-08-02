import { defineConfig } from 'vitepress'
import { groupIconVitePlugin, groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import { nav } from './configs/nav'
import { sidebar } from './configs/sidebar'
import { AnnouncementPlugin } from 'vitepress-plugin-announcement'
import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss'
import { GitChangelog, GitChangelogMarkdownSection, } from '@nolebase/vitepress-plugin-git-changelog/vite'
import { SponsorPlugin } from 'vitepress-plugin-sponsor'

const baseRepo = '/JavaPark/'
const baseUrl = 'https://cunyu1943.github.io'
const RSS: RSSOptions = {
  title: '村雨遥',
  baseUrl,
  copyright: 'Copyright © ' + new Date().getFullYear() + '<a href="https://github.com/cunyu1943">村雨遥</a>',
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点级配置，写在顶层，不是 themeConfig 内部
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: baseRepo + '/imgs/site/logo.png' }]
  ],
  // 代码组图标
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(groupIconMdPlugin) //代码组图标
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options);
        if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`;
        return htmlResult;
      }
    },
  },

  vite: {
    plugins: [

      // 打赏插件
      SponsorPlugin({
        /**
         * 打赏模块样式
         */
        type: 'simple',
        aliPayQR: '/imgs/award/alipay.jpg',
        weChatQR: '/imgs/award/wechatpay.jpg'
      }),
      // 基于 Git
      GitChangelog({
        // 填写在此处填写您的仓库链接
        repoURL: () => 'https://github.com/cunyu1943/weekly',
      }),
      GitChangelogMarkdownSection(),
      // 离线全文搜索（暂注释，插件存在兼容性问题）
      // pagefindPlugin(),
      // RSS
      RssPlugin(RSS),
      //代码组图标
      groupIconVitePlugin(),
      // 公告
      AnnouncementPlugin({
        title: '公告',
        body: [
          { type: 'text', content: '👇 微信 👇<------->👇 公众号 👇' },
          {
            type: 'image',
            src: '/imgs/contact/wechat.jpg',
            style: 'display: inline-block;width:46%;padding-right:6px'
          },
          {
            type: 'image',
            src: 'imgs/contact/wepublic.jpg',
            style: 'display: inline-block;width:46%;padding-left:6px'
          }
        ],
        footer: [
          {
            type: 'text',
            content: '还可以通过这里找到我'
          },
          {
            type: 'button',
            content: '数字花园',
            link: 'https://yuque.com/cunyu1943'
          },
          {
            type: 'button',
            content: 'ima知识库',
            link: 'https://ima.qq.com/wiki/?shareId=2d93931f9ba4bdf4d9d25cb112b5f17451e9367d2dbb4f63fb9a32575899b73c',
            props: {
              type: 'success'
            }
          },
        ],
      })
    ],
  },

  // 站点名
  title: "村雨遥",
  // 站点描述
  description: "A VitePress Site",
  // 纯净链接
  cleanUrls: true,
  // 预演
  lang: 'zh-CN',
  // 源目录
  srcDir: "src",
  // 仓库名
  base: baseRepo,
  // 深色主题
  appearance: 'dark',
  // 忽略死链
  ignoreDeadLinks: false,
  // 站点地图
  sitemap: {
    hostname: 'https://cunyu1943.github.io',
  },
  lastUpdated: true,

  // 主题配置
  themeConfig: {
    // 本地搜索
    search: { provider: 'local' },
    // logo
    logo: '/imgs/site/logo.png',
    // 隐藏站点标题
    siteTitle: false,

    // 页脚
    footer: {
      // message: 'Released under the MIT License.', 
      copyright: 'Copyright © ' + new Date().getFullYear() + '<a href="https://github.com/cunyu1943">村雨遥</a>',
    },

    //上次更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },

    //自定义上下页名
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    // 侧边栏文字更改(移动端)
    sidebarMenuLabel: '目录',

    //返回顶部文字修改
    returnToTopLabel: '返回顶部',
    // 大纲
    outline: {
      level: [2, 3], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '大纲' // 文字显示
    },

    //编辑本页
    editLink: {
      pattern: 'https://github.com/cunyu1943/weekly/edit/main/docs/:path', // 改成自己的仓库
      text: '我要纠错'
    },
    // 导航栏
    nav: nav,
    // 侧边栏
    sidebar: sidebar,
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cunyu1943' },
      // { icon: { svg: '<svg t="1777984706401" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5741" width="200" height="200"><path d="M1024.16 694.816c0-149.92-143.104-271.392-319.584-271.392-176.576 0-319.68 121.504-319.68 271.392S528 966.208 704.576 966.208c55.456 0 107.648-12.096 153.184-33.248l125.984 54.528-14.592-140.544c34.784-43.392 55.04-95.808 55.04-152.128zM596.832 621.28c-25.152 0-45.472-20.352-45.472-45.472s20.32-45.472 45.472-45.472c25.12 0 45.44 20.384 45.44 45.472s-20.384 45.472-45.44 45.472z m215.392 0c-25.056 0-45.44-20.352-45.44-45.472s20.384-45.472 45.44-45.472c25.184 0 45.536 20.384 45.536 45.472s-20.352 45.472-45.536 45.472zM704.576 387.488c49.376 0 96.416 8.8 139.264 24.64 0.32-5.728 0.992-11.232 0.992-16.992 0-198.08-189.152-358.624-422.432-358.624C189.184 36.512 0.032 197.024 0.032 395.136c0 74.496 26.816 143.776 72.704 201.12L53.472 781.92l166.432-72.096c41.216 19.2 86.784 32.16 134.88 38.784-3.616-17.504-5.824-35.424-5.824-53.792 0.032-169.44 159.552-307.296 355.616-307.296z m-139.808-209.6c33.184 0 60 26.88 60 60 0 33.184-26.816 60.064-60 60.064s-60.032-26.88-60.032-60.064c0-33.152 26.88-60 60.032-60zM280.032 297.952c-33.184 0-60-26.88-60-60.064 0-33.152 26.848-60 60-60 33.184 0 60.032 26.88 60.032 60s-26.88 60.064-60.032 60.064z" fill="#51C332" p-id="5742"></path></svg>' }, link: 'https://twitter.com/vuejs', ariaLabel: 'wechat' },
    ]
  }
})
