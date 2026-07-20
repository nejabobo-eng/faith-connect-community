import Link from 'next/link'

type Props = {
  href?: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

export default function Button({ href, children, variant = 'primary', className = '' }: Props) {
  const base = 'inline-flex items-center justify-center rounded-md px-5 py-3 font-semibold transition'
  const styles =
	variant === 'primary'
	  ? 'bg-gold text-slate-900 hover:opacity-90'
	  : variant === 'secondary'
	  ? 'bg-faithBlue text-white hover:opacity-90'
	  : 'border border-white/60 text-white hover:bg-white hover:text-faithBlue'

  if (href) {
	return (
	  <Link href={href} className={`${base} ${styles} ${className}`.trim()}>
		{children}
	  </Link>
	)
  }

  return <button className={`${base} ${styles} ${className}`.trim()}>{children}</button>
}
