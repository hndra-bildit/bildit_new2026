import BlogClient from '../../components/BlogClient'
import HeadingOne from '../../components/HeadingOne'
import LatestPost from '../../components/LatestPost'
import SubTitleFiveCaps from '../../components/SubTitleFiveCaps'
import SubTitleThree from '../../components/SubTitleThree'
import { getLatestPosts } from '@/lib/getPost'
import Image from 'next/image'

export default async function Blogs() {
  const initialItems = await getLatestPosts(1, 3) // Page 1
  return (
    <div className="pt-[160px] px-4">
      <Image
        src="/images/blog_main/BILDIT_Blog_Main_BG.png"
        alt="BILDIT_Blog_Main_BG.png"
        width={0}
        height={0}
        className="w-full h-auto absolute top-0 left-0 -z-1"
      />
      <SubTitleFiveCaps content="The Blog" className="text-center" />
      <HeadingOne
        sub1="Writing from Our"
        sub2="Team"
        className1="text-cms-black-one text-center xl:!text-[124px]"
        className2="bg-gradient-to-r from-cms-rose to-cms-purple bg-clip-text text-transparent"
      />
      <SubTitleThree
        content="The latest industry news, e-commerce, technologies, and businesses"
        className="text-center mt-8"
      />
      <BlogClient />
      <section className="container mx-auto mt-8 lg:mt-[100px]">
        <LatestPost initialItems={initialItems} loadMore={true} />
      </section>
    </div>
  )
}
