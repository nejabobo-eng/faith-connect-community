import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="page-shell grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="max-w-md">
          <div className="flex items-center gap-3"><img src="/logo.png" alt="" className="h-14 w-14 rounded-full object-cover" /><p className="font-display text-xl font-bold">Faith Connect Community</p></div>
          <p className="mt-5 text-sm leading-7 text-white/65">A registered Non-Profit Company serving people through worship, discipleship, education, and community transformation.</p>
          <p className="mt-4 text-xs font-bold uppercase tracking-[.18em] text-gold-400">Connecting faith and purpose</p>
        </div>
        <div>
          <h2 className="font-bold">Explore</h2>
          <ul className="mt-4 grid gap-3 text-sm text-white/65">
            <li><Link href="/about" className="hover:text-gold-400">Our story & beliefs</Link></li>
            <li><Link href="/ministries" className="hover:text-gold-400">Ministries</Link></li>
            <li><Link href="/initiatives" className="hover:text-gold-400">Community initiatives</Link></li>
            <li><Link href="/leadership" className="hover:text-gold-400">Leadership</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold">Connect</h2>
          <ul className="mt-4 grid gap-3 text-sm text-white/65">
            <li><a href="mailto:info@faithconnect.community" className="hover:text-gold-400">info@faithconnect.community</a></li>
            <li><Link href="/contact" className="hover:text-gold-400">Contact & prayer</Link></li>
            <li><Link href="/donate" className="font-bold text-gold-400 hover:text-white">Partner with the mission</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10"><div className="page-shell flex flex-col gap-3 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Faith Connect Community NPC. All rights reserved.</p><div className="flex gap-5"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div></div>
    </footer>
  )
}
