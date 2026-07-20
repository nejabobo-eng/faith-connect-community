export type EventItem = {
  title: string
  date: string
  time?: string
  location?: string
  description?: string
}

export const events: EventItem[] = [
  {
	title: 'Community Outreach Day',
	date: '27 July 2026',
	time: '09:00 - 15:00',
	location: 'Local Community Center',
	description: 'Serving our neighborhood with practical love.',
  },
]
