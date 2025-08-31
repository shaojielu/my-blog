import Image from 'next/image';
import Link from 'next/link'; 
import { Caveat } from 'next/font/google';
import {
  SiReact,
  SiPython,
  SiFastapi,
  SiGit,
  SiDocker,
  SiPytorch,
  SiNextdotjs,
  SiJavascript,
} from 'react-icons/si';
import type { FC, ReactNode } from 'react'; 

// --- 字体配置 ---
const caveat = Caveat({
  subsets: ['latin'],
  weight: ['700'],
});

// --- 数据常量 ---
interface Skill {
  name: string;
  icon: ReactNode;
}

const SKILLS_DATA: readonly Skill[] = [
  { icon: <SiPython />, name: 'Python' },
  { icon: <SiPytorch />, name: 'PyTorch' },
  { icon: <SiFastapi />, name: 'FastAPI' }, 
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <SiReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiGit />, name: 'Git' },
  { icon: <SiDocker />, name: 'Docker' },
];

// --- 类型定义 ---
interface TechIconProps {
  icon: ReactNode;
  name: string;
}

interface StyledLinkProps {
  href: string;
  children: ReactNode;
}

interface SkillsSectionProps {
  skills: readonly Skill[];
}

// --- 原子组件 ---

/**
 * 显示单个技术及其图标
 * @param {TechIconProps} props - 组件 Props
 */
const TechIcon: FC<TechIconProps> = ({ icon, name }) => (
  <div className="flex flex-col items-center justify-center gap-y-1">
    <div className="text-3xl text-gray-700 transition-transform duration-300 hover:scale-110">
      {icon}
    </div>
    <p className="text-sm text-gray-600">{name}</p>
  </div>
);

/**
 * 带有下划线样式的内部导航链接
 * @param {StyledLinkProps} props - 组件 Props
 */
const StyledLink: FC<StyledLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    className="font-medium text-neutral-800 underline decoration-neutral-400 underline-offset-4 transition-colors duration-300 hover:text-neutral-500 hover:decoration-neutral-500"
  >
    {children}
  </Link>
);

// --- 区域组件 ---

/**
 * 个人资料介绍区域
 */
const ProfileSection: FC = () => (
  <section aria-labelledby="profile-heading">
    <div className="flex flex-col items-center gap-x-12 md:flex-row md:text-left">
      {/* 1. 头像部分 */}
      <div className="mb-8 flex-shrink-0 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-rotate-1 md:mb-0">
        <Image
          src="/a.jpeg"
          alt="Jay 的头像"
          width={160}
          height={160}
          className="rounded-lg object-cover shadow-md"
          priority
        />
      </div>

      {/* 2. 文本内容部分 */}
      <div>
        <h1 id="profile-heading" className="text-5xl font-bold tracking-tighter md:text-6xl">
          <span className={`${caveat.className} text-gray-800`}>
            Hey! I'm Jay.
          </span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-neutral-600">
          我是一位i人，天蝎座，对深度学习感兴趣，但是又做了很多相关的web开发。
          可以在 <StyledLink href="/blog/about">about</StyledLink> 页面了解关于我的更多信息，
          我的日常想法和笔记在 <StyledLink href="/blog">Blog</StyledLink>，
          我喜欢的电影书籍和资料在 <StyledLink href="/favorites">Favorites</StyledLink>，
          以及我最近在尝试的一些 <StyledLink href="/projects">Projects</StyledLink>。
        </p>
      </div>
    </div>
  </section>
);

/**
 * 无限滚动的技能展示区域
 * @param {SkillsSectionProps} props - 组件 Props
 */
const SkillsSection: FC<SkillsSectionProps> = ({ skills }) => (
  <section aria-labelledby="skills-heading">
    <h2 id="skills-heading" className="mb-6 text-xl font-semibold md:text-left text-center">
      Skills
    </h2>
    <div
      className="relative w-full overflow-hidden"
      role="group"
      aria-label="技术栈无限滚动展示"
    >
      {/* 左右渐变遮罩 */}
      <div className="absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent dark:from-black" />
      <div className="absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent dark:from-black" />

      {/* 
        【技巧】通过渲染两次 skills 列表来创建无缝滚动效果。
        CSS 动画将容器向左平移 50% (即整个原始列表的宽度)，
        当动画结束时，会立即重置到初始位置，视觉上实现了无限循环。
      */}
      <div className="flex animate-scroll">
        {[...skills, ...skills].map((skill, index) => (
          <div key={`${skill.name}-${index}`} className="flex-shrink-0 w-28">
            <TechIcon icon={skill.icon} name={skill.name} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- 主页面 ---
export default function Page() {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="space-y-20">
        <ProfileSection />
        <SkillsSection skills={SKILLS_DATA} />
      </div>
    </div>
  );
}