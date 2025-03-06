import "/Users/alexa./Web/Projects/pc-build-guide/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "/Users/alexa./Web/Projects/pc-build-guide/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "/Users/alexa./Web/Projects/pc-build-guide/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "/Users/alexa./Web/Projects/pc-build-guide/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "/Users/alexa./Web/Projects/pc-build-guide/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "/Users/alexa./Web/Projects/pc-build-guide/node_modules/@vuepress/highlighter-helper/lib/client/index.js"
import "/Users/alexa./Web/Projects/pc-build-guide/node_modules/@vuepress/highlighter-helper/lib/client/styles/code-block-title.css"

export default {
  setup() {
    setupCollapsedLines()
  }
}
