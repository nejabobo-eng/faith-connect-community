export type Leader = {
  name: string
  title: string
  photo?: string
  bio: string
  scripture?: string
}

export const leaders: Leader[] = [
  {
	name: 'Pastor Mlungisi Richard Mncube',
	title: 'Founder & Chairperson',
	photo: '/leaders/mlungisi-mncube.jpg',
	bio:
	  'Provides strategic leadership and oversees the vision, governance, and direction of Faith Connect Community.',
  },
  {
	name: 'Pastor Mlungisi Sifiso Cele',
	title: 'Secretary',
	photo: '/leaders/mlungisi-cele.jpg',
	bio:
	  'Responsible for governance administration, meeting records, correspondence, and organizational compliance.',
  },
  {
	name: 'Pastor Bongumusa Clement Mavundla',
	title: 'Deputy Chairperson',
	photo: '/leaders/bongumusa-mavundla-centred.png',
	bio:
	  'Supports the Chairperson and assists in providing leadership, strategic planning, and oversight of the organization\'s activities.',
  },
]
