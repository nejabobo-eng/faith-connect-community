import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Link from 'next/link'

export const metadata = {
  title: 'Our Initiatives — Faith Connect Community',
}

export default function InitiativesPage() {
  return (
	<main>
	  <Section className="text-center">
		<h1 className="font-heading text-3xl font-bold text-faithBlue">Our Initiatives</h1>
		<p className="mx-auto mt-2 max-w-3xl text-slate-700">
		  Faith Connect Community advances the Gospel through Christ-centered ministry, education, and community service.
		</p>
	  </Section>

	  <Section>
		<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		  <Card>
			<h3 className="font-heading text-lg font-semibold text-faithBlue">EntrySafe Accounting Academy</h3>
			<p className="mt-2 text-slate-700">
			  An educational initiative dedicated to equipping individuals with practical accounting, bookkeeping,
			  entrepreneurship, and financial management skills.
			</p>
			<div className="mt-4">
			  <Link
				href="#"
				aria-disabled
				className="inline-flex cursor-not-allowed items-center justify-center rounded-md bg-slate-200 px-4 py-2 font-semibold text-slate-500"
			  >
				Coming Soon — Learn More
			  </Link>
			</div>
		  </Card>

		  <Card>
			<h3 className="font-heading text-lg font-semibold text-faithBlue">Community Development Projects</h3>
			<p className="mt-2 text-slate-700">Targeted initiatives that bring practical help and hope to communities.</p>
		  </Card>

		  <Card>
			<h3 className="font-heading text-lg font-semibold text-faithBlue">Leadership Development Programme</h3>
			<p className="mt-2 text-slate-700">Equipping leaders to serve with Christ-like character and competence.</p>
		  </Card>

		  <Card>
			<h3 className="font-heading text-lg font-semibold text-faithBlue">Future Digital Ministry</h3>
			<p className="mt-2 text-slate-700">Building tools and resources to reach people online with the Gospel.</p>
		  </Card>
		</div>
	  </Section>
	</main>
  )
}
