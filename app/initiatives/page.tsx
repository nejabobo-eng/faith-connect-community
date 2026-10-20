import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Initiatives',
  description: 'Faith Connect Community initiatives in feeding, education, skills development, and community care.',
}

const initiatives = [
  { title: 'Feeding Programme', body: 'Supporting children and families facing food insecurity with practical care, dignity, and hope. Kenya is one of the communities currently represented in this work.', status: 'Active initiative', href: '/feeding-programme', label: 'Explore the programme' },
  { title: 'Skills Development', body: 'EntrySafe Academy will create practical pathways in poultry farming and accounting.', status: 'Coming soon', href: '/skills-development', label: 'Learn about the academy' },
]

export default function InitiativesPage() {
  return <main id="main-content">
    <PageHero eyebrow="Community impact" title="Compassion that meets practical needs.">We pair the hope of the Gospel with practical initiatives that nourish children, develop skills, and build sustainable opportunity.</PageHero>
    <section className="bg-cream-50 py-20"><div className="page-shell grid gap-6 md:grid-cols-2">{initiatives.map((initiative, index) => <article key={initiative.title} className="rounded-3xl bg-white p-8 ring-1 ring-slate-200"><div className="flex items-center justify-between gap-4"><span className="font-display text-3xl font-bold text-gold-500">0{index + 1}</span><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{initiative.status}</span></div><h2 className="mt-8 font-display text-2xl font-bold text-navy-950">{initiative.title}</h2><p className="mt-4 leading-7 text-slate-600">{initiative.body}</p><Link href={initiative.href} className="mt-7 inline-flex rounded-full bg-navy-950 px-5 py-3 font-extrabold text-white no-underline hover:bg-navy-800">{initiative.label}</Link></article>)}</div></section>
    <section className="bg-gold-400 py-16 text-navy-950"><div className="page-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><h2 className="font-display text-3xl font-bold">Help these initiatives grow.</h2><p className="mt-2 max-w-xl">Partner through giving, prayer, professional skills, or practical service.</p></div><div className="flex flex-wrap gap-3"><Link href="/contact" className="rounded-full border border-navy-950 px-5 py-3 font-extrabold no-underline">Get involved</Link><Link href="/donate" className="rounded-full bg-navy-950 px-5 py-3 font-extrabold text-white no-underline">Donate</Link></div></div></section>
  </main>
}