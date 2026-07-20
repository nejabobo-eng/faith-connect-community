import { ReactNode } from 'react'

export default function Section({ className = '', children }: { className?: string; children: ReactNode }) {
  return (
	<section className={`mx-auto max-w-6xl px-4 py-12 ${className}`.trim()}>
	  {children}
	</section>
  )
}
