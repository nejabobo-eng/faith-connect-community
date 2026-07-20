import './globals.css'
import { ReactNode } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Faith Connect Community',
  description: 'Connecting Faith, Community, and Purpose',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
	<html lang="en">
	  <body className="font-body text-slate-800">
		<Navbar />
		{children}
		<Footer />
	  </body>
	</html>
  )
}
