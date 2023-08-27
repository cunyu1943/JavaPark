export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"JavaPark\",\"description\":\"分享编程学习、面试求职、效率工具等方面内容。\",\"head\":[[\"link\",{\"rel\":\"alternate\",\"type\":\"application/atom+xml\",\"href\":\"https://cunyu1943.github.io/atom.xml\",\"title\":\"JavaPark Atom Feed\"}],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/json\",\"href\":\"https://cunyu1943.github.io/feed.json\",\"title\":\"JavaPark JSON Feed\"}],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/rss+xml\",\"href\":\"https://cunyu1943.github.io/rss.xml\",\"title\":\"JavaPark RSS Feed\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/logo.svg\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
