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
        <p className="eyebrow">Available through Connect Network</p>
        <h2 className="mt-4 font-display text-4xl font-bold text-navy-950">Read. Reflect. Grow.</h2>
        <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-600">Books promoted by Faith Connect Community are available to buy through Connect Network, a division of Mlu Solutions. Connect Network manages the catalogue, checkout, and delivery.</p>
        <a href="https://connectnetwork.co.za" target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex rounded-full bg-navy-950 px-7 py-4 font-extrabold text-white no-underline shadow-lg transition hover:bg-navy-800">Visit Connect Network <span aria-hidden="true" className="ml-2">↗</span></a>
        <p className="mt-8 text-sm leading-6 text-slate-500">Faith Connect Community NPC does not process book payments. Donations to Faith Connect are available separately on our <a href="/donate" className="font-bold text-navy-950 underline decoration-gold-400 decoration-2 underline-offset-4">Donate page</a>.</p>
      </div>
    </section>
  </main>
}