import { useState } from 'react';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const linkgroup1 = [
  { name: 'About Us', href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'Meet the Team', href: '#' },
  { name: 'Blog', href: '/bog/category' },
  { name: 'Careers', href: '#' },
  { name: 'Partners', href: '#' },
  { name: 'ROI Calculator', href: '#' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Case Study', href: '#' }
]
const linkgroup2 = [
  { name: 'Reference App', href: '#' },
  { name: 'Native Checkout', href: '#' },
  { name: 'App Clip SDK', href: '#' },
  { name: 'CMS', href: '/bildit_cms' },
  { name: 'Mobile Checkout Index', href: '#' },
  { name: 'Integrations', href: '#' },
  { name: 'React Native SDKs', href: '#' },
  { name: 'Demo', href: '#' },
  { name: 'KPIs and Metrics', href: '#' }
]

const linkgroup3 = [
  { name: 'How It Works', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Documentation', href: '#' },
  { name: 'Developers', href: '#' },
  { name: 'Webinars', href: '#' },
  { name: 'For IT', href: '#' },
  { name: 'For Agencies', href: '#' },
  { name: 'For Brands', href: '#' },
  { name: 'Resources', href: '#' }
]

const linkgroup4 = [
  { name: 'Enterprise License', href: '/enterprise-license/' },
  { name: 'Privacy Policy', href: '/privacy-policy/' }
]

const title = $(title:String="")
const content = $(content:String="")
const buttonTitle = $(buttonTitle:String="")
const companyEmail = $(companyEmail:String="")
const companyPhoneNumber = $(companyPhoneNumber:String="")
const companyAddress = $(companyAddress:String="")
const companyLinkedinLink = $(companyLinkedinLink:String="")
const companyFacebookLink = $(companyFacebookLink:String="")
const companyTwitterLink = $(companyTwitterLink:String="")
const companyInstagramLink = $(companyInstagramLink:String="")
const publishDate= $(publishDate:String="")

export default function FooterContent(){
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    
  };
  return (
    <section className="relative">
      <Image
        src="/images/footer/bildit-footer-shade-blurr-subscribe-bg.png"
        className="hidden lg:block top-0 right-0 -z-1 absolute w-auto h-auto"
        alt="bildit-footer-shade-blurr-subscribe-bg.png"
        width={1200}
        height={1200}
      />
      <div className="overflow-hidden relative px-4 lg:px-0">
        <Image
          src="/images/footer/bildit-footer-background-mobile-bg.png"
          className="block lg:hidden top-0 left-0 -z-1 absolute w-full h-full"
          alt="bildit-footer-background-mobile-bg.png"
          width={1200}
          height={1200}
        />
        <div className="container mx-auto pt-15">
          <h3 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 leading-none font-gt-walsheim mb-0 text-center'>
            {title}
          </h3>
          <p className='text-zinc-600 text-base lg:text-2xl leading-normal my-12 text-center'>{content}</p>
          <form onSubmit={handleSubmit} className="lg:flex justify-center items-center">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white lg:w-3xs lg:w-lg px-5 py-2 border border-gray-600 rounded-sm focus:outline-none focus:border-blue-500 text-lg"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="lg:pl-5 mt-5 lg:mt-0">
              <button className='transition-all duration-500 border-2 border-gray-200 px-4 py-2 xl:px-7 xl:py-2 rounded-full text-white bg-neutral-900 cursor-pointer hover:bg-gray-200 hover:text-black hover:text-neutral-900 text-base outline-2 outline-neutral-900 w-full'>
                {buttonTitle}
              </button>
            </div>
          </form>
          <hr className="my-5 lg:my-12 border-gray-300" />
        </div>
      </div>
      <div className="px-4 lg:px-0 relative">
        <div className="hidden lg:block">
          <Image
            src="/images/footer/bildit-footer-rectangle-bg.png"
            className="top-0 left-0 -z-3 absolute w-full h-full"
            alt="bildit-footer-rectangle-bg.png"
            width={1200}
            height={1200}
          />
          <Image
            src="/images/footer/bildit-footer-shade-blurr-subscribe-circle.png"
            className="bottom-0 left-0 -z-2 absolute w-auto h-auto"
            alt="bildit-footer-shade-blurr-subscribe-circle.png"
            width={1200}
            height={1200}
          />
          <Image
            src="/images/footer/bildit-footer-subscribe-lines-bg.png"
            className="bottom-40 right-0 -z-1 absolute w-auto h-auto"
            alt="bildit-footer-subscribe-lines-bg.png"
            width={1200}
            height={1200}
          />
        </div>
        <div className="block lg:hidden">
          <Image
            src="/images/footer/bildit-footer-rectangle-bg.png"
            className="top-0 left-0 -z-3 absolute w-full h-full"
            alt="bildit-footer-rectangle-bg.png"
            width={1200}
            height={1200}
          />
          <Image
            src="/images/footer/bildit-footer-background-mobile-bg.png"
            className="top-0 left-0 -z-3 absolute w-full h-1/2"
            alt="bildit-footer-background-mobile-bg.png"
            width={1200}
            height={1200}
          />
          <Image
            src="/images/footer/bildit-footer-background-mobile-bg.png"
            className="bottom-0 left-0 -z-3 absolute w-full h-1/2"
            alt="bildit-footer-background-mobile-bg.png"
            width={1200}
            height={1200}
          />
        </div>
        <div className="container mx-auto lg:py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm lg:text-lg text-zinc-600 text-center lg:text-left">
          {/* Logo & Contact */}
          <div className="text-center">
            <div className="pt-4 lg:pt-0">
              <Image
                src="/images/others/bildit-logo.svg"
                className="inline-block"
                alt="BILDIT Logo"
                width={127}
                height={37}
              />
            </div>
            <div className="space-y-0 lg:space-y-5">
              <div className="mt-4 mt-10">
                <Image
                  className="inline-block"
                  src="/images/footer/markunread-mailbox.svg"
                  alt="markunread-mailbox.svg"
                  width={21}
                  height={21}
                />
                <span className="ml-4">{companyEmail}</span>
              </div>
              <div className="mt-4 mt-5">
                <Image
                  className="inline-block"
                  src="/images/footer/call.svg"
                  alt="phone icon"
                  width={21}
                  height={21}
                />
                <span className="ml-4">{companyPhoneNumber}</span>
              </div>
              <p className="font-normal leading-normal tracking-none">{companyAddress}</p>
            </div>

            <div className="space-x-6 pt-10">
              <Link href={companyLinkedinLink}>
                <Image className="inline-block" src="/images/footer/akar-icons-linkedin-box-fill.svg" alt="LinkedIn" width={24} height={24} />
              </Link>
              <Link href={companyFacebookLink}>
                <Image className="inline-block" src="/images/footer/fa-brands-facebook-square.svg" alt="FaceBook" width={24} height={24} />
              </Link>
              <Link href={companyTwitterLink}>
                <Image className="inline-block" src="/images/footer/fe-twitter.svg" alt="Twitter" width={24} height={24} />
              </Link>
              <Link href={companyInstagramLink}>
                <Image className="inline-block" src="/images/footer/fe-instagram.svg" alt="Instagram" width={24} height={24} />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <ul className="space-y-1 lg:space-y-7">
              {linkgroup1.map((item, key) => {
                return (
                  <Link href={item.href} className="block hover:underline" key={key}>
                    {item.name}
                  </Link>
                )
              })}
            </ul>
          </div>
          <div>
            <ul className="space-y-1 lg:space-y-7">
              {linkgroup2.map((item, key) => {
                return (
                  <Link href={item.href} className="block hover:underline" key={key}>
                    {item.name}
                  </Link>
                )
              })}
            </ul>
          </div>

          <div>
            <ul className="space-y-1 lg:space-y-7">
              {linkgroup3.map((item, key) => {
                return (
                  <Link href={item.href} className="block hover:underline" key={key}>
                    {item.name}
                  </Link>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="container mx-auto md:flex justify-between text-center text-xs lg-text-base text-gray-500 py-7">
          <p>{publishDate}</p>
          <div className="flex justify-center gap-4 mt-2">
            {linkgroup4.map((item, key) => {
              return (
                <Link href={item.href} className="hover:underline" key={key}>
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
  
}