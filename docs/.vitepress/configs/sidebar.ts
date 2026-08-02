import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {

    '/': [
        { text: "学习指引", link: "/guide" },
        {
            text: "Java 基础",
            collapsed: true,
            items: [
                { text: "入门简介", link: "/javase/20220701-intro-to-java" },
                { text: "开发环境搭建及入门程序", link: "/javase/20220702-jdk-install-and-hello-world" },
                { text: "利用 IDEA 进行开发", link: "/javase/20220703-learn-java-with-idea" },
                { text: "变量与数据类型", link: "/javase/20220704-variable-and-datatype" },
                { text: "常用进制转换", link: "/javase/20220705-binary-convert" },
                { text: "操作符", link: "/javase/20220706-operator" },
                { text: "控制流程", link: "/javase/20220707-control-process" },
                { text: "流程控制知识大闯关", link: "/javase/20221127-loop-in-action" },
                { text: "数组操作技巧", link: "/javase/20220708-how-to-operate-array" },
                { text: "面向对象", link: "/javase/20220709-oop-1.md" },
                { text: "类的相关知识", link: "/javase/20220710-oop-2" },
                { text: "包和 jar 文件的创建", link: "/javase/20220711-oop-3" },
                { text: "成员变量、实例变量、静态变量、局部变量", link: "/javase/20220712-all-kinds-of-variable" },
                { text: "String 详解", link: "/javase/20220713-string" },
                { text: "ArrayList 详解", link: "/javase/20220714-arraylist" },
                { text: "输入输出流", link: "/javase/20220715-in-out-stream" },
                { text: "反射机制详解", link: "/javase/20220716-reflection" },
                { text: "深入浅出注解", link: "/javase/20220721-annotations" },
                { text: "JDBC 入门", link: "/javase/20220717-jdbc-introduction" },
                { text: "Junit 单元测试", link: "/javase/20220718-test-with-junit" },
                { text: "Lombok 安装使用指南", link: "/javase/20220719-lombok-install-and-usage" },
                { text: 'Fastjson V2 使用手册', link: '/javase/20220720-fastjson2-quickstart' },
                { text: 'static和final小课堂', link: '/javase/20221203-oop-advance' },
                { text: '抽象、接口和内部类', link: '/javase/20221211-abstract' },
                { text: 'Mockito + JUnit 单元测试实例', link: '/javase/20220722-mockito' },
            ]
        },

        {
            text: "入门练习",
            collapsed: true,
            items: [
                { text: "入门练习：1-5", link: "/rookie/20220625-1-5" },
                { text: "入门练习：6-10", link: "/rookie/20220626-6-10" },
                { text: "入门练习：11-15", link: "/rookie/20220627-11-15" },
                { text: "入门练习：16-20", link: "/rookie/20220628-16-20" },
                { text: "入门练习：21-25", link: "/rookie/20220629-21-25" },
                { text: "入门练习：26-30", link: "/rookie/20220630-26-30" },
                { text: "入门练习：31-35", link: "/rookie/20220701-31-35" },
                { text: "入门练习：36-40", link: "/rookie/20220702-36-40" },
            ]
        },

        {
            text: '实战训练',
            collapsed: true,
            items: [
                { text: '学生成绩管理系统', link: '/in-action/20210405-stu-manage-sys' },
                { text: '饭馆点菜系统', link: '/in-action/20210731-order-system' },
                { text: '记账本', link: '/in-action/20210801-tally-book' },
                { text: 'MySQL + MyBatis 版学生管理系统', link: '/in-action/20220307-mysql-mybatis-stu-manag-sys' },
            ]
        },

        {
            text: 'Maven',
            collapsed: true,
            items: [
                { text: '简介', link: '/maven/20200707-intro' },
                { text: '常用命令', link: '/maven/20200708-command' },
                { text: '仓库、坐标及依赖管理', link: '/maven/20200709-pom' },
                { text: 'IDEA 创建 Maven 项目', link: '/maven/20200710-idea-maven' },
            ]
        },

        {
            text: 'MyBatis',
            collapsed: true,
            items: [
                { text: '简介', link: '/mybatis/20200719-intro' },
                { text: '入门实例', link: '/mybatis/20200720-quick-start' },
                { text: '注解开发', link: '/mybatis/20200721-annotation' },
                { text: '一二级缓存', link: '/mybatis/20200722-pri-sec-cache' },
                { text: '代码自动生成器', link: '/mybatis/20211214-generator' },
            ]
        },

        {
            text: 'MyBatis-Plus',
            collapsed: true,
            items: [
                { text: '简介及入门实例', link: '/mybatis-plus/20210807-intro' },
                { text: '日志配置及常用 CRUD', link: '/mybatis-plus/20210808-log-crud' },

            ]
        },

        {
            text: 'Spring',
            collapsed: true,
            items: [
                { text: '简介', link: '/spring/20200720-intro' },
                { text: 'IoC 大揭秘', link: '/spring/20200723-ioc' },
                { text: '依赖注入知多少', link: '/spring/20200724-di' },
                { text: 'Spring Bean 注解详解', link: '/spring/20210521-annotation' },
                { text: 'IoC 简介及入门实例（XML 版）', link: '/spring/20220428-ioc-xml' },
                { text: 'Bean 详解', link: '/spring/20220429-bean' },
            ]
        },

        {
            text: 'Spring Boot',
            collapsed: true,
            items: [
                { text: '简介', link: '/springboot/20200520-intro' },
                { text: '注解方式整合 MyBatis 实例', link: '/springboot/20200727-annotation-mybatis' },
                { text: 'XML 方式整合 MyBatis 实例', link: '/springboot/20200726-xml-mybatis' },
                { text: '注解方式整合 Mybatis + PageHelper 分页实例', link: '/springboot/20200728-annotation-mybatis-pagehelper' },
                { text: '整合 Thymeleaf 实例', link: '/springboot/20200729-thymeleaf' },
                { text: '整合 JDBC Template 实例', link: '/springboot/20200730-jdbc' },
                { text: '创建项目的几种方式', link: '/springboot/20210811-create-ways' },
                { text: '配置详解', link: '/springboot/20211003-config' },
                { text: '整合 FreeMarker 实例', link: '/springboot/20211130-freemaker' },
                { text: 'Swagger2 构建强大的 API 文档', link: '/springboot/20220106-swagger2' },
                { text: 'Swagger3 生成 API 接口文档', link: '/springboot/20220110-swagger3' },
                { text: '集成 Knife4j', link: '/springboot/20220430-knife4j' },
                { text: '集成 Security 入门小实例', link: '/springboot/20220604-security' },
            ]
        },

        {
            text: 'Nginx',
            collapsed: true,
            items: [
                { text: '简介与环境搭建', link: '/nginx/20221016-intro-install' },
            ]
        },

        {
            text: 'Redis',
            collapsed: true,
            items: [
                { text: '简介', link: '/redis/20210821-intro' },
                { text: 'Redis 持久化', link: '/redis/20221016-persistence' },
            ]
        },

        {
            text: '面试宝典',
            collapsed: true,
            items: [
                { text: 'Java 基础面试知识点', link: '/interview/20240201-java-basic' },
                { text: 'Java 进阶面试知识点', link: '/interview/20240203-java-advanced' },
                { text: 'MySQL 面试知识点', link: '/interview/20240203-mysql' },
                { text: 'MyBatis 面试知识点', link: '/interview/20210822-mybatis' },
                { text: 'Spring 面试知识点', link: '/interview/20210103-spring' },
                { text: '多线程面试知识点', link: '/interview/20210629-thread' },
                { text: '异常面试知识点', link: '/interview/20210528-exception' },
                { text: '计算机网络面试知识点', link: '/interview/20201231-network' },
            ]
        },

        {
            text: '博客搭建',
            collapsed: true,
            items: [
                { text: 'Vuepress + GitHub Actions 博客自动部署', link: '/blog/20210826-vuepress' },
                { text: 'Hexo + Github Pages 博客搭建教程', link: '/blog/20220401-hexo' },
                { text: 'dumi 博客搭建', link: '/blog/20220610-dumi' },
                { text: 'Hugo + Github Pages 博客搭建教程', link: '/blog/20220611-hugo' },
                { text: 'Halo 博客搭建教程', link: '/blog/20201228-halo' },
                { text: 'docsify 文档型博客搭建', link: '/blog/20220612-docsify' },
            ]
        },
        {
            text: '效率工具',
            collapsed: true,
            items: [
                { text: '如何用 Markdown 写出好看的文章', link: '/efficiency/20230425-markdown-tutorial' },
                { text: '10 个神奇的网站，助力带薪摸鱼', link: '/efficiency/20220729-10-amazing-website' },
                { text: '网站访问太慢，不妨试试这些 CDN', link: '/efficiency/20220729-cdn' },
                { text: '计算机专业涨薪必备的几个网站', link: '/efficiency/20220731-exercise-websites' },
                { text: '黑客大神也常用的一些 CMD 命令', link: '/efficiency/20221127-cmd' },
                { text: '如何在浏览器中安装插件', link: '/efficiency/20230710-browser-plugin-install' },
                { text: 'Emoji 表情大作战', link: '/efficiency/20220729-emoji' },
                { text: 'macOS 安装 Node.js', link: '/efficiency/20221114-macos-install-node' },
                { text: 'iTerm2 + Fish 高效终端', link: '/efficiency/20220426-iterm2-fish' },
                { text: 'iTerm2 + Oh My Zsh 终端神器', link: '/efficiency/20220811-iterm2-zsh' },
                { text: 'PPT 模板免费下载', link: '/efficiency/20220623-ppt-template' },
                { text: 'Windows 安装 Node.js', link: '/efficiency/20200511-windows-install-node' },
                { text: 'Ubuntu 默认 root 密码修改', link: '/efficiency/20200517-ubuntu-root-pwd' },
                { text: 'VMware 安装 Ubuntu', link: '/efficiency/20200518-vmware-ubuntu' },
                { text: 'XShell 连接 Ubuntu', link: '/efficiency/20200519-xshell-ubuntu' },
                { text: '手把手配置 Ubuntu', link: '/efficiency/20200520-ubuntu' },
                { text: '玩转 Manjora', link: '/efficiency/20200521-manjora' },
                { text: '如何给视频添加字幕', link: '/efficiency/20201010-video-subtitle' },
                { text: 'U 盘启动盘制作', link: '/efficiency/20201229-u-disk-sys-booter' },
                { text: '优雅地使用 Windows 10', link: '/efficiency/20201230-windows-tips' },
                { text: 'Windows 系统安装教程', link: '/efficiency/20201231-windows-sys' },
                { text: '如何制作电子签名', link: '/efficiency/20210422-signature' },
                { text: '技术写作中的神兵利器', link: '/efficiency/20210504-write-tools' },
            ]
        },
        {
            text: '软件设计师',
            collapsed: true,
            items: [
                { text: '计算机系统', link: '/software-designer/20221024-computer-system' },
            ]
        },

        {
            text: '你问我答',
            collapsed: true,
            items: [
                { text: '学习Java基础，应该去哪儿刷题', link: '/faq/20230402-where-exercise-java-basics' },
            ]
        },
    ]
}