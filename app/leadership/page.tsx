import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { leaders } from '@/data/leaders'

export const metadata = {
  title: 'Leadership — Faith Connect Community',
}

export default function LeadershipPage() {
  return (
	<main>
	  <Section className="text-center">
		<h1 className="font-heading text-3xl font-bold text-faithBlue">Leadership</h1>
		<p className="mx-auto mt-2 max-w-3xl text-slate-700">
		  Meet the leaders serving the vision of Faith Connect Community with humility, integrity, and faith.
		</p>
	  </Section>

	  <Section>
		<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		  {leaders.map((l) => (
			<Card key={l.name}>
			  <div className="flex flex-col items-center text-center">
				{/* No photos per current guidance */}
				<h3 className="mt-4 font-heading text-lg font-semibold text-faithBlue">{l.name}</h3>
				<p className="text-sm text-slate-600">{l.title}</p>
				<p className="mt-3 text-slate-700">{l.bio}</p>
				{l.scripture && (
				  <p className="mt-3 text-sm italic text-slate-500">Favorite Scripture: {l.scripture}</p>
				)}
			  </div>
			</Card>
		  ))}
		</div>
	  </Section>

	  <Section>
		<div className="rounded-lg bg-slate-50 p-6 ring-1 ring-slate-200">
		  <p className="text-center text-slate-700">
			<em>
			  Faith Connect Community is governed by a Board of Directors committed to serving with integrity, accountability,
			  and Christian values in accordance with the Constitution of the organization.
			</em>
		  </p>
		</div>
	  </Section>
	</main>
  )
}
