import Hero from '@/components/home/Hero'
import Mission from '@/components/home/Mission'
import Vision from '@/components/home/Vision'
import FeaturedScripture from '@/components/home/FeaturedScripture'
import MinistryPreview from '@/components/home/MinistryPreview'
import FeaturedSermon from '@/components/home/FeaturedSermon'
import UpcomingEvent from '@/components/home/UpcomingEvent'
import DailyDevotionPreview from '@/components/home/DailyDevotionPreview'
import CommunityOutreach from '@/components/home/CommunityOutreach'
import DonationCTA from '@/components/home/DonationCTA'
import OurInitiatives from '@/components/home/OurInitiatives'
import CoreValues from '@/components/home/CoreValues'

export default function HomePage() {
  return (
	<main>
	  <Hero />
	  <section className="mx-auto max-w-5xl px-4 py-12">
		<p className="text-center text-slate-700">
		  Welcome to Faith Connect Community — a Christ-centered family pursuing worship, discipleship,
		  and service. We exist to connect people to Jesus and bring hope to communities.
		</p>
	  </section>
	  <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-6 md:grid-cols-2">
		<Mission />
		<Vision />
	  </section>
		<CoreValues />
	  <FeaturedScripture />
		<OurInitiatives />
	  <MinistryPreview />
	  <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-12 md:grid-cols-2">
		<FeaturedSermon />
		<DailyDevotionPreview />
	  </section>
	  <UpcomingEvent />
	  <CommunityOutreach />
	  <DonationCTA />
	</main>
  )
}
