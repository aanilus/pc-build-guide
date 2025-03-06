import comp from "/Users/alexa./Web/Projects/pc-build-guide/docs/.vuepress/.temp/pages/build.html.vue"
const data = JSON.parse("{\"path\":\"/build.html\",\"title\":\"Build\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1741236692000,\"contributors\":[{\"name\":\"Alex A.\",\"username\":\"Alex A.\",\"email\":\"aanilus@activix.ca\",\"commits\":1,\"url\":\"https://github.com/Alex A.\"}],\"changelog\":[{\"hash\":\"772e46cb3b4630aa0fc08b0689461bf5a5cbbffe\",\"date\":1741236692000,\"email\":\"aanilus@activix.ca\",\"author\":\"Alex A.\",\"message\":\"First commit\"}]},\"filePathRelative\":\"build.md\"}")
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
