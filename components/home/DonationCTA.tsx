import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export default function DonationCTA() {
  return (
	<Section>
	  <div className="rounded-xl bg-faithBlue p-10 text-center text-white">
		<h3 className="font-heading text-2xl font-bold">Partner With the Mission</h3>
		<p className="mx-auto mt-2 max-w-2xl text-blue-100">
		  Your generosity enables ministry, outreach, and community transformation.
		</p>
		<div className="mt-6">
		  <Button href="/donate" variant="primary" className="text-slate-900">Give</Button>
		</div>
	  </div>
	</Section>
  )
}
