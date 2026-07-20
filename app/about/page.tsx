export default function AboutPage() {
  return (
	<main className="mx-auto max-w-5xl px-4 py-12">
	  <h1 className="font-heading text-3xl font-bold text-faithBlue">About Faith Connect Community</h1>
	  <p className="mt-4 text-slate-700">
		Faith Connect Community is a registered Non-Profit Company (NPC) committed to glorifying God by connecting people to
		Jesus Christ, strengthening communities, and empowering individuals through faith, education, and compassionate service.
		Our work includes Christian ministry, community development, leadership training, educational initiatives, and outreach
		programmes designed to transform lives and build hope for future generations.
	  </p>

	  <div className="mt-8 grid gap-6 md:grid-cols-2">
		<section className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
		  <h2 className="font-heading text-xl font-semibold text-faithBlue">Mission</h2>
		  <p className="mt-2 text-slate-700">
			To connect people to Jesus Christ, nurture spiritual growth through biblical teaching and prayer, and serve
			communities with compassion and integrity.
		  </p>
		</section>
		<section className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
		  <h2 className="font-heading text-xl font-semibold text-faithBlue">Vision</h2>
		  <p className="mt-2 text-slate-700">
			To see transformed lives, thriving families, and communities impacted by the Gospel of Jesus Christ.
		  </p>
		</section>
	  </div>

	  <section className="mt-10 rounded-lg bg-slate-50 p-6 ring-1 ring-slate-200">
		<h2 className="font-heading text-xl font-semibold text-faithBlue">Founder&apos;s Vision</h2>
		<p className="mt-2 font-scripture italic text-slate-700">
		  “Faith Connect Community was established with a vision to build a Christ-centred community where people encounter
		  the love of Jesus Christ, grow in faith, and are equipped to transform their families, workplaces, and communities.
		  Through worship, discipleship, education, and outreach, we seek to reflect God&apos;s love in practical ways and leave a
		  lasting impact for generations to come.”
		</p>
		<p className="mt-4 text-slate-700">
		  <strong>Pastor Mlungisi Mncube</strong>
		  <br />Founder & Chairperson — Faith Connect Community NPC
		</p>
	  </section>
	</main>
  )
}
