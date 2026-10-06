import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Books & Music',
  description: 'Books and music promoted by Faith Connect Community and available through Connect Network.',
}

const collections = [
  { title: 'Books', description: 'Written works that encourage faith, purpose, and positive change.', href: '/books', label: 'Explore books' },
  { title: 'Music', description: 'Songs and productions created for worship, encouragement, and everyday hope.', href: '/music', label: 'Explore music' },
]

export default function BooksMusicPage() {
  return <main id="main-content">
    <PageHero eyebrow="Books & music" title="Words and songs that carry hope.">Explore creative works from our wider community.</PageHero>
    <section className="bg-cream-50 py-20">
      <div className="page-shell">
        <div className="grid gap-6 md:grid-cols-2">{collections.map((collection) => <article key={collection.title} className="rounded-3xl bg-white p-8 ring-1 ring-slate-200"><p className="eyebrow">Creative works</p><h2 className="mt-4 font-display text-3xl font-bold text-navy-950">{collection.title}</h2><p className="mt-4 leading-7 text-slate-600">{collection.description}</p><Link href={collection.href} className="mt-7 inline-flex rounded-full bg-navy-950 px-6 py-3 font-extrabold text-white no-underline">{collection.label}</Link></article>)}</div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-6 text-slate-500">Books and music are made available through Connect Network, a division of Mlu Solutions. Faith Connect Community NPC only receives donations made through its Donate page.</p>
      </div>
    </section>
  </main>
}