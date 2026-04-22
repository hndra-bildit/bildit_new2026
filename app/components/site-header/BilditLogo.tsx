'use client'

import { useId } from 'react'
import { cn } from '@/utils/cn'

type BilditLogoProps = {
  className?: string
}

/**
 * Wordmark; fills use --header-logo-bild and --header-logo-it.
 */
export function BilditLogo({ className }: BilditLogoProps) {
  const uid = useId()
  const clipId = `clip_bildit_${uid.replace(/:/g, '')}`

  return (
    <svg
      className={cn('h-[30px] w-[134px] max-w-full shrink-0', className)}
      viewBox="0 0 134 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M18.5047 14.7448C22.0335 14.1019 24.3143 11.5735 24.3143 7.75936C24.3143 3.00243 20.6134 0.00256348 14.7177 0.00256348H0V30.0012H15.062C21.0007 30.0012 24.7877 26.7871 24.7877 21.7302C24.7877 17.7446 22.2056 15.1733 18.5047 14.7448ZM11.7914 5.74516C14.0291 5.74516 15.3632 6.90226 15.3632 8.8736C15.3632 10.8449 13.9861 12.0877 11.7914 12.0877H8.9511V5.74516H11.7914ZM8.9511 23.7872V17.2732H12.0496C14.2443 17.2732 15.6644 18.5589 15.6644 20.4874C15.6644 22.5016 14.2873 23.7872 12.0065 23.7872H8.9511Z"
          fill="var(--header-logo-bild)"
        />
        <path d="M37.4024 30.0012V0.00256348H28.4513V30.0012H37.4024Z" fill="var(--header-logo-bild)" />
        <path d="M61.9332 30.0012V22.3301H51.6911V0.00256348H42.74V30.0012H61.9332Z" fill="var(--header-logo-bild)" />
        <path
          d="M78.6271 30.0012C88.0946 30.0012 94.2485 23.4444 94.2485 15.0019C94.2485 6.60227 88.0516 0.00256348 78.6271 0.00256348H66.1902V30.0012H78.6271ZM75.1413 7.28795H77.8525C82.3711 7.28795 84.9531 10.8021 84.9531 15.0019C84.9531 19.2017 82.3711 22.7158 77.8525 22.7158H75.1413V7.28795Z"
          fill="var(--header-logo-bild)"
        />
        <path d="M106.576 29.9987V0H97.6245V29.9987H106.576Z" fill="var(--header-logo-it)" />
        <path
          d="M126.201 29.9987V7.67109H133.947V0H109.46V7.67109H117.206V29.9987H126.201Z"
          fill="var(--header-logo-it)"
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="133.947" height="30.0012" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
