import Link from 'next/link'

export default function Navbar() {
  return (
	<header className="sticky top-0 z-50 bg-white/90 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60">
	  <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
		<Link href="/" className="flex items-center gap-3" aria-label="Faith Connect Community home">
		  <img
			src="/logo.png"
			alt="Faith Connect Community logo"
			className="h-12 w-auto sm:h-14"
		  />
		  <span className="hidden font-heading text-lg font-bold text-faithBlue sm:inline">
			Faith Connect Community
		  </span>
		</Link>
		<nav className="hidden gap-6 md:flex">
		  {[
			['About', '/about'],
			['Leadership', '/leadership'],
			['Our Initiatives', '/initiatives'],
			['Our Beliefs', '/beliefs'],
			['Ministries', '/ministries'],
			['Community Outreach', '/outreach'],
			['Devotions', '/devotions'],
			['Sermons', '/sermons'],
			['Bible Study', '/bible-study'],
			['Events', '/events'],
			['Resources', '/resources'],
			['Gallery', '/gallery'],
			['Contact', '/contact'],
		  ].map(([label, href]) => (
			<Link key={href} href={href as string} className="text-slate-700 hover:text-faithBlue">
			  {label}
			</Link>
		  ))}
		  <Link href="/donate" className="rounded-md bg-gold px-4 py-2 font-semibold text-slate-900 hover:opacity-90">Give</Link>
		</nav>
	  </div>
	</header>
  )
}
