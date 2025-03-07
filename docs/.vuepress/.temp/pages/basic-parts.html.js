import comp from "/Users/alexa./Web/Projects/pc-build-guide/docs/.vuepress/.temp/pages/basic-parts.html.vue"
const data = JSON.parse("{\"path\":\"/basic-parts.html\",\"title\":\"Basic Parts\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"basic-parts.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
