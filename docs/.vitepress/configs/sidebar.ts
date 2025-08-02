import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {

    '/about/': [
        {
            text: '关于自己',
            collapsed: true,
            items: [
                { text: '关于自己', link: '/about/me/' },
            ]
        },
        {
            text: '关于学习',
            collapsed: true,
            items: [
                { text: '关于学习', link: '/about/study/' },
            ]
        },
        {
            text: '关于工作',
            collapsed: true,
            items: [
                { text: '关于工作', link: '/about/job/' },
            ]
        }
    ],

    '/java-tutorial/': [
        {
            text: 'Java 基础',
            collapsed: true,
            items: [
                { text: '简介', link: '/java-tutorial/javase/20220701-intro-to-java' },
                { text: '开发环境搭建及入门程序', link: '/java-tutorial/javase/20220702-jdk-install-and-hello-world' },
                { text: '利用 IDEA 进行 Java 开发', link: '/java-tutorial/javase/20220703-learn-java-with-idea' },
                { text: '变量与数据类型', link: '/java-tutorial/javase/20220704-variable-and-datatype' },
                { text: '常用进制转换', link: '/java-tutorial/javase/20220705-binary-convert' },
                { text: '操作符', link: '/java-tutorial/javase/20220706-operator' },
                { text: '控制流程', link: '/java-tutorial/javase/20220707-control-process' },
                { text: '流程控制知识大闯关', link: '/java-tutorial/javase/20221127-loop-in-action' },
                { text: '数组操作的奇技淫巧', link: '/java-tutorial/javase/20220708-how-to-operate-array' },
                { text: '面向对象的 3、5 知识点', link: '/java-tutorial/javase/20220709-oop-1' },
                { text: '类的相关知识', link: '/java-tutorial/javase/20220710-oop-2' },
                { text: '包和 jar 文件的创建', link: '/java-tutorial/javase/20220711-oop-3' },
                { text: '成员变量、实例变量、静态变量、局部变量', link: '/java-tutorial/javase/20220712-all-kinds-of-variable' },
                { text: 'String 详解', link: '/java-tutorial/javase/20220713-string' },
                { text: 'ArrayList 详解', link: '/java-tutorial/javase/20220714-arraylist' },
                { text: '输入输出流', link: '/java-tutorial/javase/20220715-in-out-stream' },
                { text: '反射机制详解', link: '/java-tutorial/javase/20220716-reflection' },
                { text: '深入浅出 Java 注解', link: '/java-tutorial/javase/20220721-annotations' },
                { text: 'JDBC 入门指南', link: '/java-tutorial/javase/20220717-jdbc-introduction' },
                { text: '是时候拥抱 Junit 单元测试了', link: '/java-tutorial/javase/20220718-test-with-junit' },
                { text: 'Lombok 安装及使用指南', link: '/java-tutorial/javase/20220719-lombok-install-and-usage' },
                { text: 'Fastjson V2 简单使用手册', link: '/java-tutorial/javase/20220720-fastjson2-quickstart' },
                { text: 'static 和 final 小课堂', link: '/java-tutorial/javase/20221203-oop-advance' },
                { text: '抽象、接口和内部类', link: '/java-tutorial/javase/20221211-abstract' },
                { text: 'Mockito + JUnit 单元测试实例', link: '/java-tutorial/javase/20220722-mockito' },
            ]
        },

        {
            text: 'MySQL',
            collapsed: true,
            items: [
                { text: 'MySQL 快速入门', link: '/java-tutorial/mysql/20210623-quick-start' },
                { text: '开发环境搭建', link: '/java-tutorial/mysql/20240314-environment' },
                { text: '《SQL 必知必会》全解析', link: '/java-tutorial/mysql/20220726-sql-in-10min' },
            ]
        },

        {
            text: 'Java Web',
            collapsed: true,
        },

        {
            text: '实战训练',
            collapsed: true,
            items: [
                { text: '入门练习：1 - 5', link: '/java-tutorial/in-action/20220625-1-5' },
                { text: '入门练习：6 - 10', link: '/java-tutorial/in-action/20220626-6-10' },
                { text: '入门练习：11 - 15', link: '/java-tutorial/in-action/20220627-11-15' },
                { text: '入门练习：16 - 20', link: '/java-tutorial/in-action/20220628-16-20' },
                { text: '入门练习：21 - 25', link: '/java-tutorial/in-action/20220629-21-25' },
                { text: '入门练习：26 - 30', link: '/java-tutorial/in-action/20220630-26-30' },
                { text: '入门练习：31 - 35', link: '/java-tutorial/in-action/20220701-31-35' },
                { text: '入门练习：36 - 40', link: '/java-tutorial/in-action/20220702-36-40' },
                { text: '学生成绩管理系统', link: '/java-tutorial/in-action/20210405-stu-manage-sys' },
                { text: '饭馆点菜系统', link: '/java-tutorial/in-action/20210731-order-system' },
                { text: '记账本', link: '/java-tutorial/in-action/20210801-tally-book' },
                { text: 'MySQL + MyBatis 版学生管理系统', link: '/java-tutorial/in-action/20220307-mysql-mybatis-stu-manag-sys' },
            ]
        }
    ],

    '/faq/': [
        { text: '学习Java基础，应该去哪儿刷题', link: '/faq/20230402-where-exercise-java-basics' },
    ],

    '/interview/': [
        {
            text: '知识点',
            collapsed: true,
            items: [
                { text: 'Java 基础面试知识点', link: '/interview/knowledge/20240201-java-basic' },
                { text: 'Java 进阶面试知识点', link: '/interview/knowledge/20240203-java-advanced' },
                { text: 'MySQL 面试知识点', link: '/interview/knowledge/20240203-mysql' },
                { text: 'MyBatis 面试知识点', link: '/interview/knowledge/20210822-mybatis' },
                { text: 'Spring 面试知识点', link: '/interview/knowledge/20210103-spring' },
                { text: '多线程面试知识点', link: '/interview/knowledge/20210629-thread' },
                { text: '异常面试知识点', link: '/interview/knowledge/20210528-exception' },
                { text: '计算机网络面试知识点', link: '/interview/knowledge/20201231-network' },
            ]
        },

        {
            text: '面试技巧',
            collapsed: true,
        }
    ],

    '/cs-wiki/': [
        {
            text: '组成原理',
            collapsed: true,
        },
        {
            text: '操作系统',
            collapsed: true,
        },
        {
            text: '计算机网络',
            collapsed: true,
        },
        {
            text: '数据结构与算法',
            collapsed: true,
            items: [
                { text: '数据结构简介', link: '/cs-wiki/algo/20220503-datastructure-intro' },
                { text: '算法简介', link: '/cs-wiki/algo/20220511-algo-intro' },
                { text: '时间 & 空间复杂度', link: '/cs-wiki/algo/20220512-time-space' },
                { text: '数组简介', link: '/cs-wiki/algo/20220516-array' },
                { text: '数组增删改查', link: '/cs-wiki/algo/20200510-arr-crud' },
                { text: '有序数组去重', link: '/cs-wiki/algo/20220513-sorted-arr-duplication' },
                { text: '链表详解', link: '/cs-wiki/algo/20220515-linkedlist' },
                { text: '二叉树的遍历', link: '/cs-wiki/algo/202205170-binary-tree-traverse' }
            ]
        }
    ],

    '/framework/': [
        {
            text: 'Maven',
            collapsed: true,
            items: [
                { text: '简介', link: '/framework/maven/20200707-intro' },
                { text: '常用命令', link: '/framework/maven/20200708-command' },
                { text: '仓库、坐标及依赖管理', link: '/framework/maven/20200709-pom' },
                { text: 'IDEA 创建 Maven 项目', link: '/framework/maven/20200710-idea-maven' },
            ]
        },

        {
            text: 'Spring',
            collapsed: true,
            items: [
                { text: '简介', link: '/framework/spring/20200720-intro' },
                { text: 'IoC 大揭秘', link: '/framework/spring/20200723-ioc' },
                { text: '依赖注入知多少', link: '/framework/spring/20200724-di' },
                { text: 'Spring Bean 注解详解', link: '/framework/spring/20210521-annotation' },
                { text: 'IoC 简介及入门实例（XML 版）', link: '/framework/spring/20220428-ioc-xml' },
                { text: 'Bean 详解', link: '/framework/spring/20220429-bean' },
            ]
        },

        {
            text: 'Spring MVC',
            collapsed: true,
            items: [
                // { text: '', link: '/framework/spring/20200720-intro' },
            ]
        },

        {
            text: 'MyBatis',
            collapsed: true,
            items: [
                { text: '简介', link: '/framework/mybatis/20200719-intro' },
                { text: '入门实例', link: '/framework/mybatis/20200720-quick-start' },
                { text: '注解开发', link: '/framework/mybatis/20200721-annotation' },
                { text: '一二级缓存', link: '/framework/mybatis/20200722-pri-sec-cache' },
                { text: '代码自动生成器', link: '/framework/mybatis/20211214-generator' },
            ]
        },

        {
            text: 'MyBatis-Plus',
            collapsed: true,
            items: [
                { text: '简介及入门实例', link: '/framework/mybatis-plus/20210807-intro' },
                { text: '日志配置及常用 CRUD', link: '/framework/mybatis-plus/20210808-log-crud' },

            ]
        },

        {
            text: 'Spring MVC',
            collapsed: true,
            items: [
                // { text: '', link: '/framework/spring/20200720-intro' },
            ]
        },

        {
            text: 'Spring Boot',
            collapsed: true,
            items: [
                { text: '简介', link: '/framework/springboot/20200520-intro' },
                { text: '注解方式整合 MyBatis 实例', link: '/framework/springboot/20200727-annotation-mybatis' },
                { text: 'XML 方式整合 MyBatis 实例', link: '/framework/springboot/20200726-xml-mybatis' },
                { text: '注解方式整合 Mybatis + PageHelper 分页实例', link: '/framework/springboot/20200728-annotation-mybatis-pagehelper' },
                { text: '整合 Thymeleaf 实例', link: '/framework/springboot/20200729-thymeleaf' },
                { text: '整合 JDBC Template 实例', link: '/framework/springboot/20200730-jdbc' },
                { text: '创建项目的几种方式', link: '/framework/springboot/20210811-create-ways' },
                { text: '配置详解', link: '/framework/springboot/20211003-config' },
                { text: '整合 FreeMarker 实例', link: '/framework/springboot/20211130-freemaker' },
                { text: 'Swagger2 构建强大的 API 文档', link: '/framework/springboot/20220106-swagger2' },
                { text: 'Swagger3 生成 API 接口文档', link: '/framework/springboot/20220110-swagger3' },
                { text: '集成 Knife4j', link: '/framework/springboot/20220430-knife4j' },
                { text: '集成 Security 入门小实例', link: '/framework/springboot/20220604-security' },
            ]
        },

        {
            text: 'Spring Cloud',
            collapsed: true,
            items: [
                // { text: '', link: '/framework/spring/20200720-intro' },
            ]
        },

        {
            text: 'Nginx',
            collapsed: true,
            items: [
                { text: '简介与环境搭建', link: '/framework/nginx/20221016-intro-install' },
            ]
        },

        {
            text: 'Redis',
            collapsed: true,
            items: [
                { text: '简介', link: '/framework/redis/20210821-intro' },
                { text: 'Redis 持久化', link: '/framework/redis/20221016-persistence' },
            ]
        },
    ],

    '/tutorial/': [
        {
            text: 'IDEA 教程',
            collapsed: true,
            items: [
                { text: '创建 Java 入门应用', link: '/tutorial/idea/20210914-java-app' },
                { text: '实用小技巧', link: '/tutorial/idea/20211010-tips' },
                { text: '集成并使用 Git 图文教程', link: '/tutorial/idea/20220105-git' },
                { text: '最新版 IntelliJ IDEA 使用手册', link: '/tutorial/idea/20220202-idea-guide' },
                { text: '原来大厂都是这么提交代码的', link: '/tutorial/idea/20230525-code-commit' },
            ]
        },
        {
            text: '博客搭建',
            collapsed: true,
            items: [
                { text: 'Vuepress + GitHub Actions 博客自动部署', link: '/tutorial/blog/' },
                { text: 'Hexo + Github Pages 博客搭建教程', link: '/tutorial/blog/20220401-hexo' },
                { text: 'dumi 博客搭建', link: '/tutorial/blog/20220610-dumi' },
                { text: 'Hugo + Github Pages 博客搭建教程', link: '/tutorial/blog/20220611-hugo' },
                { text: 'Halo 博客搭建教程', link: '/tutorial/blog/20201228-halo' },
                { text: 'docsify 文档型博客搭建', link: '/tutorial/blog/20220612-docsify' },
            ]
        },
        {
            text: '效率工具',
            collapsed: true,
            items: [
                { text: '如何用 Markdown 写出好看的文章', link: '/tutorial/efficiency/20230425-markdown-tutorial' },
                { text: '10 个神奇的网站，助力带薪摸鱼', link: '/tutorial/efficiency/20220729-10-amazing-website' },
                { text: '网站访问太慢，不妨试试这些 CDN', link: '/tutorial/efficiency/20220729-cdn' },
                { text: '计算机专业涨薪必备的几个网站', link: '/tutorial/efficiency/20220731-exercise-websites' },
                { text: '黑客大神也常用的一些 CMD 命令', link: '/tutorial/efficiency/20221127-cmd' },
                { text: '如何在浏览器中安装插件', link: '/tutorial/efficiency/20230710-browser-plugin-install' },
                { text: 'Emoji 表情大作战', link: '/tutorial/efficiency/20220729-emoji' },
                { text: 'macOS 安装 Node.js', link: '/tutorial/efficiency/20221114-macos-install-node' },
                { text: 'iTerm2 + Fish 高效终端', link: '/tutorial/efficiency/20220426-iterm2-fish' },
                { text: 'iTerm2 + Oh My Zsh 终端神器', link: '/tutorial/efficiency/20220811-iterm2-zsh' },
                { text: 'PPT 模板免费下载', link: '/tutorial/efficiency/20220623-ppt-template' },
                { text: 'Windows 安装 Node.js', link: '/tutorial/efficiency/20200511-windows-install-node' },
                { text: 'Ubuntu 默认 root 密码修改', link: '/tutorial/efficiency/20200517-ubuntu-root-pwd' },
                { text: 'VMware 安装 Ubuntu', link: '/tutorial/efficiency/20200518-vmware-ubuntu' },
                { text: 'XShell 连接 Ubuntu', link: '/tutorial/efficiency/20200519-xshell-ubuntu' },
                { text: '手把手配置 Ubuntu', link: '/tutorial/efficiency/20200520-ubuntu' },
                { text: '玩转 Manjora', link: '/tutorial/efficiency20200521-manjora' },
                { text: '如何给视频添加字幕', link: '/tutorial/efficiency/20201010-video-subtitle' },
                { text: 'U 盘启动盘制作', link: '/tutorial/efficiency/20201229-u-disk-sys-booter' },
                { text: '优雅地使用 Windows 10', link: '/tutorial/efficiency/20201230-windows-tips' },
                { text: 'Windows 系统安装教程', link: '/tutorial/efficiency/20201231-windows-sys' },
                { text: '如何制作电子签名', link: '/tutorial/efficiency/20210422-signature' },
                { text: '技术写作中的神兵利器', link: '/tutorial/efficiency/20210504-write-tools' },
            ]
        },
        {
            text: '软件设计师',
            collapsed: true,
            items: [
                { text: '计算机系统', link: '/tutorial/software-designer/20221024-computer-system' },
            ]
        }
    ],

    '/program-language/': [
        {
            text: '前端三剑客',
            collapsed: true,
            items: [
                { text: '开发环境搭建', link: '/program-language/front-end/20230829-environment' },
                { text: 'HTML 大揭秘', link: '/program-language/front-end/20230829-html' },
                { text: 'CSS 教程', link: '/program-language/front-end/20230903-css' },
                { text: 'Axios 简单使用指南', link: '/program-language/front-end/20230926-axios' },
                { text: 'Chrome 中执行 JavaScript 代码', link: '/program-language/front-end/javascript/20220301-chrome-js' },
                { text: '简介', link: '/program-language/front-end/javascript/20220416-intro' },
                { text: '注释、输入输出、变量', link: '/program-language/front-end/javascript/20220417-var' },
                { text: '数据类型', link: '/program-language/front-end/javascript/20220418-datatype' },
                { text: '操作符', link: '/program-language/front-end/javascript/20220419-operator' },
                { text: '流程控制', link: '/program-language/front-end/javascript/20220420-flow' },
                { text: '数组', link: '/program-language/front-end/javascript/20220421-array' },
                { text: '函数', link: '/program-language/front-end/javascript/20220422-function' },
                { text: '面向对象', link: '/program-language/front-end/javascript/20220423-oop' },
                { text: 'DOM 元素获取、属性修改', link: '/program-language/front-end/javascript/20220424-dom-attr' },
                { text: 'DOM 事件', link: '/program-language/front-end/javascript/20220425-dom' },

            ]
        },



        {
            text: 'Vue',
            collapsed: true,
            items: [
                { text: 'Vue 3 简介及入门实例', link: '/program-language/vue/20220605-intro' },
                { text: '搭建 Vue + Vite 入门项目', link: '/program-language/vue/20220606-vite-quickstart' },
                { text: 'Vue3 常用指令', link: '/program-language/vue/20221012-common-command' },
            ]
        },

        {
            text: 'Python',
            collapsed: true,
            items: [
                { text: '简介', link: '/program-language/python/20210331-intro' },
                { text: '玩转 Pycharm', link: '/program-language/python/20210401-pycharm' },
                { text: '语言元素', link: '/program-language/python/20210402-language-element' },
                { text: '条件判断、循环以及循环的终止', link: '/program-language/python/20210403-condition' },
                { text: '购物车', link: '/program-language/python/20220420-shopping' },
                { text: 'turtle 库使用', link: '/program-language/python/20180429-turtle' },
                { text: '数码管绘制', link: '/program-language/python/20180501-digital-time' },
                { text: 'Python 3.7 安装 polyglot 失败', link: '/program-language/python/20220421-polyglot-install' },
                { text: '编程实例（1 - 5）', link: '/program-language/python/20181003-1-5' },
                { text: '编程实例（6 - 10）', link: '/program-language/python20181004-6-10' },
                { text: '编程实例（11 - 15）', link: '/program-language/python/20181005-11-15' },
                { text: '编程实例（16 - 20）', link: '/program-language/python/20181006-16-20' },
                { text: '编程实例（21 - 25）', link: '/program-language/python/20181007-21-25' },
                { text: '编程实例（26 - 30）', link: '/program-language/python/20181008-26-30' },
                { text: '编程实例（31 - 35）', link: '/program-language/python/20181009-31-35' },
                { text: '编程实例（36 - 40）', link: '/program-language/python/20181010-36-40' },
                { text: '编程实例（41 - 45）', link: '/program-language/python/20181011-41-45' },
                { text: '编程实例（46 - 50）', link: '/program-language/python/20181012-46-50' },
                { text: '编程实例（51 - 55）', link: '/program-language/python/20181013-51-55' },
            ]
        },

        {
            text: 'C 语言',
            collapsed: true,
            items: [
                { text: '内存管理函数', link: '/program-language/c/20180308-memory-manage' },
                { text: '知识点总结', link: '/program-language/c/20180720-summary' },
            ]
        },

        {
            text: 'C++',
            collapsed: true,
            items: [
                { text: '内存管理函数', link: '/program-language/cpp/20180720-summary' }
            ]
        }
    ]
}