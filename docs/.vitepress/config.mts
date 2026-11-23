import { defineConfig } from 'vitepress'

// ============================================================
// 站点配置 —— 只需修改这里即可适配你的仓库
// ============================================================
// 你的 GitHub 用户名（改成你自己的）
const githubUser = 'yinhaochun'
// 你的仓库名（改成你自己的）
const repoName = 'knowledge-base'

// 部署基础路径：
//  - 若仓库名为 <用户名>.github.io（用户主页站），base 应为 '/'
//  - 若是普通仓库（如本项目 knowledge-base），base 应为 '/knowledge-base/'
// GitHub Actions 会通过 VITE_BASE 环境变量自动注入，本地预览默认 '/'
const base = process.env.VITE_BASE || '/'

export default defineConfig({
  base,
  title: '知识库',
  description: '个人知识沉淀 · 技术 · 读书 · 生活 · 工作',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: `${base}favicon.svg` }],
    ['meta', { name: 'author', content: githubUser }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '我的知识库',

    nav: [
      { text: '首页', link: '/' },
      { text: '技术', link: '/tech/' },
      { text: '读书', link: '/reading/' },
      { text: '生活', link: '/life/' },
      { text: '工作', link: '/work/' }
    ],

    sidebar: {
      '/tech/': [
        {
          text: '技术笔记',
          items: [
            { text: '概览', link: '/tech/' },
            { text: 'Git 常用命令速查', link: '/tech/git-cheatsheet' },
            { text: 'Markdown 写作指南', link: '/tech/markdown-guide' }
          ]
        }
      ],
      '/reading/': [
        {
          text: '读书笔记',
          items: [
            { text: '概览', link: '/reading/' },
            { text: '如何阅读一本书', link: '/reading/how-to-read-a-book' }
          ]
        }
      ],
      '/life/': [
        {
          text: '生活随笔',
          items: [
            { text: '概览', link: '/life/' }
          ]
        }
      ],
      '/work/': [
        {
          text: '工作方法论',
          items: [
            { text: '概览', link: '/work/' }
          ]
        }
      ]
    },

    // 本地搜索，无需后端服务
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '没有找到相关结果',
            resetButtonTitle: '清除查询',
            displayDetails: '显示详情',
            backButtonTitle: '返回',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    outline: { level: [2, 3], label: '本页目录' },

    lastUpdatedText: '最后更新于',

    docFooter: { prev: '上一篇', next: '下一篇' },

    editLink: {
      pattern: `https://github.com/${githubUser}/${repoName}/edit/main/docs/:path`,
      text: '在 GitHub 上编辑此页'
    },

    socialLinks: [
      { icon: 'github', link: `https://github.com/${githubUser}` }
    ],

    footer: {
      message: '用 VitePress 构建 · 知识沉淀',
      copyright: 'Copyright © 2026'
    },

    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单'
  }
})
