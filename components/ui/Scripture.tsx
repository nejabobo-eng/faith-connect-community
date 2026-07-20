export default function Scripture({ text, reference }: { text: string; reference: string }) {
  return (
	<figure className="text-center">
	  <blockquote className="font-scripture text-2xl italic text-slate-700">“{text}”</blockquote>
		<figcaption className="mt-2 text-slate-500">{reference}</figcaption>
	</figure>
  )
}
