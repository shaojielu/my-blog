import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Jay
      </h1>
      {/* <p className="mb-4">
        {`Hey! I'm an introvert and a Scorpio, and I'm always torn between needing a solid plan and just wanting to go with the flow.
        My work is in deep learning, and as part of that, I also do a lot of the related web development—you know, building the apps and tools that bring the models to life.
        I'm a big fan of that design philosophy where you figure out the "why" before you get into the "how." 
        I guess you could say I'm a bit of an idealist, and recently I've started getting into the whole philosophy of the Dao.`}
      </p> */}
      <p className="mb-4">
        {`我是Jay。一位i人，天蝎座，对深度学习感兴趣但是做了很多相关的web开发，倾心由道及术的设计理念。`}
      </p>
      <p className="mb-4">
        {`有关我的日常，和编码文章可以在Blog部分查看，我目前尝试的项目在Projects，关于我的更多信息可以查看About`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
