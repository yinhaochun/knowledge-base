# 个人知识库（VitePress + GitHub Pages）

一个基于 VitePress 搭建的个人知识库，支持本地搜索、深浅主题、按分类组织文章，push 后自动部署到 GitHub Pages。

## 📁 目录结构

```
knowledge-base/
├── .github/workflows/deploy.yml   # 自动部署工作流
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts             # 站点配置（导航/侧边栏/搜索）
│   │   └── theme/                 # 主题与自定义样式
│   ├── public/                    # 静态资源（logo/favicon）
│   ├── index.md                   # 首页
│   ├── tech/                      # 技术分类
│   ├── reading/                   # 读书分类
│   ├── life/                      # 生活分类
│   └── work/                      # 工作分类
├── package.json
└── README.md
```

## 🚀 本地使用

需要 Node.js 18+。

```bash
# 安装依赖
npm install

# 启动本地预览（默认 http://localhost:5173）
npm run dev

# 构建静态站点
npm run build

# 本地预览构建结果
npm run preview
```

## ✍️ 写文章

1. 在对应分类目录下新建 `.md` 文件，例如 `docs/tech/我的文章.md`；
2. 打开 `docs/.vitepress/config.mts`，在 `themeConfig.sidebar` 对应分类下加一行：
   ```js
   { text: '我的文章', link: '/tech/我的文章' }
   ```
   > 注意：链接里去掉 `.md` 后缀，用英文或拼音文件名更稳妥。
3. 保存后本地预览会自动热更新。

文章写作语法见站内的「Markdown 写作指南」。

## 🌐 部署到 GitHub Pages

### 第一步：个性化配置

打开 `docs/.vitepress/config.mts`，修改顶部两行：

```js
const githubUser = 'yinhaochun'   // 改成你的 GitHub 用户名
const repoName = 'knowledge-base'    // 改成你的仓库名
```

### 第二步：创建仓库并推送

1. 在 GitHub 新建一个仓库（建议名 `knowledge-base`，公开）；
2. 在本地项目目录执行：

```bash
git init
git add .
git commit -m "init knowledge base"
git branch -M main
git remote add origin https://github.com/yinhaochun/knowledge-base.git
git push -u origin main
```

### 第三步：开启 Pages 权限

1. 进入仓库 **Settings → Pages**；
2. **Build and deployment → Source** 选择 **GitHub Actions**；
3. 推送后 `.github/workflows/deploy.yml` 会自动运行，完成后在 Actions 里可看到绿色对勾。

### 访问地址

- 仓库名是 `knowledge-base`（项目站）：`https://yinhaochun.github.io/knowledge-base/`
- 仓库名是 yinhaochun`.github.io`（用户主页站）：`https://yinhaochun.github.io/`

工作流会自动识别仓库名并设置正确的 base 路径，无需手动修改。

## ⚙️ 自定义

- **站点标题 / 描述**：`config.mts` 里的 `title`、`description`
- **主题色**：`docs/.vitepress/theme/custom.css` 里的 `--vp-c-brand-*` 变量
- **导航 / 侧边栏**：`config.mts` 里的 `themeConfig.nav`、`themeConfig.sidebar`
