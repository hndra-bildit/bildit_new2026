import React, {useState} from 'react';
import Link from 'next/link'
import Image from 'next/image'

const GroupItems = [
  { name: 'Build', active_url: '/images/home/blush-brush-02.svg', unactive_url: 'images/home/blush-brush-02-2.svg' },
  { name: 'Launch', active_url: '/images/home/rocket-01.svg', unactive_url: '/images/home/rocket-01-2.svg' },
  {
    name: 'Control',
    active_url: '/images/home/configuration-02.svg',
    unactive_url: '/images/home/configuration-02-2.svg'
  }
]
const GroupContents = [
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


export default function HomeContentCmsOverviewSecond(){
  const [type, setType] = useState('Build');
  const handleChange = (val) => {
    setType(val)
  }
  const GroupContent = GroupContents.filter((item) => item.name === type).map((item, key) => (
    <div className="container mx-auto lg:grid grid-cols-[35%_auto] gap-10 items-center py-10 lg:py-25" key={key}>
      <div className="order-2">
        <p className="text-cms-rose text-xl font-medium font-gt-walsheim leading-none uppercase text-center lg:text-left">{item.title}</p>
        <h2 className='text-4xl md:text-5xl lg:text-7xl  text-neutral-900 mt-3 font-gt-walsheim leading-none font-extrabold text-center lg:text-left mt-4'>{item.heading}</h2>
        <p className="text-lg leading-none lg:text-xl lg:leading-normal font-normal text-zinc-600 text-center lg:text-left mt-8"> {item.content}</p>
        <Link href={item.link} className="flex justify-center lg:block">
          <div className='transition-all duration-500 border-2 border-gray-200 px-4 py-2 xl:px-7 xl:py-2 rounded-full text-white bg-neutral-900 cursor-pointer hover:bg-gray-200 hover:text-black hover:text-neutral-900 text-base outline-2 outline-neutral-900 mt-8 inline-block'>
            {item.label}
          </div>
        </Link>
      </div>
      <div className="order-1 mt-10 lg:mt-0">
        <Image src={item.src} alt={item.alt} width={1200} height={1200} className="w-full h-auto" />
      </div>
    </div>
  ));
  
  return (
    <section className="py-10 lg:py-25 relative px-4">
      <Image
        src="/images/others/BILDIT_Dot_Line_Effect_BG.png"
        alt="BILDIT_Dot_Line_Effect_BG.png"
        className="top-0 left-0 absolute -z-1 w-auto h-auto hidden lg:block"
        width={1200}
        height={1200}
      />
      <Image
        src="/images/home/BILDIT_Home_Mobile_BG.png"
        alt="BILDIT_Home_Mobile_BG.png"
        className="lg:hidden top-0 left-0 -z-1 absolute w-full h-auto"
        width={1200}
        height={1200}
      />
      <div>
        <div className="flex space-x-5 justify-center">
          {GroupItems.map((item, key) => {
            return (
              <button
                key={key}
                onClick={() => handleChange(item.name)}
                className={`font-gt-walsheim hover:bg-neutral-900 hover:text-white transition duration-500 lg:text-2xl w-35 lg:w-40 p-3 flex-wrap items-center justify-center rounded-full cursor-pointer ${item.name === type ? 'bg-neutral-900 text-white' : 'bg-gray-100 text-neutral-700'}`}>
                <div className="text-center flex lg:block justify-center items-center">
                  <Image
                    src={`${type === item.name ? item.active_url : item.unactive_url}`}
                    alt={item.active_url}
                    className="inline-block w-8 h-8"
                    width={32}
                    height={32}
                  />
                  <p className="text-xl lg:text-2xl font-normal">{item.name}</p>
                </div>
              </button>
            )
          })}
        </div>
        <div>{GroupContent}</div>
      </div>
    </section>
  )
}