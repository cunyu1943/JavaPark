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
    {
        text: '📋 开源项目',
        items: [
            { text: '🅱️ 博客', link: 'https://github.com/cunyu1943/blog' },
            { text: '☕️ JavaPark', link: 'https://github.com/cunyu1943/JavaPark' },
            { text: '📰 好物周刊', link: 'https://github.com/cunyu1943/weekly' },
            { text: '💾 MySQL 学习指南', link: 'https://github.com/cunyu1943/mysql-tutorial' },
            { text: '🐍 Python 学习指南', link: 'https://github.com/cunyu1943/python-tutorial' },
            { text: '🖥️ 计算机学习指南', link: 'https://github.com/cunyu1943/cs-guide' },
            { text: '🍃 Spring Boot Demos', link: 'https://github.com/cunyu1943/spring-boot-demos' },

        ]
    },
]