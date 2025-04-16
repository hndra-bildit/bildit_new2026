'use client'

import { useEffect, useState } from 'react'
import BodyOne from '@/app/components/BodyOne'
import { CardNineItemType } from '@/app/components/CardNine'
import DisplayOne from '@/app/components/DisplayOne'
import SubTitleFiveCaps from '@/app/components/SubTitleFiveCaps'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const menuItems: string[] = [
  'Introduction',
  'The Power of AI in Startups',
  'Building a Global Presence',
  'Enhancing Collaboration in Virtual Teams',
  'Conclusion'
]
// to-do: should come from cms
const contentItems: Array<{ title: string; content: string }> = [
  {
    title: 'Introduction',
    content:
      "In today's fast-paced digital landscape, the rise of artificial intelligence (AI) is transforming how startups operate globally. This blog post explores the impact of AI on virtual startups and how it is revolutionizing the way we do business."
  },
  {
    title: 'The Power of AI in Startups',
    content:
      "In today's fast-paced digital landscape, the rise of artificial intelligence (AI) is transforming how startups operate globally. This blog post explores the impact of AI on virtual startups and how it is revolutionizing the way we do business."
  },
  {
    title: 'Building a Global Presence',
    content:
      "In today's fast-paced digital landscape, the rise of artificial intelligence (AI) is transforming how startups operate globally. This blog post explores the impact of AI on virtual startups and how it is revolutionizing the way we do business."
  },
  {
    title: 'Enhancing Collaboration in Virtual Teams',
    content:
      "In today's fast-paced digital landscape, the rise of artificial intelligence (AI) is transforming how startups operate globally. This blog post explores the impact of AI on virtual startups and how it is revolutionizing the way we do business."
  },
  {
    title: 'Conclusion',
    content:
      "In today's fast-paced digital landscape, the rise of artificial intelligence (AI) is transforming how startups operate globally. This blog post explores the impact of AI on virtual startups and how it is revolutionizing the way we do business."
  }
]
const BlogSingleClient = () => {
  const param = useParams()
  const postId = param.postId as string
  const [post, setPost] = useState<CardNineItemType | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/posts?postId=${postId}`)
      const data = await res.json()
      setPost(data)
    }

    fetchData()
  }, [postId])
  return (
    post && (
      <div>
        <SubTitleFiveCaps content={post.category} className="text-center md:text-left" />
        <DisplayOne content={post.title} className="text-cms-black-one text-center lg:text-left" />
        <BodyOne content="By Matt Hudson • January 22, 2025 • 5 mins read" className="my-3" />
        <Image src={post.src} alt={post.alt} width={1200} height={1200} className="w-full h-auto" />
        <div className="md:flex gap-10">
          <div className="flex-1 mt-12">
            <h6 className="text-neutral-500 text-base font-normal leading-none">Table of contents</h6>
            <div>
              {menuItems.map((item, key) => (
                <p className="text-zinc-600 text-base mt-2" key={key}>
                  <Link href="#">{item}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="flex-2 space-y-3 lg:space-y-10 mt-12">
            {contentItems.map((item, key) => (
              <div key={key}>
                <h4 className="text-2xl md:text-4xl text-neutral-900 font-gt-walsheim">{item.title}</h4>
                <p className="text-base md:text-2xl text-zinc-600 font-gt-walsheim">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  )
}

export default BlogSingleClient
