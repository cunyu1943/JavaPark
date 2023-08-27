import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/vuepress-hope/node_modules/.pnpm/vuepress-plugin-pwa2@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "/Users/cunyu/资料库/100 Learning 学习/110 OpenSource 开源/vuepress-hope/node_modules/.pnpm/vuepress-plugin-pwa2@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});
