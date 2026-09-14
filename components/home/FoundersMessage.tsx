import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function FoundersMessage() {
  return (
	<Section>
	  <div className="mx-auto max-w-4xl">
		<Card>
		  <h2 className="mb-2 text-center font-heading text-2xl font-bold text-faithBlue">Message from the Founder & Chairperson</h2>
		  <p className="mt-3 text-slate-700">
			Welcome to Faith Connect Community. Our heart is to build a Christ‑centred family where people encounter the
			love of Jesus, grow in faith through God’s Word and prayer, and are equipped to serve their families,
			workplaces, and communities. We believe the Gospel transforms lives—spiritually and practically. Through
			worship, discipleship, leadership development, community outreach, and education, we seek to reflect the heart
			of Christ in everything we do. Whether you’re exploring faith or looking for a community to belong to, we’re
			honored to walk with you.
		  </p>
		  <div className="mt-4 text-center">
			<Button href="/about#founder-message" variant="secondary">Read the full message</Button>
		  </div>
		</Card>
	  </div>
	</Section>
  )
}
