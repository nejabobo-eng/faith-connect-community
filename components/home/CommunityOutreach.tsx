import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

const items = [
  'Community development',
  'Food assistance',
  'Youth mentoring',
  'Educational support',
  'Family support initiatives',
]

export default function CommunityOutreach() {
  return (
	<Section className="bg-slate-50">
	  <h2 className="mb-6 text-center font-heading text-2xl font-bold text-faithBlue">Community Outreach</h2>
	  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
		{items.map((it) => (
		  <Card key={it}>
			<h3 className="font-heading text-lg font-semibold text-faithBlue">{it}</h3>
			<p className="mt-2 text-slate-600">Serving people with the love of Jesus.</p>
		  </Card>
		))}
	  </div>
	</Section>
  )
}
