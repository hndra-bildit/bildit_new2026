'use client'

import { useState } from 'react'
import DesktopMenu, { DesktopMenuItemType } from './DesktopMenu'
import Image from 'next/image'
import Link from 'next/link'
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi'

const PageGroups: Array<DesktopMenuItemType> = [
  {
    name: 'Products',
    hasSubMenu: true,
    className: 'grid grid-cols-2 grid-rows-2',
    sub_menu: [
      {
        menu_type: 'TextListSubMenuType',
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
        menu_type: 'ImageTypeSubMenuType',
        data: {
          src: '/images/header/BILDIT_Header_Partners_Find_More.png',
          alt: 'BILDIT_Header_Partners_Find_More.png',
          href: '#',
          title: 'BILDIT COMMERCE SUITE',
          content: 'The unified web and app CMS and Storefront for eCommerce.',
          tip: 'Find out more',
          className: 'row-span-2'
        }
      },
      {
        menu_type: 'TextListSubMenuType',
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
    className: 'grid grid-cols-2',
    sub_menu: [
      {
        menu_type: 'TextListSubMenuType',
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
        menu_type: 'TextListSubMenuType',
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
        menu_type: 'ImageTypeSubMenuType',
        data: {
          href: '#',
          content: 'Become our partners to solve eCommerce problems',
          tip: 'Become a Partner',
          className: ' '
        }
      },
      {
        menu_type: 'ImageTypeSubMenuType',
        data: {
          href: '#',
          content: 'Our platform partners are the best in class.',
          tip: 'We are Platform Agnostic',
          className: ' '
        }
      }
    ]
  },
  {
    name: 'Resources',
    hasSubMenu: true,
    className: '',
    sub_menu: [
      {
        menu_type: 'ImageTypeSubMenuType',
        data: {
          src: '/images/header/BILDIT_Header_Partners_Find_More.png',
          alt: 'BILDIT_Header_Partners_Find_More.png',
          href: '#',
          title: 'BILDIT COMMERCE SUITE',
          content: 'The unified web and app CMS and Storefront for eCommerce.',
          tip: 'Find out more',
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

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  return (
    <header className="absolute w-full left-0 top-0 flex bg-transparent">
      <div className="flex w-full justify-between items-center py-10 px-2 xl:p-10">
        <div className="flex">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <Image alt="BILDIT Logo" src="/images/others/BILDIT_Logo.svg" width={134} height={30} />
          </Link>
          {/* Desktop Navigation */}
          <nav className="lg:pl-6 xl:pl-12 hidden lg:flex items-center space-x-6 text-gray-700">
            {PageGroups.map((item, key) => (
              <DesktopMenu item={item} key={key} />
            ))}
          </nav>

          {/* Desktop Buttons */}
        </div>
        <div className="hidden lg:flex space-x-4 items-center">
          <div>
            <button className="transition-all duration-500 border-[2px] border-gray-200 px-4 py-2 xl:px-7 xl:py-2 rounded-full text-white bg-cms-black-one cursor-pointer shadow-[0_0_0_1px_#171717] hover:bg-gray-200 hover:text-black hover:text-cms-black-one">
              Contact Sales
            </button>
          </div>
          <div>
            <button className="transition-all duration-500 border-[2px] border-gray-500 px-4 py-2 xl:px-7 xl:py-2 rounded-full text-black bg-white cursor-pointer hover:bg-cms-black-one hover:text-white">
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
        <nav className="lg:hidden bg-white shadow-md absolute top-22 left-0 w-full px-2 py-5 space-y-4 text-gray-700">
          {['Products', 'Partners', 'Resources', 'Pricing', 'Our Story'].map((item) => (
            <div key={item} className="border-b-1 border-black">
              <button
                className="flex items-center w-full hover:text-black cursor-pointer"
                onClick={() => setDropdownOpen(dropdownOpen === item ? null : item)}
              >
                {item} {['Products', 'Partners', 'Resources'].includes(item) && <FiChevronDown className="ml-1" />}
              </button>
              {dropdownOpen === item && ['Products', 'Partners', 'Resources'].includes(item) && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Option 1
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Option 2
                  </Link>
                </div>
              )}
            </div>
          ))}

          {/* Mobile Buttons */}
          <div className="flex  space-y-3 justify-center">
            <div className="px-1">
              <button className="border border-black px-7 py-1 rounded-full text-black hover:bg-gray-200 cursor-pointer">
                Contact Sales
              </button>
            </div>
            <div className="px-1">
              <button className="border border-black px-7 py-1 rounded-full text-black bg-white hover:bg-gray-100 cursor-pointer">
                Start Free Trial
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
