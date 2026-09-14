import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = { title: 'About', description: 'Discover the story, mission, beliefs, and values of Faith Connect Community.' }
const beliefs = [
  ['The Bible', 'God’s inspired, authoritative Word and our final rule for faith and life.', '2 Timothy 3:16–17'],
  ['The Triune God', 'One God, eternally existing as Father, Son, and Holy Spirit.', 'Matthew 28:19'],
  ['Jesus Christ', 'Fully God and fully human; His life, death, and resurrection bring salvation.', 'John 1:1–14'],
  ['Salvation', 'God’s gift of grace, received through faith in Jesus Christ.', 'Ephesians 2:8–9'],
  ['The Holy Spirit', 'God with us, empowering and transforming believers for holy living and service.', 'Acts 1:8'],
  ['The Church', 'The body of Christ, called to worship, discipleship, fellowship, and mission.', 'Ephesians 4:11–16'],
]

export default function AboutPage() {
  return <main id="main-content"><PageHero eyebrow="Our story" title="Rooted in Christ. Open to community.">Faith Connect Community exists to glorify God by connecting people to Jesus and serving communities with compassion.</PageHero>
    <section className="bg-white py-20"><div className="page-shell grid gap-14 lg:grid-cols-2 lg:items-center"><div><p className="eyebrow">The journey</p><h2 className="mt-4 font-display text-4xl font-bold text-navy-950">Faith that reaches beyond the walls.</h2><p className="mt-6 leading-8 text-slate-600">What began as a vision to build a Christ-centred community is growing into a movement that brings worship, discipleship, leadership development, education, and practical care together. We welcome people at every stage of faith and equip them to serve where God has placed them.</p></div><div className="grid gap-4"><article className="rounded-3xl bg-navy-950 p-8 text-white"><p className="eyebrow text-gold-400">Our mission</p><p className="mt-4 font-display text-2xl font-bold leading-snug">Connect people to Jesus, nurture spiritual growth, and serve communities with compassion and integrity.</p></article><article className="rounded-3xl bg-gold-400 p-8 text-navy-950"><p className="text-xs font-extrabold uppercase tracking-[.18em]">Our vision</p><p className="mt-4 font-display text-2xl font-bold leading-snug">Transformed lives, thriving families, and communities impacted by the Gospel.</p></article></div></div></section>
    <section className="bg-cream-50 py-20"><div className="page-shell"><p className="eyebrow">What we believe</p><h2 className="mt-4 font-display text-4xl font-bold text-navy-950">Faith with a firm foundation.</h2><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{beliefs.map(([title, text, verse]) => <article key={title} className="rounded-3xl bg-white p-7 ring-1 ring-slate-200"><h3 className="text-lg font-extrabold text-navy-950">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p><p className="mt-5 text-xs font-bold uppercase tracking-widest text-gold-500">{verse}</p></article>)}</div></div></section>
    <section id="founder-message" className="bg-white py-20"><div className="page-shell max-w-4xl"><p className="eyebrow">The journey ahead</p><blockquote className="mt-5 font-display text-3xl font-bold leading-snug text-navy-950 sm:text-4xl">“Through worship, discipleship, education, and outreach, we seek to reflect God’s love in practical ways and leave a lasting impact for generations to come.”</blockquote><p className="mt-7 font-bold text-navy-900">Pastor Mlungisi Mncube<br /><span className="font-normal text-slate-500">Founder & Chairperson</span></p></div></section>
  </main>
}
