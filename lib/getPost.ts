import { CardNineItemType } from '@/app/components/CardNine'

const allPosts: Array<CardNineItemType> = [
  {
    id: '1',
    src: '/images/blog_main/blog_1.png',
    alt: 'blog_1.png',
    category: 'news',
    updated_at: '4 min read',
    title: 'Revolutionizing Retail: The Latest Trends in E-commerce Technology',
    content:
      "Check out these awesome trends shaking things up in e-commerce tech for retail! It's all about making shopping more fun and convenient. Let's dive into what's hot right now!",
    href: '#'
  },
  {
    id: '2',
    src: '/images/blog_main/blog_2.png',
    alt: 'blog_2.png',
    category: 'news',
    updated_at: '4 min read',
    title: 'Revolutionizing Retail: The Latest Trends in E-commerce Technology',
    content:
      "Check out these awesome trends shaking things up in e-commerce tech for retail! It's all about making shopping more fun and convenient. Let's dive into what's hot right now!",
    href: '#'
  },
  {
    id: '3',
    src: '/images/blog_main/blog_4.png',
    alt: 'blog_4.png',
    category: 'news',
    updated_at: '4 min read',
    title: 'Revolutionizing Retail: The Latest Trends in E-commerce Technology',
    content:
      "Check out these awesome trends shaking things up in e-commerce tech for retail! It's all about making shopping more fun and convenient. Let's dive into what's hot right now!",
    href: '#'
  },
  {
    id: '4',
    src: '/images/blog_main/blog_3.png',
    alt: 'blog_3.png',
    category: 'news',
    updated_at: '4 min read',
    title: 'Revolutionizing Retail: The Latest Trends in E-commerce Technology',
    content:
      "Check out these awesome trends shaking things up in e-commerce tech for retail! It's all about making shopping more fun and convenient. Let's dive into what's hot right now!",
    href: '#'
  },
  {
    id: '5',
    src: '/images/blog_main/blog_5.png',
    alt: 'blog_5.png',
    category: 'news',
    updated_at: '4 min read',
    title: 'Revolutionizing Retail: The Latest Trends in E-commerce Technology',
    content:
      "Check out these awesome trends shaking things up in e-commerce tech for retail! It's all about making shopping more fun and convenient. Let's dive into what's hot right now!",
    href: '#'
  }
]
export async function getPostsByCategory(
  category: 'news' | 'insight' | 'ecommerce' | 'business' | 'technology'
): Promise<CardNineItemType[]> {
  await new Promise((res) => setTimeout(res, 300))
  return allPosts.filter((post) => post.category === category)
}

export async function getLatestPosts(page: number, limit: number): Promise<CardNineItemType[]> {
  const start = (page - 1) * limit
  const end = start + limit
  return allPosts.slice(start, end) // simulate pagination
}
