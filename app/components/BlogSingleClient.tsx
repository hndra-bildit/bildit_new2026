'use client'

import { useEffect, useState } from 'react'
import BodyOne from '@/app/components/BodyOne'
import { CardNineItemType } from '@/app/components/CardNine'
import DisplayOne from '@/app/components/DisplayOne'
import SubTitleFiveCaps from '@/app/components/SubTitleFiveCaps'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";

interface blogType{
  id:string,
  createdAt:string,
  author:string,
  data:Array<{title:string, content:string}>
}
// to-do: should come from cms
const blog:blogType= {
  id:"1",
  createdAt:"January 22, 2025",
  author:"Matt Hudson",
  data:[
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
}
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
        <SubTitleFiveCaps content={post.category} className="text-center lg:text-left" />
        <DisplayOne content={post.title} className="text-neutral-900 text-center lg:text-left" />
        <BodyOne
          content={`By ${blog.author} • ${blog.createdAt} • 5 mins read`}
          className="my-3 text-neutral-900 text-center lg:text-left"
        />
        <Image src={post.src} alt={post.alt} width={1200} height={1200} className="w-full h-auto" />
        <div className="md:grid grid-cols-[33%_auto] gap-10">
          <div className="order-2 space-y-3 lg:space-y-10 mt-12">
            {blog.data.map((item, key) => (
              <div id={`content_${key}`} key={key}>
                <h4 className="text-2xl md:text-4xl text-neutral-900 font-gt-walsheim">{item.title}</h4>
                <p className="text-base md:text-2xl text-zinc-600 font-gt-walsheim">{item.content}</p>
              </div>
            ))}
          </div>
          <div className="order-1 mt-12">
            <h6 className="text-neutral-500 text-base font-normal leading-none hidden lg:block ">Table of contents</h6>
            <div className='hidden lg:block '>
              {blog.data.map((item, key) => (
                <p className="text-zinc-600 text-base mt-2" key={key}>
                  <Link href={`#content_${key}`}>{item.title}</Link>
                </p>
              ))}
            </div>
            <hr className='hidden lg:block my-6 border-gray-300' />
            
            <div>
              <p className='text-zinc-600 text-base mt-2'>Published</p>
              <p className='text-zinc-600 text-base mt-2'>{blog.createdAt}</p>
            </div>
            <hr className='hidden lg:block my-6 border-gray-300' />
            <div className='flex space-x-5'>
              <p className='text-zinc-600 text-base mt-2'>Share article</p>
              <div className='text-zinc-600 text-base mt-2'><Link href="#"><SlSocialLinkedin /></Link></div>
              <div className='text-zinc-600 text-base mt-2'><Link href="#"><FaXTwitter /></Link></div>
              <div className='text-zinc-600 text-base mt-2'><Link href="#"><IoIosLink /></Link></div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default BlogSingleClient
