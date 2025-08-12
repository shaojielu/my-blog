# 我的个人博客

这是一个使用 Next.js、React 和 Tailwind CSS 构建的个人博客项目。它旨在为发布 Markdown 文章提供一个简洁、干净的平台。

## 特性

- **Next.js 15 App Router**: 现代、快速、以服务器为中心的应用结构。
- **MDX/Markdown 支持**: 使用 `.md` 或 `.mdx` 文件撰写博客文章。
- **Tailwind CSS**: 一个功能优先的 CSS 框架，用于快速 UI 开发。
- **TypeScript**: 提供类型安全，改善开发体验。
- **RSS 订阅源**: 自动为您的文章生成 RSS 订阅源。
- **站点地图 (Sitemap)**: `sitemap.ts` 文件有助于 SEO 优化。
- **动态 OG 图片**: `og/route.tsx` 用于生成社交媒体预览图。

## 开始使用

请遵循以下说明，在您的本地计算机上获取并运行该项目的副本，以进行开发和测试。

### 环境准备

您的系统需要安装 [Node.js](https://nodejs.org/) 和 [pnpm](https://pnpm.io/)。

### 安装

1.  克隆仓库:
    ```sh
    git clone <your-repository-url>
    ```
2.  进入项目目录:
    ```sh
    cd my-blog/blog
    ```
3.  安装依赖:
    ```sh
    pnpm install
    ```

### 运行开发服务器

要启动开发服务器，请运行以下命令：

```sh
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。当您编辑文件时，页面会自动更新。

## 可用脚本

在项目目录中，您可以运行：

-   `pnpm dev`: 在开发模式下运行应用。
-   `pnpm build`: 为生产环境构建应用到 `.next` 文件夹。
-   `pnpm start`: 启动 Next.js 生产服务器。

## 项目结构

-   `app/`: 包含应用的所有路由、页面和组件。
-   `app/blog/posts/`: 您的博客文章（`.md` 或 `.mdx` 文件）存放于此。
-   `app/components/`: 应用中共享的 React 组件。
-   `public/`: 存放图片、字体等静态资源。
-   `package.json`: 列出项目依赖和脚本。
-   `tsconfig.json`: TypeScript 编译器配置。
-   `postcss.config.js`: PostCSS 配置，供 Tailwind CSS 使用。
