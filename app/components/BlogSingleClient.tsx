'use client'

import { useEffect, useState } from 'react'
import { CardNineItemType } from '@/app/components/CardNine'
import { BlogPostArticle } from '@/app/components/blog/BlogPostArticle'
import { useParams } from 'next/navigation'

/**
 * Client wrapper for CMS / slots: loads post by `postId` from the URL and renders the full article.
 */
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

  if (!post) return null

  return <BlogPostArticle post={post} />
}

export default BlogSingleClient
