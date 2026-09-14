import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = { title: 'Ministries', description: 'Find a place to worship, grow, serve, and build community at Faith Connect Community.' }
const ministries = [
  ['Worship', 'Creating space to honour God together through praise, creativity, and wholehearted worship.'],
  ['Prayer', 'Standing together in prayer for people, families, communities, and the mission of the Church.'],
  ['Children', 'Helping children discover Jesus in a safe, joyful, and age-appropriate environment.'],
  ['Youth', 'Equipping young people with biblical truth, meaningful relationships, and purpose.'],
  ['Women', 'Encouraging women to grow in faith, friendship, leadership, and service.'],
  ['Men', 'Calling men to Christ-centred character, brotherhood, responsibility, and leadership.'],
  ['Discipleship', 'Learning to follow Jesus in everyday life through Scripture, mentoring, and community.'],
  ['Evangelism', 'Sharing the hope of Jesus with courage, compassion, and respect.'],
]
export default function MinistriesPage() { return <main id="main-content"><PageHero eyebrow="Life together" title="Grow in faith. Serve with purpose.">Ministry is where gifts are discovered, relationships deepen, and faith becomes active.</PageHero><section className="bg-cream-50 py-20"><div className="page-shell grid gap-4 md:grid-cols-2 lg:grid-cols-3">{ministries.map(([title, body], i) => <article key={title} className="rounded-3xl bg-white p-7 ring-1 ring-slate-200"><span className="text-sm font-extrabold text-gold-500">0{i + 1}</span><h2 className="mt-8 font-display text-2xl font-bold text-navy-950">{title}</h2><p className="mt-3 leading-7 text-slate-600">{body}</p></article>)}</div></section><section className="bg-navy-900 py-16 text-white"><div className="page-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><h2 className="font-display text-3xl font-bold">Ready to find your place?</h2><p className="mt-2 text-white/65">Tell us how you would like to connect or serve.</p></div><Link href="/contact" className="rounded-full bg-gold-400 px-6 py-3 font-extrabold text-navy-950 no-underline">Connect with us</Link></div></section></main> }
