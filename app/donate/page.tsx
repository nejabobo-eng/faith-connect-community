export default function DonatePage() {
  return (
	<main className="mx-auto max-w-3xl px-4 py-12">
	  <h1 className="font-heading text-3xl font-bold text-faithBlue">Partner With Us</h1>
	  <p className="mt-4 text-slate-700">
		Your generosity helps us serve communities, plant churches, and build sustainable initiatives.
	  </p>
	  <div className="mt-8 rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
		<h2 className="font-heading text-xl font-semibold text-faithBlue">Giving Options</h2>
		<ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
		  <li>EFT: Faith Connect Community NPC</li>
		  <li>Reference: Your Name + Purpose</li>
		  <li>Once-off or monthly partnership</li>
		</ul>
		<p className="mt-6 text-sm text-slate-500">Online giving integration will be added later.</p>
	  </div>
	</main>
  )
}
