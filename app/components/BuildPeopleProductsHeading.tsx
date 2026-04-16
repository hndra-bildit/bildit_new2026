import { cn } from '@/utils/cn'

type Props = { className?: string }

export function BuildPeopleProductsHeading({ className }: Props) {
  return (
    <p
      className={cn(
        "font-[family-name:var(--font-archivo-black)] max-w-none text-4xl uppercase tracking-tight text-transparent [-webkit-text-fill-color:transparent] sm:text-5xl md:text-6xl md:leading-[1.06] md:tracking-[-0.03em] lg:text-7xl [-webkit-background-clip:text] [background-clip:text] [background-image:url('/images/BILDIT%20Lines%20Animation.gif')] [background-position:center_center] [background-repeat:no-repeat] [background-size:cover]",
        className
      )}
    >
      build people and products
    </p>
  )
}
