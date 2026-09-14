'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  ['About', '/about'], ['Ministries', '/ministries'], ['Initiatives', '/initiatives'],
  ['Leadership', '/leadership'], ['Contact', '/contact'],
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/95 text-white shadow-lg backdrop-blur">
      <div className="page-shell flex h-20 items-center justify-between gap-5">
        <Link href="/" className="flex min-w-0 items-center gap-3 no-underline" aria-label="Faith Connect Community home" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="" className="h-12 w-12 rounded-full object-cover" />
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-bold tracking-wide">Faith Connect</span>
            <span className="block text-[.62rem] font-bold uppercase tracking-[.28em] text-gold-400">Community</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} className={`rounded-full px-3 py-2 text-sm font-semibold no-underline transition hover:bg-white/10 ${pathname === href ? 'text-gold-400' : 'text-white/85'}`}>{label}</Link>
          ))}
          <Link href="/donate" className="ml-2 rounded-full bg-gold-400 px-5 py-2.5 text-sm font-extrabold text-navy-950 no-underline transition hover:bg-white">Donate</Link>
        </nav>
        <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 lg:hidden" aria-label={`${open ? 'Close' : 'Open'} menu`} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span aria-hidden className="text-2xl leading-none">{open ? '×' : '☰'}</span>
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 px-5 pb-5 pt-3 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-6xl gap-1">
            {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 font-semibold text-white no-underline hover:bg-white/10">{label}</Link>)}
            <Link href="/donate" onClick={() => setOpen(false)} className="mt-2 rounded-lg bg-gold-400 px-4 py-3 text-center font-extrabold text-navy-950 no-underline">Donate securely</Link>
          </div>
        </nav>
      )}
    </header>
  )
}
