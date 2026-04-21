import { redirect } from 'next/navigation'

/** Legacy path; canonical program page is `/early-access-program/`. */
export default function EarlyAccessRedirectPage() {
  redirect('/early-access-program/')
}
