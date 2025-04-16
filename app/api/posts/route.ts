// app/api/posts/route.ts
import { getLatestPosts, getPost, getPostsByCategory } from '@/lib/getPost'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const latest = searchParams.get('latest')
  const postId = searchParams.get('postId')

  if (postId) {
    const Post = await getPost(postId)
    return NextResponse.json(Post)
  }
  if (latest === 'true') {
    // 🆕 Return latest posts
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const latestPosts = await getLatestPosts(page, limit)
    return NextResponse.json(latestPosts)
  }

  if (
    !category ||
    (category !== 'news' &&
      category !== 'ecommerce' &&
      category !== 'insight' &&
      category !== 'business' &&
      category !== 'technology')
  ) {
    return NextResponse.json({ error: 'Invalid category' }, { status: 400 })
  }

  const posts = await getPostsByCategory(category as 'news' | 'insight' | 'ecommerce' | 'business' | 'technology')
  return NextResponse.json(posts)
}
