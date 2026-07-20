import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { sermons } from '@/data/sermons'

export default function FeaturedSermon() {
  const sermon = sermons[0]
  return (
	<Card>
	  <h3 className="font-heading text-xl font-semibold text-faithBlue">Latest Sermon</h3>
	  <p className="mt-2 text-slate-700">{sermon.title}</p>
	  <p className="text-sm text-slate-500">{sermon.speaker} • {sermon.date}</p>
	</Card>
  )
}
