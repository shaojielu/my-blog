/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 导出为静态 HTML
  basePath: '/blog', // 您的 GitHub 仓库名称
  images: {
    unoptimized: true, // 禁用 Next.js 图片优化，因为 GitHub Pages 是静态服务
  },
};

module.exports = nextConfig;
