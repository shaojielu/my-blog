function AboutMe(){
    return (
        <div>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                关于我
            </h1>
            <p>
            我是一位i人，天蝎座，在计划和随心所欲之间徘徊，对深度学习比较感兴趣但是又做了很多与之相关的web开发，喜欢由道及术的设计理念。
        常常自诩有情怀，最近对道的理念略感兴趣。
            </p>
        </div>

    )
}

function AboutBlog(){
    return (
        <div>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                关于这个博客
            </h1>
            <p>
            我是一位i人，天蝎座，在计划和随心所欲之间徘徊，对深度学习比较感兴趣但是又做了很多与之相关的web开发，喜欢由道及术的设计理念。
        常常自诩有情怀，最近对道的理念略感兴趣。
            </p>
        </div>

    )
}





export default function About(){
    return (
        <div>
            <AboutMe/>
            <AboutBlog/>
        </div>
    )
}