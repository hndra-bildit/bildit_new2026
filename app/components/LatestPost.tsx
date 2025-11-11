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
      <div className="container mx-auto grid md:grid-cols-3 gap-10">
        {items.map((item, idx) => (
          <CardNine item={item} cardType="small" key={idx} />
        ))}
      </div>
      {loading && <p>Loading more...</p>}
      {!loading && hasMore && loadMore && (
        <p
          className="text-zinc-600 text-base lg:text-2xl leading-normal text-center my-12 cursor-pointer"
          onClick={() => handleLoadMore()}
        >
          Load more...
        </p>
      )}
    </>
  )
}
