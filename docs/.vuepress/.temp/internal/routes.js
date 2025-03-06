export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/alexa./Web/Projects/pc-build-guide/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/build.html", { loader: () => import(/* webpackChunkName: "build.html" */"/Users/alexa./Web/Projects/pc-build-guide/docs/.vuepress/.temp/pages/build.html.js"), meta: {"title":"Build"} }],
  ["/faq.html", { loader: () => import(/* webpackChunkName: "faq.html" */"/Users/alexa./Web/Projects/pc-build-guide/docs/.vuepress/.temp/pages/faq.html.js"), meta: {"title":"FAQ"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/alexa./Web/Projects/pc-build-guide/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/parts.html", { loader: () => import(/* webpackChunkName: "parts.html" */"/Users/alexa./Web/Projects/pc-build-guide/docs/.vuepress/.temp/pages/parts.html.js"), meta: {"title":"Parts"} }],
  ["/resources.html", { loader: () => import(/* webpackChunkName: "resources.html" */"/Users/alexa./Web/Projects/pc-build-guide/docs/.vuepress/.temp/pages/resources.html.js"), meta: {"title":"Resources"} }],
  ["/troubleshooting.html", { loader: () => import(/* webpackChunkName: "troubleshooting.html" */"/Users/alexa./Web/Projects/pc-build-guide/docs/.vuepress/.temp/pages/troubleshooting.html.js"), meta: {"title":"Troubleshooting"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/alexa./Web/Projects/pc-build-guide/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
