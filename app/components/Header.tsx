'use client'

import { useState } from 'react'
import DesktopMenu, { DesktopMenuItemType } from './DesktopMenu'
import MobileMenuItem, { MobileMenuItemType } from './MobileMenuItem'
import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

const desktopMenuItems: Array<DesktopMenuItemType> = [
  {
    name: 'Products',
    hasSubMenu: true,
    className: 'grid grid-cols-[450px_500px] grid-rows-[auto_auto]',
    subMenu: [
      {
        menuType: 'TextListSubMenuType',
        data: {
          src: '/images/header/BILDIT_Header_CMS_Icon.png',
          alt: 'BILDIT_Header_CMS_Icon.png',
          href: '#',
          title: 'Content Management System',
          children: [
            'Easy to Use for Marketers and IT',
            'Beautiful and Sophisticated Content Creation',
            'Perfect for Modern Frontends: PWA, Desktop, Mobile',
            'Schedule and Preview Content in Realtime'
          ],
          className: ' '
        }
      },
      {
        menuType: 'ImageTypeSubMenuType',
        data: {
          thumbnailImage: {
            src: '/images/header/BILDIT_Header_Partners_Find_More.png',
            alt: 'BILDIT_Header_Partners_Find_More.png',
            href: '#',
            title: 'BILDIT COMMERCE SUITE',
            content: 'The unified web and app CMS and Storefront for eCommerce.',
            tip: 'Find out more'
          },
          className: 'row-span-2'
        }
      },
      {
        menuType: 'TextListSubMenuType',
        data: {
          src: '/images/header/BILDIT_Header_StoreFront_Icon.png',
          alt: 'BILDIT_Header_StoreFront_Icon.png',
          href: '#',
          title: 'BILDIT Storefront',
          children: [
            'Optimized UI/UX Built In',
            'One Click Checkout Built In',
            'Fast and Modern Storefront',
            'Built for Responsive and PWA',
            'Built with React for Developers'
          ],
          className: ' '
        }
      }
    ]
  },
  {
    name: 'Partners',
    hasSubMenu: true,
    className: 'grid grid-cols-2 lg:w-[87vw] xl:w-[80vw] 2xl:w-[60vw]',
    subMenu: [
      {
        menuType: 'TextListSubMenuType',
        data: {
          src: '/images/header/BILDIT_Header_Technical_Partner_Icon.png',
          alt: 'BILDIT_Header_Technical_Partner_Icon.png',
          href: '#',
          title: 'Technology Partners',
          children: [
            'Mobile & eCommerce End to End Sales Partner',
            'Implement our CMS for your Customers',
            'Additional Revenue Stream',
            'Build App Solutions for your Customers'
          ],
          className: ' '
        }
      },
      {
        menuType: 'TextListSubMenuType',
        data: {
          src: '/images/header/BILDIT_Header_Platform_Partner_Icon.png',
          alt: 'BILDIT_Header_Platform_Partner_Icon.png',
          href: '#',
          title: 'Platform Partners',
          children: [
            'Salesforce B2B',
            'Salesforce B2C ',
            'Adobe Commerce',
            'Shopify Plus',
            'SAP Hybris',
            'commercetools',
            'BigCommerce'
          ],
          className: 'grid-cols-2'
        }
      },
      {
        menuType: 'ImageTypeSubMenuType',
        data: {
          thumbnailImage: {
            href: '#',
            content: 'Become our partners to solve eCommerce problems',
            tip: 'Become a Partner'
          },
          className: ' '
        }
      },
      {
        menuType: 'ImageTypeSubMenuType',
        data: {
          thumbnailImage: {
            href: '#',
            content: 'Our platform partners are the best in class.',
            tip: 'We are Platform Agnostic'
          },
          className: ' '
        }
      }
    ]
  },
  {
    name: 'Resources',
    hasSubMenu: true,
    className: ' ',
    subMenu: [
      {
        menuType: 'ImageTypeSubMenuType',
        data: {
          thumbnailImage: {
            src: '/images/header/BILDIT_Header_Partners_Find_More.png',
            alt: 'BILDIT_Header_Partners_Find_More.png',
            href: '#',
            title: 'BILDIT COMMERCE SUITE',
            content: 'The unified web and app CMS and Storefront for eCommerce.',
            tip: 'Find out more'
          },
          listImage: [
            {
              src: '/images/header/BILDIT_Header_Blog_Icon.png',
              alt: 'BILDIT_Header_Blog_Icon.png',
              title: 'Blog'
            },
            {
              src: '/images/header/BILDIT_Header_Webinars_Icon.png',
              alt: 'BILDIT_Header_Webinars_Icon.png',
              title: 'Webinars'
            },
            {
              src: '/images/header/BILDIT_Header_Webinars_Icon.png',
              alt: 'BILDIT_Header_Webinars_Icon.png',
              title: 'Webinars'
            },
            {
              src: '/images/header/BILDIT_Header_Documentation_Icon.png',
              alt: 'BILDIT_Header_Documentation_Icon.png',
              title: 'Documentation'
            },
            {
              src: '/images/header/BILDIT_Header_For_IT_Icon.png',
              alt: 'BILDIT_Header_For_IT_Icon.png',
              title: 'For IT'
            },
            {
              src: '/images/header/BILDIT_Header_For_Brands_Icon.png',
              alt: 'BILDIT_Header_For_Brands_Icon.png',
              title: 'For Brands'
            },
            {
              src: '/images/header/BILDIT_Header_For_Technology_Partners_Icon.png',
              alt: 'BILDIT_Header_For_Technology_Partners_Icon.png',
              title: 'For Technology Partners'
            }
          ],
          className: 'row-span-2'
        }
      }
    ]
  },
  {
    name: 'Pricing',
    href: '/pricing',
    hasSubMenu: false
  },
  {
    name: 'Our Story',
    href: '/our_story',
    hasSubMenu: false
  }
]

const mobileMenuItems: Array<MobileMenuItemType> = [
  {
    name: 'Products',
    subMenu: [
      {
        src: '/images/header/BILDIT_Header_CMS_Icon.png',
        alt: 'BILDIT_Header_CMS_Icon.png',
        name: 'Content Management System',
        href: '#'
      },
      {
        src: '/images/header/BILDIT_Header_StoreFront_Icon.png',
        alt: 'BILDIT_Header_StoreFront_Icon.png',
        name: 'BILDIT Storefront',
        href: '#'
      }
    ]
  },
  {
    name: 'Partners',
    subMenu: [
      {
        src: '/images/header/BILDIT_Header_For_Technology_Partners_Icon.png',
        alt: 'BILDIT_Header_For_Technology_Partners_Icon.png',
        name: 'Technology Partners',
        href: '#'
      },
      {
        src: '/images/header/BILDIT_Header_Platform_Partner_Icon.png',
        alt: 'BILDIT_Header_Platform_Partner_Icon.png',
        name: 'Platform Partners',
        href: '#'
      }
    ]
  },
  {
    name: 'Pricing',
    href: '#'
  },
  {
    name: 'Resources',
    subMenu: [
      {
        src: '/images/header/BILDIT_Header_Blog_Icon.png',
        alt: 'BILDIT_Header_Blog_Icon.png',
        name: 'Blog',
        href: '#'
      },
      {
        src: '/images/header/BILDIT_Header_Webinars_Icon.png',
        alt: '',
        name: 'Webinars',
        href: '#'
      },
      {
        src: '/images/header/BILDIT_Header_Documentation_Icon.png',
        alt: 'BILDIT_Header_Documentation_Icon.png',
        name: 'Documentation',
        href: '#'
      },
      {
        src: '/images/header/BILDIT_Header_For_IT_Icon.png',
        alt: 'BILDIT_Header_For_IT_Icon.png',
        name: 'For IT',
        href: '#'
      },
      {
        src: '/images/header/BILDIT_Header_For_Brands_Icon.png',
        alt: 'BILDIT_Header_For_Brands_Icon.png',
        name: 'For Brands',
        href: '#'
      },
      {
        src: '/images/header/BILDIT_Header_For_Technology_Partners_Icon.png',
        alt: 'BILDIT_Header_For_Technology_Partners_Icon.png',
        name: 'For Technology Partners',
        href: '#'
      }
    ]
  },
  {
    name: 'Our Story',
    href: '#'
  },
  {
    name: 'Contact Sales',
    href: '#'
  },
  {
    name: 'Start Free Trial',
    href: '#'
  }
]
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  return (
    <header
      className={cn(
        'absolute w-full left-0 top-0 flex z-10',
        menuOpen ? 'bg-white lg:bg-transparent' : 'bg-transparent'
      )}
    >
      <div className="flex w-full justify-between items-center py-5 lg:py-10 px-2 xl:p-10">
        <div className="flex">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold flex items-center">
            <Image alt="BILDIT Logo" src="/images/others/BILDIT_Logo.svg" width={134} height={30} />
          </Link>
          {/* Desktop Navigation */}
          <nav className="lg:pl-6 xl:pl-12 hidden lg:flex items-center space-x-6 text-gray-700">
            {desktopMenuItems.map((item, key) => (
              <DesktopMenu item={item} key={key} />
            ))}
          </nav>
        </div>
        <div className="hidden lg:flex space-x-4 items-center">
          <div>
            <button className="transition-all duration-500 border-[2px] border-gray-200 px-4 py-2 xl:px-7 xl:py-2 rounded-full text-white bg-neutral-900 cursor-pointer shadow-[0_0_0_1px_#171717] hover:bg-gray-200 hover:text-black hover:text-neutral-900">
              Contact Sales
            </button>
          </div>
          <div>
            <button className="transition-all duration-500 border-[2px] border-gray-500 px-4 py-2 xl:px-7 xl:py-2 rounded-full text-black bg-white cursor-pointer hover:bg-neutral-900 hover:text-white">
              Start Free Trial
            </button>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden text-black" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="lg:hidden bg-white shadow-md absolute top-17 left-0 w-full px-3 py-5">
          {mobileMenuItems.map((item, key) => {
            return (
              <div className="py-3 border-b border-b-gray-200" key={key}>
                <MobileMenuItem item={item} />
              </div>
            )
          })}
        </nav>
      )}
    </header>
  )
}

export default Header
