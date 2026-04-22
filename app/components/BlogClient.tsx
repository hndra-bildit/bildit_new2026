'use client'

import { useEffect, useState } from 'react'
import { CardNineItemType } from '@/app/components/CardNine'
import CardNine from '@/app/components/CardNine'
import cn from 'clsx'
import { useParams, useRouter } from 'next/navigation'

const LinkGroups: Array<{ name: string; param: string }> = [
  { name: 'News', param: 'news' },
  { name: 'Insight', param: 'insight' },
  { name: 'E-Commerce', param: 'ecommerce' },
  { name: 'Business', param: 'business' },
  { name: 'Technology', param: 'technology' }
]

const DEFAULT_CATEGORY = 'news'

export type BlogClientProps = {
  /** When set, listings use only this category and category tabs are hidden (e.g. webinars page). */
  fixedCategory?: string
}

export default function BlogClient({ fixedCategory }: BlogClientProps = {}) {
  const router = useRouter()
  const param = useParams()
  const pathCategory = param.category as string | undefined
  const currentCategory = fixedCategory ?? pathCategory ?? DEFAULT_CATEGORY
  const showCategoryTabs = fixedCategory === undefined

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
    router.replace(`/blog/category/${cat}`)
  }

  return (
    <div className={cn('pb-16', !showCategoryTabs && 'pt-10 sm:pt-12')}>
      {showCategoryTabs && (
        <div className="mx-auto mt-10 flex max-w-[1512px] flex-wrap justify-center gap-x-3 gap-y-2 px-3 sm:mt-12 sm:gap-x-6 sm:px-4">
          {LinkGroups.map((item, key) => (
            <button
              type="button"
              key={key}
              onClick={() => handleTabClick(item.param)}
              className={cn(
                'font-[family-name:var(--font-uncut-sans)] cursor-pointer rounded-full px-3 py-1.5 text-sm font-semibold transition-colors sm:px-4 sm:text-[15px]',
                currentCategory === item.param
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
              )}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}

      {!loading && posts.length > 0 && (
        <div className="mx-auto mt-10 max-w-[1512px] px-3 sm:mt-12 sm:px-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {posts.map((item) => (
              <CardNine item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
