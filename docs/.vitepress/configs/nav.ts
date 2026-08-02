import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
    { text: '🏠 首页', link: '/' },
    { text: '👤 我的主页', link: 'https://cunyu1943.github.io' },
    {
        text: '☕️ Java 图鉴 ',
        items: [
            { text: '🪛 Java 基础', link: '/javase' },
            { text: '🐦 入门练习', link: '/rookie' },
            { text: '🕹️ 实战训练', link: '/in-action' },
        ]
    },
    { text: '🧑🏻‍💻 求职面试', link: '/interview' },
    {
        text: '⛩️ 框架｜中间件',
        items: [
            { text: '🔖 Maven', link: '/maven' },
            { text: '🏮 MyBatis', link: '/mybatis' },
            { text: '🎈 MyBatis Plus', link: '/mybatis-plus' },
            { text: '🍃 Spring', link: '/spring' },
            { text: '🌿 Spring Boot', link: '/springboot' },
            { text: '🎐 Nginx', link: '/nginx' },
            { text: '📮 Redis', link: '/redis' },

        ]
    },
    {
        text: '🚀 效率教程',
        items: [
            { text: '🚧 博客搭建', link: '/blog' },
            { text: '🛠️ 效率工具', link: '/efficiency' },
            { text: '🖥️ 软件设计师', link: '/software-designer' }
        ]
    },
]