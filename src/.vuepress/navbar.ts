import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "导读",
    icon: "iconfont icon-guide",
    link: "/guide/"
  },

  {
    text: "Java",
    icon: "fa-brands fa-java",
    link: "/java-tutorial/",
    // children: [
    //   {
    //     text: "Java 基础",
    //     icon: "iconfont icon-java",
    //     link: "/java-tutorial/javase/20220701-intro-to-java/"
    //   },
    //   {
    //     text: "MySQL",
    //     icon: "iconfont icon-mysql",
    //     link: "/java-tutorial/mysql/20220726-sql-in-10min/"
    //   },
    // ]
  },

  {
    text: "求职面试",
    icon: "iconfont icon-interview",
    link: "/interview/"
  },

  {
    text: "框架|中间件",
    icon: "iconfont icon-framework",
    link: "/framework/"
  },

  {
    text: "计算机知识",
    icon: "iconfont icon-computer",
    link: "/cs-wiki/"
  },

  {
    text: "基础教程",
    icon: "iconfont icon-tools",
    link: "/tutorial/",
    // children: [
    //   {
    //     text: "IDEA 教程",
    //     icon: "iconfont icon-intellijidea",
    //     link: "/tutorial/idea/20220202-idea-guide/"
    //   },
    //   {
    //     text: "博客搭建",
    //     icon: "iconfont icon-blog",
    //     link: "/tutorial/blog/20220401-hexo/"
    //   },
    //   {
    //     text: "效率工具",
    //     icon: "iconfont icon-rocket",
    //     link: "/tutorial/efficiency/20220729-10-amazing-website/"
    //   },
    // ]
  },

  {
    text: "编程语言",
    icon: "iconfont icon-order",
    link: "/program-language/",
    // children: [
    //   {
    //     text: "C 语言",
    //     icon: "iconfont icon-c",
    //     link: "/program-language/c/20180308-memory-manage/"
    //   },
    //   {
    //     text: "C++",
    //     icon: "iconfont icon-CPP",
    //     link: "/program-language/cpp/20180720-summary/"
    //   },
    //   {
    //     text: "Python",
    //     icon: "iconfont icon-Python",
    //     link: "/program-language/python/tutorial/20210331-intro/"
    //   },
    // ]
  },

  {
    text: "你问我答",
    icon: "fa-solid fa-circle-question",
    link: "/QA/20230402-where-exercise-java-basics/"
  },

  {
    text: "好物周刊",
    icon: "fa-solid fa-newspaper",
    children: [
      {
        text: "共建周刊",
        icon: "fa-solid fa-pen-to-square",
        link: "https://www.yuque.com/forms/share/38e342f3-3847-455e-8e26-49ea1f1ffd44"
      },
      {
        text: "2024 年刊",
        icon: "iconfont icon-calendar",
        link: "/weekly/2024/0101-0105/"
      },
      {
        text: "2023 年刊",
        icon: "iconfont icon-calendar",
        link: "/weekly/2023/0415-0421/"
      },
    ]
  },

  {
    text: "关于",
    icon: "fa-solid fa-circle-info",
    link: "/about/"
  },

  {
    text: "源码",
    icon: "iconfont icon-test",
    children: [
      { text: "开源项目 - Github", icon: "fa-brands fa-github", link: "https://github.com/cunyu1943" },
    ],
  },

  {
    text: "联系我",
    icon: "fa-solid fa-address-card",
    children: [
      {
        text: "语雀",
        icon: "fa-solid fa-crow",
        link: "https://yuque.com/cunyu1943"
      },
      {
        text: "CSDN",
        icon: "iconfont icon-csdn",
        link: "https://cunyu1943.blog.csdn.net"
      },
      {
        text: "掘金",
        icon: "iconfont icon-juejin",
        link: "https://juejin.cn/user/747323637904519"
      },
      {
        text: "牛客",
        icon: "iconfont icon-nowcoder",
        link: "https://www.nowcoder.com/users/806383223"
      },
      {
        text: "知乎",
        icon: "iconfont icon-zhihu",
        link: "https://www.zhihu.com/people/cunyu1943"
      }
    ],
  },

]);
