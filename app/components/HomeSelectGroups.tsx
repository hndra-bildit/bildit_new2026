'use client'

import { useState } from 'react'
import BodyTwo from './BodyTwo'
import HeadingTwo from './HeadingTwo'
import PrimaryButton from './PrimaryButton'
import SubTitleFiveCaps from './SubTitleFiveCaps'
import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

const GroupItems: Array<{ name: string; active_url: string; unactive_url: string }> = [
  { name: 'Build', active_url: '/images/home/blush-brush-02.svg', unactive_url: 'images/home/blush-brush-02-2.svg' },
  { name: 'Launch', active_url: 'images/home/rocket-01.svg', unactive_url: 'images/home/rocket-01-2.svg' },
  {
    name: 'Control',
    active_url: 'images/home/configuration-02.svg',
    unactive_url: 'images/home/configuration-02-2.svg'
  }
]

const GroupContents: Array<{
  name: string
  src: string
  alt: string
  title: string
  heading: string
  content: string
  label: string
  link: string
}> = [
  {
    name: 'Build',
    src: '/images/home/BILDIT_Home_Build_Intro.png',
    alt: 'BILDIT_Home_Build_Intro.png',
    title: 'Easy cross-channel content management',
    heading: 'Build and manage content for web and mobile. In a single CMS.',
    content:
      'Create, edit and store your content. Automatically update and archive campaigns. Simplify your review process.',
    label: 'Explore Admin Features',
    link: '#'
  },
  {
    name: 'Launch',
    src: '/images/home/BILDIT_Home_Launch_Intro.png',
    alt: 'BILDIT_Home_launch_Intro.png',
    title: 'Complete control over cross-channel campaigns',
    heading: 'Launch the way you want. Without going through developers.',
    content: 'Build, schedule, launch and update revenue-driving campaigns across multiple channels.',
    label: 'Explore Campaign Builder',
    link: '#'
  },
  {
    name: 'Control',
    src: '/images/home/BILDIT_Home_Control_Intro.png',
    alt: 'BILDIT_Home_Control_Intro.png',
    title: 'Advanced mobile app capabilities',
    heading: 'Take control of your app and boost conversions with personalization.',
    content:
      'Build out advanced content types, from videos to filtered product displays. Deliver right content to right users at the right time with personalization and advanced targeting.',
    label: 'Explore BILDIT CMS',
    link: '#'
  }
]

const HomeSelectGroups: React.FC = () => {
  const [type, setType] = useState('Build')
  const handleChange = (val: string) => {
    setType(val)
  }
  const GroupContent = GroupContents.filter((item) => item.name === type).map((item, key) => (
    <div className="container mx-auto lg:grid grid-cols-[35%_auto] gap-10 items-center py-10 lg:py-25" key={key}>
      <div className="order-2">
        <SubTitleFiveCaps content={item.title} className="text-center lg:text-left" />
        <HeadingTwo content={item.heading} className="text-center lg:text-left mt-4" />
        <BodyTwo content={item.content} className="text-center lg:text-left mt-8" />
        <Link href={item.link} className="flex justify-center lg:block">
          <PrimaryButton content={item.label} className="mt-8" />
        </Link>
      </div>
      <div className="order-1 mt-10 lg:mt-0">
        <Image src={item.src} alt={item.alt} width={715} height={0} className="w-full h-auto" />
      </div>
    </div>
  ))
  return (
    <>
      <div>
        <div className="flex space-x-5 justify-center">
          {GroupItems.map((item, key) => {
            return (
              <button
                key={key}
                onClick={() => handleChange(item.name)}
                className={cn(
                  'font-gt-walsheim hover:bg-neutral-900 hover:text-white transition duration-500 lg:text-2xl w-35 lg:w-40 p-3 flex-wrap items-center justify-center rounded-full cursor-pointer',
                  item.name === type ? 'bg-neutral-900 text-white' : 'bg-gray-100 text-neutral-700'
                )}
              >
                <div className="text-center flex lg:block justify-center items-center">
                  <Image
                    src={`${type === item.name ? item.active_url : item.unactive_url}`}
                    alt={item.active_url}
                    width={34}
                    height={34}
                    className="inline-block"
                  />
                  <p className="text-xl lg:text-2xl font-normal">{item.name}</p>
                </div>
              </button>
            )
          })}
        </div>
        <div>{GroupContent}</div>
      </div>
    </>
  )
}

export default HomeSelectGroups
