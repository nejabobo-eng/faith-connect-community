import Button from '@/components/ui/Button'

export default function Hero() {
  return (
	<section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white text-faithBlue">
	  <div className="relative mx-auto max-w-6xl px-4 py-24 text-center sm:py-32">
		<img
		  src="/logo.png"
		  alt="Faith Connect Community"
		  className="mx-auto h-auto w-40 sm:w-60 md:w-[320px] lg:w-[360px]"
		/>
		<h1 className="mt-6 font-heading text-3xl font-extrabold sm:text-4xl md:text-5xl">
		  Connecting People to Christ. Building Faith. Transforming Communities.
		</h1>
		<p className="mx-auto mt-4 max-w-3xl text-slate-700">
		  Faith Connect Community is a Christ-centered community dedicated to worship, discipleship,
		  prayer, and serving people with the love of Jesus Christ.
		</p>
		<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
		  <Button href="/about" variant="primary" className="text-slate-900">Join Us</Button>
		  <Button href="/about" variant="secondary">Learn More</Button>
		</div>
	  </div>
	</section>
  )
}
