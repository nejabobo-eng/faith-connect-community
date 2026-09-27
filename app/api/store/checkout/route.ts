import { NextRequest, NextResponse } from 'next/server'
import { findStoreItem } from '@/data/store'

export const runtime = 'nodejs'
const YOCO_CHECKOUT_URL = 'https://payments.yoco.com/api/checkouts'

function getSiteUrl(request: NextRequest) {
  const configured = process.env.NEXT_PUBLIC_SITE_URL
  return configured ? configured.replace(/\/$/, '') : request.nextUrl.origin
}

export async function POST(request: NextRequest) {
  const secretKey = process.env.YOCO_MLU_SOLUTIONS_SECRET_KEY
  if (!secretKey) return NextResponse.json({ error: 'Product checkout is not configured yet.' }, { status: 503 })

  const body = await request.json().catch(() => null) as { kind?: unknown; itemId?: unknown } | null
  if ((body?.kind !== 'book' && body?.kind !== 'song') || typeof body.itemId !== 'string') return NextResponse.json({ error: 'Invalid product selected.' }, { status: 400 })
  const item = findStoreItem(body.kind, body.itemId)
  if (!item) return NextResponse.json({ error: 'This product is not available yet.' }, { status: 404 })

  const siteUrl = getSiteUrl(request)
  const response = await fetch(YOCO_CHECKOUT_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${secretKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: item.priceInCents, currency: 'ZAR', successUrl: `${siteUrl}/store/success?item=${encodeURIComponent(item.id)}`, cancelUrl: `${siteUrl}/${body.kind === 'book' ? 'books' : 'music'}`, metadata: { merchant: 'Mlu Solutions', productId: item.id, productType: body.kind } }),
    cache: 'no-store',
  })
  const result = await response.json().catch(() => null) as { redirectUrl?: string } | null
  if (!response.ok || !result?.redirectUrl || !result.redirectUrl.startsWith('https://')) return NextResponse.json({ error: 'Yoco could not start checkout. Please try again.' }, { status: 502 })
  return NextResponse.json({ redirectUrl: result.redirectUrl })
}