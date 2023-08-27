import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  breadcrumb: false,
  hostname: "https://cunyu1943.github.io",
  sidebarSorter: ["filename", "title", "order"],

  author: {
    name: "村雨遥",
    url: "https://cunyu1943.github.io",
    email: "747731461@qq.com",
  },

  iconAssets: ["fontawesome-with-brands", "//at.alicdn.com/t/c/font_3871871_vwp59h64k8.css"],
  favicon: "/logo.svg",
  logo: "/logo.svg",

  repo: "cunyu1943/JavaPark",

  docsDir: "src",

  // sidebarIcon: false,
  fullscreen: true,

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "All rights reserved.",

  displayFooter: true,

  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //   },
  // },

  blog: {
    name: "村雨遥",
    avatar: "/logo.svg",
    description: "不要哀求，学会争取。若是如此，终有所获。",
    medias: {
      Github: "https://github.com/cunyu1943",
      Gitee: "https://gitee.com/cunyu1943",
    },
  },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    // components

    components: {
      componentOptions: {
        share: {
          services: ["qq", "weibo", "email", "douban", "evernote", "facebook", "twitter", "whatsapp", "reddit", "telegram", "skype", "buffer"],
        },
      },
      rootComponents: {
        notice: [
          {
            showOnce: true,
            path: "/",
            title: "🎉🎉🎉",
            content:
              '<b><center>扫码添加微信/关注公众号，及时获取最新资讯</br><img src="/contact/contact.png" width="200"></br>鼓励/支持/赞赏我</br><img src="/award/donate.svg" width="150"></b></center>',
            actions: [
              {
                text: "查看更多",
                link: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIyNTg2MjkzNw==&action=getalbum&album_id=2501145320567963650&scene=173&from_msgid=2247496990&from_itemidx=1&count=3&nolastread=1#wechat_redirect",
                type: "primary",
              },
            ],
          },
        ],
      },
      components: ["ArtPlayer", "AudioPlayer", "Badge", "BiliBili", "CodePen", "FontIcon", "PDF", "Replit", "Share", "StackBlitz", "SiteInfo", "XiGua", "YouTube", "VideoPlayer"],
    },

    // feed 插件
    feed: {
      rss: true,
      atom: true,
      json: true,
    },

    // 版权信息
    copyright: {
      global: true,
      triggerWords: 20,
      license: "著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处",
    },

    blog: true,
    // You should generate and use your own comment service
    comment: {
      provider: "Giscus",
      repo: "cunyu1943/JavaPark",
      repoId: "R_kgDOHI1mog",
      category: "Announcements",
      categoryId: "DIC_kwDOHI1mos4CUBUV",
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/logo.svg",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple:
    //   {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
