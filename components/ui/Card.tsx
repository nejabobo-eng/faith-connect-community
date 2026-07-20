import { ReactNode } from 'react'

export default function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
	<div className={`rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 ${className}`.trim()}>{children}</div>
  )
}
