import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <p className="mb-4">
        {`我是VIM爱好者和标签倡导者，在 vim的击键命令和标签的灵活性 偏好。
        这扩展到我对静态打字的支持 早期错误检测确保了清洁码，
        我对黑暗的偏爱 模式，通过减少眼睛应变来简化长时间的编码会话`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
