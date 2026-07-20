import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

const values = [
  { title: 'Christ-Centered', desc: 'Jesus Christ is our foundation and focus in all we do.', icon: '✝️' },
  { title: 'Biblical Truth', desc: 'We teach and live by the authority of God’s Word.', icon: '📖' },
  { title: 'Prayer', desc: 'We depend on prayer for guidance, power, and intimacy with God.', icon: '🙏' },
  { title: 'Love', desc: 'We love God and people with compassion and humility.', icon: '❤️' },
  { title: 'Fellowship', desc: 'We grow together in authentic, Christ-like community.', icon: '🤝' },
  { title: 'Community Service', desc: 'We serve communities with practical care and integrity.', icon: '🕊️' },
]

export default function CoreValues() {
  return (
	<Section>
	  <h2 className="mb-6 text-center font-heading text-2xl font-bold text-faithBlue">Our Core Values</h2>
	  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{values.map((v) => (
		  <Card key={v.title}>
			<div className="flex items-start gap-4">
			  <div className="text-2xl" aria-hidden>{v.icon}</div>
			  <div>
				<h3 className="font-heading text-lg font-semibold text-faithBlue">{v.title}</h3>
				<p className="mt-1 text-slate-600">{v.desc}</p>
			  </div>
			</div>
		  </Card>
		))}
	  </div>
	</Section>
  )
}
