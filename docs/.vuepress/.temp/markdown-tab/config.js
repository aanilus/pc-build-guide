import { CodeTabs } from "/Users/alexa./Web/Projects/pc-build-guide/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/alexa./Web/Projects/pc-build-guide/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/alexa./Web/Projects/pc-build-guide/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
