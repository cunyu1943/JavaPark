import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
    { text: '🏠 主页', link: '/' },
    {
        text: '☕️ Java 图鉴',
        items: [
            { text: '🪛 Java 基础', link: '/java-tutorial/javase/20220701-intro-to-java' },
            { text: '💾 MySQL', link: '/java-tutorial/mysql/20210623-quick-start' },
            { text: '🪩 Java Web', link: '/java-tutorial/javaweb/' },
            { text: '🕹️ 实战训练', link: '/java-tutorial/in-action/20220625-1-5' },
        ]
    },

    {
        text: '🧑🏻‍💻 求职面试',
        items: [
            { text: '🔋 知识点', link: '/interview/knowledge/20240201-java-basic' },
            { text: '🪫 面试技巧', link: '/interview/' },
        ]
    },

    {
        text: '⛩️ 框架|中间件',
        items: [
            { text: '🔖 Maven', link: '/framework/maven/20200707-intro' },
            { text: '🍃 Spring', link: '/framework/spring/20200720-intro' },
            { text: '🍀 Spring MVC', link: '/framework/springmvc/' },
            { text: '🏮 MyBatis', link: '/framework/mybatis/20200719-intro' },
            { text: '🎈 MyBatis-Plus', link: '/framework/mybatis-plus/20210807-intro' },
            { text: '☘️ Spring Boot', link: '/framework/springboot/20200520-intro' },
            { text: '🌿 Spring Cloud', link: '/framework/springcloud/' },
            { text: '🎐 Nginx', link: '/framework/nginx/20221016-intro-install' },
            { text: '📮 Redis', link: '/framework/redis/20210821-intro' },
        ]
    },

    {
        text: '💻 计算机知识',
        items: [
            { text: '🧷 组成原理', link: '/cs-wiki/composition/' },
            { text: '🔗 操作系统', link: '/cs-wiki/system/' },
            { text: '📎 计算机网络', link: '/cs-wiki/network/' },
            { text: '🖇️ 数据结构与算法', link: '/cs-wiki/algo/20220503-datastructure-intro' },
        ]
    },

    {
        text: '🚀 基础教程',
        items: [
            { text: '✈️ IDEA 教程', link: '/tutorial/idea/20220202-idea-guide' },
            { text: '🚧 博客搭建', link: '/tutorial/blog/20220401-hexo' },
            { text: '🛠️ 效率工具', link: '/tutorial/efficiency/20200511-windows-install-node' },
            { text: '🖥️ 软件设计师', link: '/tutorial/software-designer/20221024-computer-system' }
        ]
    },

    {
        text: '🐲 编程语言',
        items: [
            { text: '🦚 前端三剑客', link: '/program-language/front-end/20230829-environment' },
            { text: '🐸 Vue', link: '/program-language/vue/20220605-intro' },
            { text: '🐍 Python', link: '/program-language/python/20210331-intro' },
            { text: '🦎 C 语言', link: '/program-language/c/20180720-summary' },
            { text: '🐢 C++', link: '/program-language/cpp/20180720-summary' },
        ]
    },

    { text: '❓ 你问我答', link: '/faq/20230402-where-exercise-java-basics' },

    {
        text: '😎 关于',
        items: [
            { text: '🧑🏻‍💻 关于自己', link: '/about/me/' },
            { text: '📖 关于学习', link: '/about/study/' },
            { text: '💼 关于工作', link: '/about/job/' }
        ]
    },
    
    {
        text: '🪄 更多',
        items: [
            { text: '🧧 薅羊毛', link: '/ads' },
            { text: '💰 打赏', link: '/reward' },
            { text: '💳 超大流量卡', link: 'https://ym.ksjhaoka.com/?s=Ltxbbs9W330131' }
        ]
    }
]