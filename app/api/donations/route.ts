import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

const YOCO_CHECKOUT_URL = 'https://payments.yoco.com/api/checkouts'

function getSiteUrl(request: NextRequest) {
  const configured = process.env.NEXT_PUBLIC_SITE_URL
  return configured ? configured.replace(/\/$/, '') : request.nextUrl.origin
}

export async function POST(request: NextRequest) {
  const secretKey = process.env.YOCO_SECRET_KEY
  if (!secretKey) {
    return NextResponse.json({ error: 'Online giving is not configured yet. Please use EFT or contact us.' }, { status: 503 })
  }

  const body = await request.json().catch(() => null) as { amount?: unknown } | null
  const amountInRands = typeof body?.amount === 'number' ? body.amount : NaN
  if (!Number.isInteger(amountInRands) || amountInRands < 5 || amountInRands > 100000) {
    return NextResponse.json({ error: 'Please enter a whole amount between R5 and R100,000.' }, { status: 400 })
  }

  const siteUrl = getSiteUrl(request)
  const response = await fetch(YOCO_CHECKOUT_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${secretKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount: amountInRands * 100,
      currency: 'ZAR',
      successUrl: `${siteUrl}/donate/success`,
      cancelUrl: `${siteUrl}/donate/cancelled`,
      metadata: { purpose: 'Faith Connect Community donation' },
    }),
    cache: 'no-store',
  })

  const result = await response.json().catch(() => null) as { redirectUrl?: string } | null
  if (!response.ok || !result?.redirectUrl || !result.redirectUrl.startsWith('https://')) {
    return NextResponse.json({ error: 'Yoco could not start checkout. Please try again or contact us.' }, { status: 502 })
  }
  return NextResponse.json({ redirectUrl: result.redirectUrl })
}
