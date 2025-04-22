import BlogSingleClient from '@/app/components/BlogSingleClient'
import LatestPost from '@/app/components/LatestPost'
import { getLatestPosts } from '@/lib/getPost'
import Image from 'next/image'

export default async function Blog() {
  const initialItems = await getLatestPosts(1, 3) // Page 1
  return (
    <div className="container mx-auto px-4 pt-20 lg:pt-40">
      <Image
        src="/images/blog_single/BILDIT_Blog_Single_BG.png"
        alt="BILDIT_Blog_Single_BG.png"
        width={1200}
        height={1200}
        className="w-full h-auto absolute left-0 top-0 -z-1"
      />
      <BlogSingleClient />
      <div className="mt-10 lg:mt-25">
        <LatestPost initialItems={initialItems} loadMore={false} />
      </div>
    </div>
  )
}
