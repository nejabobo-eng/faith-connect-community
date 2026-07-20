import Section from '@/components/ui/Section'
import Scripture from '@/components/ui/Scripture'

export default function FeaturedScripture() {
  return (
	<Section className="bg-slate-50">
		<div className="rounded-xl bg-white p-10 shadow-sm ring-1 ring-slate-200">
		<Scripture text="You shall love the Lord your God with all your heart... and your neighbor as yourself." reference="Matthew 22:37–39" />
	  </div>
	</Section>
  )
}
