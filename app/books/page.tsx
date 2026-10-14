import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'

const books = [
  {
    title: 'Spiritual Warfare: Standing in Christ: Armor of God',
    href: 'https://www.amazon.com/dp/B0HMLGHD67',
    description: 'A practical guide through Ephesians 6:10–20, helping believers stand firm in the armour of God through Scripture, clear teaching, personal application and prayer. It calls readers away from fear and self-reliance to discernment, repentance, reconciliation, faithful obedience and life in Christian community.',
  },
  {
    title: 'To Imitate Christ: Becoming Like Jesus in Everyday Life',
    href: 'https://www.amazon.com/dp/B0HMLJQ79X',
    description: "A practical and encouraging guide for believers who desire to become more like Jesus in everyday life. Through Scripture, reflection, prayer and practical application, it explores Christ's character and shows how His example can shape how we love, serve, forgive, pray, obey and face hardship.",
  },
]

export const metadata: Metadata = {
  title: 'Books',
  description: 'Faith-centred books by Pastor Mlu Mncube, available on Amazon Kindle.',
}

export default function BooksPage() {
  return <main id="main-content">
    <PageHero eyebrow="Written works" title="Books that inspire faith and purpose.">Faith-centred reading created to encourage a deeper walk with Christ.</PageHero>
    <section className="bg-cream-50 py-20">
      <div className="page-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">By Pastor Mlu Mncube</p>
          <h2 className="mt-4 font-display text-4xl font-bold text-navy-950 sm:text-5xl">Read. Reflect. Grow.</h2>
          <p className="mt-5 max-w-2xl leading-7 text-slate-600">Explore practical Christian books rooted in Scripture, faith and everyday discipleship.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {books.map((book) => <article key={book.href} className="flex flex-col rounded-3xl bg-white p-7 ring-1 ring-slate-200 sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-gold-500">Kindle edition</p>
            <h3 className="mt-5 font-display text-3xl font-bold leading-tight text-navy-950">{book.title}</h3>
            <p className="mt-5 flex-1 leading-7 text-slate-600">{book.description}</p>
            <a href={book.href} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-fit rounded-full bg-navy-950 px-6 py-3.5 font-extrabold text-white no-underline transition hover:bg-gold-400 hover:text-navy-950">View on Amazon</a>
          </article>)}
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-6 text-slate-500">Faith Connect Community NPC does not process book payments. Book purchases are completed securely through Amazon. Donations to Faith Connect are available separately on our <a href="/donate" className="font-bold text-navy-950 underline decoration-gold-400 decoration-2 underline-offset-4">Donate page</a>.</p>
      </div>
    </section>
  </main>
}
