import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Books',
  description: 'Books and written works from Connect Network, a division of Mlu Solutions.',
}

export default function BooksPage() {
  return <main id="main-content">
    <PageHero eyebrow="Written works" title="Books that inspire faith and purpose.">Discover books created to encourage faith, purpose, and positive change.</PageHero>
    <section className="bg-cream-50 py-20">
      <div className="page-shell max-w-4xl text-center">
        <p className="eyebrow">Coming soon</p>
        <h2 className="mt-4 font-display text-4xl font-bold text-navy-950">Read. Reflect. Grow.</h2>
        <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-600">Our book collection is being prepared. Individual releases, prices, and secure purchase links will be announced here soon.</p>
        <div className="mx-auto mt-9 max-w-2xl rounded-3xl bg-white p-7 ring-1 ring-slate-200"><p className="font-display text-2xl font-bold text-navy-950">Available through Connect Network</p><p className="mt-3 leading-7 text-slate-600">Books will be available through <span className="font-bold text-navy-950">connectnetwork.co.za</span>, a division of Mlu Solutions. Please check back for the first release.</p></div>
        <p className="mt-8 text-sm leading-6 text-slate-500">Faith Connect Community NPC does not process book payments. Donations to Faith Connect are available separately on our <a href="/donate" className="font-bold text-navy-950 underline decoration-gold-400 decoration-2 underline-offset-4">Donate page</a>.</p>
      </div>
    </section>
  </main>
}