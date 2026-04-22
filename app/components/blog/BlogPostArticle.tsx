'use client'

import BodyOne from '@/app/components/BodyOne'
import { CardNineItemType } from '@/app/components/CardNine'
import { cn } from '@/utils/cn'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FaXTwitter } from 'react-icons/fa6'
import { IoIosLink } from 'react-icons/io'
import { SlSocialLinkedin } from 'react-icons/sl'

export type BlogPostArticleProps = {
  post: CardNineItemType
  /** Hide the back link (e.g. when embedded in CMS chrome that has its own nav). */
  showBackLink?: boolean
  className?: string
}

export function BlogPostArticle({ post, showBackLink = true, className }: BlogPostArticleProps) {
  const categoryLabel = post.category.charAt(0).toUpperCase() + post.category.slice(1).toLowerCase()

  return (
    <div
      className={cn(
        'font-[family-name:var(--font-uncut-sans)] mx-auto max-w-[1100px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8',
        className
      )}
    >
      {showBackLink && (
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 no-underline transition-colors hover:text-neutral-900"
        >
          <ArrowLeft className="size-4 shrink-0" aria-hidden />
          Back to insights
        </Link>
      )}

      <p className="text-center text-xs font-medium uppercase tracking-[0.14em] text-[#595959] lg:text-left">
        {categoryLabel}
      </p>
      <h1 className="mt-2 text-center text-3xl font-bold leading-tight tracking-[-0.02em] text-neutral-900 sm:text-4xl lg:text-left lg:text-5xl lg:leading-[1.08]">
        {post.title}
      </h1>
      <BodyOne
        content={`By ${post.author} • ${post.createdAt} • ${post.updatedAt}`}
        className="my-3 text-center !font-[family-name:var(--font-uncut-sans)] text-sm !leading-normal !text-[#595959] sm:text-base lg:!text-base lg:text-left"
      />

      <div className="relative mt-6 overflow-hidden rounded-2xl border border-black/10 bg-[#f5f7fa] sm:rounded-3xl">
        <div className="relative aspect-[16/9] w-full sm:aspect-[2/1]">
          <Image
            src={post.src}
            alt={post.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1100px) 100vw, 1100px"
            priority
          />
        </div>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-12 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)]">
        <aside className="order-2 text-sm md:order-1 sm:text-base">
          <h6 className="hidden text-base font-medium leading-none text-[#737373] lg:block">Table of contents</h6>
          <nav className="mt-0 hidden lg:mt-3 lg:block" aria-label="Table of contents">
            {post.data.map((item, key) => (
              <p className="mt-2 first:mt-0" key={item.title}>
                <Link
                  href={`#content_${key}`}
                  className="text-[#595959] no-underline transition-colors hover:text-neutral-900"
                >
                  {item.title}
                </Link>
              </p>
            ))}
          </nav>
          <hr className="my-6 hidden border-gray-300 lg:block" />

          <div>
            <p className="mt-2 text-[#595959]">Published</p>
            <p className="mt-1 text-[#595959]">{post.createdAt}</p>
          </div>
          <hr className="my-6 hidden border-gray-300 lg:block" />

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-[#595959]">Share article</p>
            <div className="flex gap-4 text-[#595959]">
              <Link href="#" aria-label="Share on LinkedIn" className="hover:text-neutral-900">
                <SlSocialLinkedin className="size-5" />
              </Link>
              <Link href="#" aria-label="Share on X" className="hover:text-neutral-900">
                <FaXTwitter className="size-5" />
              </Link>
              <Link href="#" aria-label="Copy link" className="hover:text-neutral-900">
                <IoIosLink className="size-5" />
              </Link>
            </div>
          </div>
        </aside>

        <div className="order-1 space-y-10 md:order-2">
          {post.data.map((item, key) => (
            <section id={`content_${key}`} key={`${item.title}-${key}`}>
              <h2 className="text-2xl font-semibold leading-snug tracking-[-0.02em] text-neutral-900 sm:text-[26px]">
                {item.title}
              </h2>
              <p className="mt-3 text-base leading-6 text-[#595959] sm:text-[17px] sm:leading-7">{item.content}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
