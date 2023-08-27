import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-shared@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useScriptTag } from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/@vueuse+core@10.3.0_vue@3.3.4/node_modules/@vueuse/core/index.mjs";
import { useStyleTag } from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/@vueuse+core@10.3.0_vue@3.3.4/node_modules/@vueuse/core/index.mjs";
import ArtPlayer from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/components/ArtPlayer.js";
import AudioPlayer from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/components/AudioPlayer.js";
import Badge from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import BiliBili from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import CodePen from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/components/CodePen.js";
import FontIcon from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import PDF from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import Replit from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/components/Replit.js";
import Share from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/components/Share.js";
import StackBlitz from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/components/StackBlitz.js";
import SiteInfo from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/components/SiteInfo.js";
import XiGua from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/components/XiGua.js";
import YouTube from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/components/YouTube.js";
import VideoPlayer from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/components/VideoPlayer.js";
import BackToTop from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";
import Notice from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/components/Notice.js";

import "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/JavaPark/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("ArtPlayer")) app.component("ArtPlayer", ArtPlayer);
    if(!hasGlobalComponent("AudioPlayer")) app.component("AudioPlayer", AudioPlayer);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("CodePen")) app.component("CodePen", CodePen);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    if(!hasGlobalComponent("Replit")) app.component("Replit", Replit);
    if(!hasGlobalComponent("Share")) app.component("Share", Share);
    if(!hasGlobalComponent("StackBlitz")) app.component("StackBlitz", StackBlitz);
    if(!hasGlobalComponent("SiteInfo")) app.component("SiteInfo", SiteInfo);
    if(!hasGlobalComponent("XiGua")) app.component("XiGua", XiGua);
    if(!hasGlobalComponent("YouTube")) app.component("YouTube", YouTube);
    if(!hasGlobalComponent("VideoPlayer")) app.component("VideoPlayer", VideoPlayer);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useStyleTag(`\
@import url("//at.alicdn.com/t/c/font_3871871_vwp59h64k8.css");
`);
  },
  rootComponents: [
    () => h(BackToTop, {}),
    () => h(Notice, { config: [{"showOnce":true,"path":"/","title":"🎉🎉🎉","content":"<b><center>扫码添加微信/关注公众号，及时获取最新资讯</br><img src=\"/contact/contact.png\" width=\"200\"></br>鼓励/支持/赞赏我</br><img src=\"/award/donate.svg\" width=\"150\"></b></center>","actions":[{"text":"查看更多","link":"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIyNTg2MjkzNw==&action=getalbum&album_id=2501145320567963650&scene=173&from_msgid=2247496990&from_itemidx=1&count=3&nolastread=1#wechat_redirect","type":"primary"}]}] }),
  ],
});
