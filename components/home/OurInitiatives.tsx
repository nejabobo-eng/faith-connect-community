import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Link from 'next/link'

export default function OurInitiatives() {
  return (
	<Section>
	  <h2 className="mb-6 text-center font-heading text-2xl font-bold text-faithBlue">Our Initiatives</h2>
	  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		<Card>
		  <h3 className="font-heading text-lg font-semibold text-faithBlue">Worship & Church Ministry</h3>
		  <p className="mt-2 text-slate-600">Weekly services, discipleship, prayer, and pastoral care.</p>
		</Card>
		<Card>
		  <h3 className="font-heading text-lg font-semibold text-faithBlue">Community Outreach</h3>
		  <p className="mt-2 text-slate-600">Serving communities through practical support and compassion.</p>
		</Card>
		<Card>
		  <h3 className="font-heading text-lg font-semibold text-faithBlue">Youth & Family Development</h3>
		  <p className="mt-2 text-slate-600">Mentorship, growth programs, and family support initiatives.</p>
		</Card>
		<Card>
		  <h3 className="font-heading text-lg font-semibold text-faithBlue">Leadership Development</h3>
		  <p className="mt-2 text-slate-600">Equipping emerging leaders with character and competence.</p>
		</Card>
		<Card>
		  <h3 className="font-heading text-lg font-semibold text-faithBlue">EntrySafe Accounting Academy</h3>
		  <p className="mt-2 text-slate-600">
			EntrySafe Accounting Academy is an educational initiative of Faith Connect Community dedicated to equipping
			individuals with practical accounting, bookkeeping, business, and financial management skills. Through quality
			training and professional development, the academy aims to empower students, entrepreneurs, and professionals to
			build sustainable careers and businesses.
		  </p>
		  <div className="mt-4">
			<Link
			  href="#"
			  aria-disabled
			  className="inline-flex cursor-not-allowed items-center justify-center rounded-md bg-slate-200 px-4 py-2 font-semibold text-slate-500"
			>
			  Learn More (Coming Soon)
			</Link>
		  </div>
		</Card>
		<Card>
		  <h3 className="font-heading text-lg font-semibold text-faithBlue">Future Initiatives</h3>
		  <p className="mt-2 text-slate-600">New projects in development to expand impact and service.</p>
		</Card>
	  </div>
	</Section>
  )
}
