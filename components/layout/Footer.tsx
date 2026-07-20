import Link from 'next/link'

export default function Footer() {
  return (
	<footer className="mt-16 border-t border-slate-200 bg-slate-50/60">
	  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
		<div className="text-center lg:text-left">
		  <img src="/logo.png" alt="Faith Connect Community" className="mx-auto h-auto w-24 lg:mx-0" />
		  <h3 className="mt-3 font-heading text-lg font-semibold text-faithBlue">Faith Connect Community</h3>
			<p className="mt-1 text-sm text-slate-600">Connecting People to Christ. Building Faith. Transforming Communities.</p>
		  <p className="mt-2 text-xs text-slate-600">
			Faith Connect Community is a registered Non-Profit Company (NPC) committed to glorifying God through worship,
			discipleship, education, and community transformation.
		  </p>
		</div>

		<div>
		  <h4 className="font-heading text-sm font-semibold text-slate-900">Quick Links</h4>
		  <ul className="mt-2 space-y-2 text-sm">
			{[
			  ['About', '/about'],
			  ['Our Beliefs', '/beliefs'],
			  ['Ministries', '/ministries'],
			  ['Outreach', '/outreach'],
			].map(([label, href]) => (
			  <li key={href}>
				<Link className="text-slate-700 hover:text-faithBlue" href={href as string}>
				  {label}
				</Link>
			  </li>
			))}
		  </ul>
		</div>

		<div>
		  <h4 className="font-heading text-sm font-semibold text-slate-900">Ministries</h4>
		  <ul className="mt-2 space-y-2 text-sm">
			{['Children', 'Youth', 'Women', 'Men', 'Prayer', 'Worship'].map((m) => (
			  <li key={m} className="text-slate-700">{m} Ministry</li>
			))}
		  </ul>
		</div>

		<div>
		  <h4 className="font-heading text-sm font-semibold text-slate-900">Contact</h4>
		  <ul className="mt-2 space-y-2 text-sm text-slate-700">
			<li>Email: info@faithconnect.community</li>
			<li>Phone: +27 12 345 6789</li>
			<li>WhatsApp: +27 12 345 6789</li>
		  </ul>
		  <div className="mt-3 flex gap-3 text-sm">
			<Link href="/privacy" className="text-slate-600 hover:text-faithBlue">Privacy</Link>
			<span className="text-slate-400">•</span>
			<Link href="/terms" className="text-slate-600 hover:text-faithBlue">Terms</Link>
		  </div>
		</div>
	  </div>

	  <div className="bg-white/80">
		<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs text-slate-500">
		  <p>
			© {new Date().getFullYear()} Faith Connect Community NPC. All rights reserved.
		  </p>
		  <p className="font-scripture italic">“Micah 6:8”</p>
		</div>
	  </div>
	</footer>
  )
}
