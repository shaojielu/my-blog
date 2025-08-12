import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Jay
      </h1>
      <p className="mb-4">
        {`Hey! I'm an introvert and a Scorpio, and I'm always torn between needing a solid plan and just wanting to go with the flow.
        My work is in deep learning, and as part of that, I also do a lot of the related web development—you know, building the apps and tools that bring the models to life.
        I'm a big fan of that design philosophy where you figure out the "why" before you get into the "how." 
        I guess you could say I'm a bit of an idealist, and recently I've started getting into the whole philosophy of the Dao.`}
      </p>
      <p className="mb-4">
        {`我是一位i人，天蝎座，在计划和随心所欲之间徘徊，对深度学习比较感兴趣但是又做了很多与之相关的web开发，喜欢由道及术的设计理念。
        常常自诩有情怀，最近对道的理念略感兴趣。
        `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
