const imageURL = $(image:String="")
const imageAlt = $(imageAlt:String="")
const leftTopContent = $(leftTopContent:String="")
const rightTopContent = $(rightTopContent:String="")
const leftBottomContent = $(leftBottomContent:String="")
const rightBottomContent = $(rightBottomContent:String="")
const title = $(title:String="")

  
export default function CommerceSuiteContent(){
  return (
    <section className="mt-12 lg:mt-25 py-12 lg:py-25 bg-center px-4 lg:px-0 relative">
      <img
        src="/images/commerce_suite/BILDIT_Commerce_Suite_Why_BG.png"
        className="hidden lg:block absolute top-0 left-0 -z-1 w-full h-full"
        alt="BILDIT_Commerce_Suite_Why_BG.png"
      />
      <img
        src="/images/commerce_suite/BILDIT_Commerce_Suite_Why_Bildit_Mobile_BG.png"
        className="block lg:hidden absolute top-0 left-0 -z-1 w-full h-full"
        alt="BILDIT_Commerce_Suite_Why_Bildit_Mobile_BG"
      />
      <div className="container mx-auto">
        <h2 className='text-4xl md:text-5xl lg:text-7xl text-white mt-3 font-gt-walsheim leading-none font-extrabold text-center lg:pt-10'>
          {title}
        </h2>
        <div className="lg:grid grid-cols-4 justify-center">
          <div className="py-12 lg:py-25 order-2 col-span-2 flex justify-center">
            <img
              src={imageURL}
              alt={imageAlt}
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-around items-end order-1col-span-1">
            <p className="font-400 text-xl lg:text-2xl leading-none mt-10 text-white">
              {leftTopContent}
            </p>
            <p className="font-400 text-xl lg:text-2xl leading-none mt-10 text-white">{leftBottomContent}</p>
          </div>
          <div className="flex flex-col justify-around order-2 col-span-1 text-center lg:text-left">
            <p className="font-400 text-xl lg:text-2xl leading-none mt-10 text-white">{rightTopContent}</p>
            <p className="font-400 text-xl lg:text-2xl leading-none mt-10 text-white">{rightBottomContent}</p>
          </div>
        </div>
      </div>
    </section>
  )
}