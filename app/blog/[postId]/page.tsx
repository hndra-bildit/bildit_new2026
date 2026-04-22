import { BlogPostArticle } from '@/app/components/blog/BlogPostArticle'
import { getPostById } from '@/lib/getPost'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type PageProps = { params: Promise<{ postId: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { postId } = await params
  const post = getPostById(postId)
  if (!post) {
    return { title: 'Post not found' }
  }
  return {
    title: `${post.title} | BILDIT`,
    description: post.content.length > 160 ? `${post.content.slice(0, 157)}…` : post.content
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { postId } = await params
  const post = getPostById(postId)
  if (!post) notFound()

  return (
    <div className="min-h-screen overflow-x-clip bg-white text-neutral-900">
      <main className="w-full bg-white">
        <BlogPostArticle post={post} />
      </main>
    </div>
  )
}
