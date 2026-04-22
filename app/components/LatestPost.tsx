'use client'

import { useState } from 'react'
import CardNine, { CardNineItemType } from './CardNine'
import DisplayTwo from './DisplayTwo'

type Props = {
  initialItems: CardNineItemType[]
  loadMore: boolean
}

export default function LatestPost({ initialItems, loadMore }: Props) {
  const [items, setItems] = useState(initialItems)
  const [page, setPage] = useState(2)
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)

  const handleLoadMore = () => {
    fetchMore()
  }
  const fetchMore = async () => {
    if (loading || !hasMore) return
    setLoading(true)

    const res = await fetch(`/api/posts?latest=true&page=${page}&limit=4`)

    const newItems = await res.json()
    if (newItems.length === 0) setHasMore(false)
    else {
      setItems((prev) => [...prev, ...newItems])
      setPage((prev) => prev + 1)
    }

    setLoading(false)
  }

  return (
    <>
      <DisplayTwo content="Latest Posts" className="font-uncut-sans lg:font-bold" />
      <div className="mx-auto grid max-w-[1512px] grid-cols-1 gap-4 px-3 sm:grid-cols-2 sm:gap-5 sm:px-4 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item, idx) => (
          <CardNine item={item} key={item.id ?? idx} />
        ))}
      </div>
      {loading && (
        <p className="font-[family-name:var(--font-uncut-sans)] mt-8 text-center text-sm text-[#595959]">
          Loading more…
        </p>
      )}
      {!loading && hasMore && loadMore && (
        <button
          type="button"
          className="font-[family-name:var(--font-uncut-sans)] mx-auto mt-10 block text-center text-sm font-semibold text-neutral-900 hover:text-[#c850f0]"
          onClick={() => handleLoadMore()}
        >
          Load more…
        </button>
      )}
    </>
  )
}
