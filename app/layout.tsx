import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://faithconnect.community'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Faith Connect Community', template: '%s | Faith Connect Community' },
  description: 'A Christ-centred community connecting people to Jesus, building faith, and transforming communities across South Africa.',
  applicationName: 'Faith Connect Community',
  keywords: ['Faith Connect Community', 'church', 'South Africa', 'Christian community', 'community outreach', 'NPC'],
  openGraph: {
    type: 'website', locale: 'en_ZA', siteName: 'Faith Connect Community',
    title: 'Faith Connect Community',
    description: 'Connecting people to Christ. Building faith. Transforming communities.',
    images: [{ url: '/logo.png', width: 1254, height: 1254, alt: 'Faith Connect Community' }],
  },
  twitter: { card: 'summary_large_image', title: 'Faith Connect Community', description: 'Connecting faith and purpose.', images: ['/logo.png'] },
  icons: { icon: '/logo.png', apple: '/logo.png' },
}

export const viewport: Viewport = { themeColor: '#07152f', colorScheme: 'light' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body className="font-sans antialiased">
        <a href="#main-content" className="fixed left-3 top-3 z-[100] -translate-y-24 rounded bg-white px-4 py-2 font-bold text-navy-950 shadow focus:translate-y-0">Skip to content</a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
