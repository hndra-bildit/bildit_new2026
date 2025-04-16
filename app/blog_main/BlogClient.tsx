'use client'

import { useEffect, useState } from 'react'
import { CardNineItemType } from '../components/CardNine'
import CardNine from '../components/CardNine'
import cn from 'classnames'
import { useRouter, useParams } from 'next/navigation'

const LinkGroups: Array<{ name: string; param: string }> = [
  { name: 'News', param: 'news' },
  { name: 'Insight', param: 'insight' },
  { name: 'E-Commerce', param: 'ecommerce' },
  { name: 'Business', param: 'business' },
  { name: 'Technology', param: 'technology' }
]

export default function BlogClient() {
  const router = useRouter()
  const param = useParams()
  const currentCategory = param.category as string

  const [posts, setPosts] = useState<CardNineItemType[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!currentCategory) return

    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/posts?category=${currentCategory}`)
        const data = await res.json()
        setPosts(data)
      } catch (error) {
        console.error('Failed to fetch posts:', error)
      }
      setLoading(false)
    }

    fetchData()
  }, [currentCategory])

  const handleTabClick = (cat: string) => {
    if (cat === currentCategory) return
    router.replace(`/blog_main/${cat}`)
  }

  return (
    <div>
      <div className="flex space-x-2 lg:space-x-8 justify-center mt-12">
        {LinkGroups.map((item, key) => (
          <div
            className={cn(
              'text-cms-basic lg:text-2xl font-bold leading-normal cursor-pointer hover:text-cms-rose',
              currentCategory === item.param ? 'text-cms-rose' : 'text-black'
            )}
            key={key}
            onClick={() => handleTabClick(item.param)}
          >
            {item.name}
          </div>
        ))}
      </div>

      {!loading && (
        <>
          <div className="container mx-auto grid md:grid-cols-2 gap-10">
            {posts.length > 1 &&
              posts.slice(0, 2).map((item, key) => <CardNine item={item} cardType="big" key={key} />)}
          </div>
          <div className="container mx-auto grid md:grid-cols-3 gap-10">
            {posts.length > 2 && posts.slice(2).map((item, key) => <CardNine item={item} cardType="small" key={key} />)}
          </div>
        </>
      )}
    </div>
  )
}
