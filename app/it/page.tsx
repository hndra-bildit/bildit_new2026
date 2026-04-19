import { permanentRedirect } from 'next/navigation'

/** Canonical engineering solutions experience lives under `/solutions-for-engineering/`. */
export default function BilditIT() {
  permanentRedirect('/solutions-for-engineering/')
}
