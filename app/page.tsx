import Link from 'next/link'

const values = [
  ['Biblical truth', 'God’s Word shapes our faith, decisions, and daily life.', '01'],
  ['Authentic community', 'We grow together through prayer, fellowship, and care.', '02'],
  ['Practical compassion', 'We put faith into action by serving people with dignity.', '03'],
]

const ministries = [
  ['Worship & prayer', 'Gathering to seek God, encounter His presence, and grow in faith.'],
  ['Children & youth', 'Creating safe spaces where the next generation can know Jesus and flourish.'],
  ['Families & discipleship', 'Helping people build Christ-centred homes and live out their calling.'],
  ['Community outreach', 'Meeting practical needs through education, mentoring, and compassionate care.'],
]

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="soft-grid relative overflow-hidden bg-navy-950 text-white">
        <div className="pointer-events-none absolute -right-24 top-8 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl" />
        <div className="page-shell relative grid min-h-[670px] items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr] lg:py-28">
          <div>
            <p className="eyebrow text-gold-400">Welcome to Faith Connect Community</p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">A place to belong.<br /><span className="text-gold-400">A faith that transforms.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">We are a Christ-centred community connecting people to Jesus, building resilient faith, and bringing lasting hope to communities.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="rounded-full bg-gold-400 px-7 py-3.5 text-center font-extrabold text-navy-950 no-underline transition hover:bg-white">Plan your connection</Link>
              <Link href="/about" className="rounded-full border border-white/25 px-7 py-3.5 text-center font-bold text-white no-underline transition hover:border-white hover:bg-white/10">Discover our story</Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-[2.25rem] border border-gold-400/20" />
            <div className="relative overflow-hidden rounded-[2.25rem] bg-white p-8 text-center shadow-2xl sm:p-12">
              <img src="/logo.png" alt="Faith Connect Community — Connecting faith and purpose" className="mx-auto aspect-square w-full object-cover" />
              <p className="mt-2 font-display text-2xl font-bold text-navy-950">You are welcome here.</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Whether you are exploring faith or looking for a community to call home, there is a place for you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="page-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div><p className="eyebrow">Who we are</p><h2 className="mt-4 font-display text-4xl font-bold leading-tight text-navy-950 sm:text-5xl">Faith for every season of life.</h2></div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">Faith Connect Community is more than a Sunday gathering. We are a growing family committed to worship, biblical discipleship, purposeful leadership, and community transformation across South Africa.</p>
        </div>
        <div className="page-shell mt-14 grid gap-5 md:grid-cols-3">
          {values.map(([title, body, number]) => <article key={title} className="rounded-3xl border border-slate-200 bg-cream-50 p-7"><span className="font-display text-3xl font-bold text-gold-500">{number}</span><h3 className="mt-8 text-xl font-extrabold text-navy-950">{title}</h3><p className="mt-3 leading-7 text-slate-600">{body}</p></article>)}
        </div>
      </section>

      <section className="bg-cream-50 py-20 sm:py-28">
        <div className="page-shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow">Life together</p><h2 className="mt-4 font-display text-4xl font-bold text-navy-950 sm:text-5xl">Find your place to grow.</h2></div><Link href="/ministries" className="font-extrabold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-8">Explore all ministries →</Link></div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-slate-200 sm:grid-cols-2">
            {ministries.map(([title, body], index) => <article key={title} className="bg-white p-8 sm:p-10"><span className="grid h-11 w-11 place-items-center rounded-full bg-navy-950 font-display text-lg font-bold text-gold-400">{index + 1}</span><h3 className="mt-7 text-xl font-extrabold text-navy-950">{title}</h3><p className="mt-3 leading-7 text-slate-600">{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="page-shell grid overflow-hidden rounded-[2rem] bg-navy-900 text-white lg:grid-cols-2">
          <div className="soft-grid p-8 sm:p-12 lg:p-16"><p className="eyebrow text-gold-400">A message from our founder</p><blockquote className="mt-6 font-display text-3xl font-bold leading-snug">“We seek to reflect God’s love in practical ways and leave a lasting impact for generations to come.”</blockquote><p className="mt-6 text-sm font-bold text-white/70">Pastor Mlungisi Mncube · Founder & Chairperson</p></div>
          <div className="flex flex-col justify-center bg-gold-400 p-8 text-navy-950 sm:p-12 lg:p-16"><p className="text-sm font-extrabold uppercase tracking-[.16em]">Our vision</p><p className="mt-5 font-display text-3xl font-bold leading-snug">Transformed lives, thriving families, and communities impacted by the Gospel of Jesus Christ.</p><Link href="/about" className="mt-8 w-fit rounded-full bg-navy-950 px-6 py-3 font-extrabold text-white no-underline">Meet Faith Connect</Link></div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white">
        <div className="page-shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="eyebrow text-gold-400">Generosity in action</p><h2 className="mt-4 max-w-2xl font-display text-4xl font-bold">Help turn faith into practical hope.</h2><p className="mt-4 max-w-2xl leading-7 text-white/65">Your giving supports ministry, outreach, leadership development, and sustainable community initiatives.</p></div><Link href="/donate" className="shrink-0 rounded-full bg-gold-400 px-7 py-4 font-extrabold text-navy-950 no-underline hover:bg-white">Give securely</Link></div>
      </section>
    </main>
  )
}
