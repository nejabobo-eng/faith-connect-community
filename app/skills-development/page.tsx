import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Skills Development',
  description: 'EntrySafe Academy is a future Faith Connect Community skills-development initiative.',
}

export default function SkillsDevelopmentPage() {
  return <main id="main-content">
    <PageHero eyebrow="Skills development" title="Practical skills for sustainable futures.">EntrySafe Academy is a coming-soon initiative designed to equip people with useful, income-building knowledge.</PageHero>
    <section className="bg-cream-50 py-20"><div className="page-shell max-w-4xl text-center"><span className="inline-flex rounded-full bg-gold-400 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-navy-950">Coming soon</span><h2 className="mt-6 font-display text-4xl font-bold text-navy-950">EntrySafe Academy</h2><p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-600">We are preparing a practical learning initiative that will help participants develop confidence, useful skills, and pathways toward sustainable livelihoods.</p><div className="mt-10 grid gap-6 text-left md:grid-cols-2"><article className="rounded-3xl bg-white p-8 ring-1 ring-slate-200"><p className="eyebrow">Future course</p><h3 className="mt-4 font-display text-2xl font-bold text-navy-950">Poultry farming</h3><p className="mt-4 leading-7 text-slate-600">Practical foundations for people who want to understand poultry production and build viable small-enterprise skills.</p></article><article className="rounded-3xl bg-white p-8 ring-1 ring-slate-200"><p className="eyebrow">Future course</p><h3 className="mt-4 font-display text-2xl font-bold text-navy-950">Accounting</h3><p className="mt-4 leading-7 text-slate-600">Accessible accounting knowledge for individuals, entrepreneurs, churches, and community organisations.</p></article></div><p className="mt-10 text-sm leading-6 text-slate-500">Course dates, entry requirements, and enrolment details will be announced here once the academy is ready.</p><Link href="/contact" className="mt-8 inline-flex rounded-full bg-navy-950 px-6 py-3 font-extrabold text-white no-underline hover:bg-navy-800">Ask about EntrySafe Academy</Link></div></section>
  </main>
}