import { defineClientConfig } from "@vuepress/client";
import { VPLink } from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-shared@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-shared/lib/client/index.js";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineAutoCatalogIconComponent } from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-plugin-auto-catalog@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-auto-catalog/lib/client/index.js"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, Timeline, setupBlog } from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";
import Slide from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/SlidePage.js";

import "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineAutoCatalogIconComponent(HopeIcon);

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);
    // provide VPLink as global component
    app.component("VPLink", VPLink);

    app.component("BloggerInfo", BloggerInfo);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
    Slide,
  }
});