/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import './style/blockquote.css'
import './style/blur.css'
import './style/hidden.css'
import './style/marker.css'
import './style/vp-code.css'
import './style/vp-code-group.css'
import './style/vp-code-title.css'
import './style/sidebarIcon.css'
import 'virtual:group-icons.css' //代码组样式
import HomeUnderline from './components/HomeUnderline.vue'
import DataPanel from "./components/DataPanel.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import notice from "./components/notice.vue";
import DocBefore from "./components/DocBefore.vue";
import { h } from 'vue' // h函数

export default {
    extends: DefaultTheme,
    // ...DefaultTheme, //或者这样写也可
    Layout() {
        return h(DefaultTheme.Layout, null, {

            // 指定组件使用layout-top插槽
            'layout-top': () => h(notice),

            // 指定组件使用doc-before插槽（文档内容前显示）
            'doc-before': () => h(DocBefore),

        })
    },
    enhanceApp({ app, router }) {
        // 注册全局组件
        app.component('HomeUnderline', HomeUnderline),
            app.component('DataPanel', DataPanel),
            app.component('ArticleMetadata', ArticleMetadata),
            app.use(NolebaseGitChangelogPlugin)
    }
}