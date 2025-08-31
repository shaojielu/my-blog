// app/favorites/page.tsx

import RevealCard from 'app/components/RevealCard'; 

export const metadata = {
  title: 'Favorites',
  description: '一些我个人非常喜欢并推荐的书籍、电影、视频和项目。',
};

const favoritesData = {
  books: [
    {
      title: '费马大定理',
      description: '故事和内容都完美',
      link: 'https://book.douban.com/subject/25867785/',
    },
  ],
  movies: [
    {
      title: '美丽心灵 (A Beautiful Mind)',
      description: '每一遍都有不同的感悟，成长，爱情，友情，信仰，勇气。',
      link: 'https://www.bilibili.com/bangumi/play/ep257469?theme=movie&spm_id_from=333.337.0.0',
    },
    {
      title: '社交网络 (The Social Network)',
      description: '梦寐以求的感觉',
      link: 'https://www.bilibili.com/bangumi/media/md28229352',
    },
  ],
  videos: [
    {
      title: '《向南》',
      description: '一段时间的精神源泉',
      link: 'https://www.bilibili.com/video/BV1Ax411o7LV/',
    },
  ],
  projects: [
    {
      title: 'full-stack-fastapi-template',
      description: '很好的教程',
      link: 'https://github.com/fastapi/full-stack-fastapi-template',
    },
  ],
};

export default function Favorites() {
  return (
    // 使用一个合适的 max-w 来约束整体宽度，让网格布局更美观
    <div className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-16 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Favorites
        </h1>
        <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
          一些我个人非常喜欢并推荐的书籍、电影、视频和项目。
        </p>
      </header>

      <main className="space-y-16">
        {/* 视频区域 */}
        <section>
          <h2 className="mb-8 text-lg font-semibold text-gray-800 dark:text-gray-200">Videos</h2>
          {/* 2. 使用网格布局，并为卡片之间提供足够的间距 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {favoritesData.videos.map((video) => (
              <RevealCard key={video.title} item={video} />
            ))}
          </div>
        </section>

        {/* 电影区域 */}
        <section>
          <h2 className="mb-8 text-lg font-semibold text-gray-800 dark:text-gray-200">Movies</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {favoritesData.movies.map((movie) => (
              <RevealCard key={movie.title} item={movie} />
            ))}
          </div>
        </section>

        {/* 书籍区域 */}
        <section>
          <h2 className="mb-8 text-lg font-semibold text-gray-800 dark:text-gray-200">Books</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {favoritesData.books.map((book) => (
              <RevealCard key={book.title} item={book} />
            ))}
          </div>
        </section>

        {/* 项目区域 */}
        <section>
          <h2 className="mb-8 text-lg font-semibold text-gray-800 dark:text-gray-200">Projects</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {favoritesData.projects.map((project) => (
              <RevealCard key={project.title} item={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}