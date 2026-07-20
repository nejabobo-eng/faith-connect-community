import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

const ministries = [
  'Children\'s Ministry',
  'Youth Ministry',
  'Men\'s Ministry',
  'Women\'s Ministry',
  'Prayer Ministry',
  'Evangelism',
  'Worship Ministry',
]

export default function MinistryPreview() {
  return (
	<Section>
	  <h2 className="mb-6 text-center font-heading text-2xl font-bold text-faithBlue">Ministries</h2>
	  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{ministries.map((m) => (
		  <Card key={m}>
			<h3 className="font-heading text-lg font-semibold text-faithBlue">{m}</h3>
			<p className="mt-2 text-slate-600">Learn how this ministry serves and disciples.</p>
		  </Card>
		))}
	  </div>
	</Section>
  )
}
