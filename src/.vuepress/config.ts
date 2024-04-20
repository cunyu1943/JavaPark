import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { readmorePlugin } from 'vuepress-plugin-readmore-popular-next'

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "JavaPark",
  description: "分享编程学习（侧重 Java）、面试求职、计算机基础、效率工具等方面内容。",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
  // 搜索
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
    readmorePlugin({
      // 已申请的博客 ID
      blogId: '19397-0379198090489-062',
      // 已申请的微信公众号名称
      name: '村雨遥',
      // 已申请的微信公众号回复关键词
      keyword: '解锁',
      // 已申请的微信公众号二维码链接
      qrcode: 'https://cunyu1943.github.io/contact/wechatpublic.svg',
      // 文章内容的 JS 选择器，若使用的不是官方默认主题，则需要根据第三方的主题来设置
      selector: 'div.theme-hope-content',
      // 自定义的 JS 资源链接，可用于 CDN 加速
      // libUrl: 'https://qiniu.techgrow.cn/readmore/dist/readmore.js',
      // 自定义的 CSS 资源链接，可用于适配不同风格的博客
      // cssUrl: 'https://qiniu.techgrow.cn/readmore/dist/vuepress2.css',
      // 文章排除添加引流工具的 URL 规则，支持使用路径、通配符、正则表达式的匹配规则
      // excludes: { strExp: [], regExp: [] },
      // 是否反转 URL 排除规则的配置，即只有符合排除规则的文章才会添加引流工具
      reverse: false,
      // 是否添加微信公众号引流工具到移动端页面
      allowMobile: true,
      // 文章内容的预览高度(例如 300)
      height: 'auto',
      // 文章解锁后凭证的有效天数
      expires: 50,
      // 定时校验凭证有效性的时间间隔（秒）
      interval: 60,
      // 每篇文章随机添加引流工具的概率，有效范围在 0.1 ~ 1 之间，1 则表示所有文章默认都自动添加引流工具
      random: 1
    })
  ],
});
