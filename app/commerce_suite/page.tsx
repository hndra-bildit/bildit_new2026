import { SlotPlaceholder } from '@bildit-platform/nextjs'
import Image from 'next/image'

export default function CommerceSuite() {
  return (
    <div className="text-center lg:text-left">
      <SlotPlaceholder slotId="commerce-suite-title" />
      <section className="relative">
        <Image
          src="/images/others/BILDIT_Dot_Right_Middle_Effect_BG.png"
          className="hidden lg:block absolute top-0 right-0 -z-1 w-auto h-auto"
          alt="BILDIT_Dot_Right_Middle_Effect_BG.png"
          width={1200}
          height={0}
        />
        <Image
          src="/images/others/BILDIT_Dot_Left_Middle_Effect_BG.png"
          className="hidden lg:block absolute bottom-0 left-0 -z-1 w-auto h-auto"
          alt="BILDIT_Dot_Left_Middle_Effect_BG.png"
          width={1200}
          height={0}
        />
        <SlotPlaceholder slotId="commerce-suite-content" />
      </section>
    </div>
  )
}
