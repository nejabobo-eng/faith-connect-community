export default function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <section className="soft-grid bg-navy-950 py-16 text-white sm:py-24"><div className="page-shell"><p className="eyebrow text-gold-400">{eyebrow}</p><h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-tight sm:text-6xl">{title}</h1><div className="mt-5 max-w-2xl text-lg leading-8 text-white/70">{children}</div></div></section>
}
