import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'
export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Jay Lu
      </h1>
      <p className="mb-4">
        我是一位i人，天蝎座。喜欢旅行，听访谈，记录，创造。我的热情在于构建人们真正需要，并且愿意为之使用的东西。

      </p>
      <p className="mb-4">
        日常使用Python/Pytorch/FastAPI,JavaScript/React/Next.js来完成我的工作，我更喜欢底层的实现，不太喜欢复杂的抽象。
      </p>
      <p className="mb-4">
        可以在 <Link href="/blog/about" className="link-style">about</Link> 页面了解关于我的更多信息，
        我的日常想法和笔记在 <Link href="/blog" className="link-style">Blog</Link>，
        我喜欢的电影书籍和资料在 <Link href="/favorites" className="link-style">Favorites</Link>，
        以及我最近在尝试的一些 <Link href="/projects" className="link-style">Projects</Link>。
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
