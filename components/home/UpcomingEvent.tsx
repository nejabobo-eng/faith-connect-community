import Card from '@/components/ui/Card'
import { events } from '@/data/events'

export default function UpcomingEvent() {
  const event = events[0]
  return (
	<section className="mx-auto max-w-6xl px-4 py-6">
	  <Card>
		<h3 className="font-heading text-xl font-semibold text-faithBlue">Upcoming Event</h3>
		<p className="mt-2 text-slate-700">{event.title}</p>
		<p className="text-sm text-slate-500">{event.date} • {event.time} • {event.location}</p>
		<p className="mt-2 text-slate-600">{event.description}</p>
	  </Card>
	</section>
  )
}
