import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Steeve\'s PC Build Guide',
  description: 'How to build your own PC',
  base: '/pc-build-guide/',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/', '/get-started', '/parts', '/build', '/troubleshooting', '/faq', '/resources'],
  }),

  bundler: viteBundler(),
})
