import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Java教程",
    icon: "fa-brands fa-java",
    children: [
      {
        text: "Java 基础",
        icon: "iconfont icon-java",
        link: "/java-tutorial/javase-series/20220701-intro-to-java/"
      },
      {
        text: "MySQL 教程",
        icon: "iconfont icon-mysql",
        link: "/java-tutorial/mysql-series/20220726-sql-in-10min/"
      },
    ]
  },

  {
    text: "好物周刊",
    icon: "fa-solid fa-newspaper",
    children: [
      {
        text: "2023 年刊",
        icon: "iconfont icon-calendar",
        link: "/weekly/2023/0415-0421/"
      },
    ]
  },

  {
    text: "基础教程",
    icon: "iconfont icon-tools",
    children: [
      {
        text: "IDEA 教程",
        icon: "iconfont icon-intellijidea",
        link: "/tutorial/idea-series/20220202-idea-guide/"
      },
      {
        text: "开发工具",
        icon: "iconfont icon-terminal",
        link: "/tutorial/dev-series/20220729-cdn/"
      },
      {
        text: "博客搭建",
        icon: "iconfont icon-blog",
        link: "/tutorial/blog-series/20220401-hexo/"
      },
      {
        text: "效率工具",
        icon: "iconfont icon-rocket",
        link: "/tutorial/efficiency-series/20220729-10-amazing-website/"
      },
    ]
  },

  {
    text: "编程语言",
    icon: "fa-solid fa-code",
    children: [
      {
        text: "C 语言",
        icon: "iconfont icon-C",
        link: "/program-language/c-series/20180308-memory-manage/"
      },
      {
        text: "C++",
        icon: "iconfont icon-CPP",
        link: "/program-language/cpp-series/20180720-summary/"
      },
      {
        text: "Python",
        icon: "iconfont icon-Python",
        link: "/program-language/python-series/tutorial/20210331-intro/"
      },
    ]
  },

  {
    text: "你问我答",
    icon: "fa-solid fa-circle-question",
    link: "/QA/20230402-where-exercise-java-basics/"
  },

  {
    text: "开源项目",
    icon: "fas fa-book",
    children: [
      { text: "JavaPark", icon: "fa-brands fa-java", link: "https://github.com/cunyu1943/JavaPark" },
      { text: "电子书", icon: "iconfont icon-book", link: "https://github.com/cunyu1943/ebooks" }
    ],
  },

  {
    text: "共建周刊",
    icon: "fa-solid fa-pen-to-square",
    link: "https://wj.qq.com/s2/13360545/da29/"
  },
]);
