'use client'

import { useState } from 'react'

type Props = { itemId: string; kind: 'book' | 'song'; price: string }

export default function BuyButton({ itemId, kind, price }: Props) {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function checkout() {
    setError('')
    setLoading(true)
    try {
      const response = await fetch('/api/store/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ itemId, kind }) })
      const payload = await response.json() as { redirectUrl?: string; error?: string }
      if (!response.ok || !payload.redirectUrl) throw new Error(payload.error || 'Unable to start secure checkout.')
      window.location.assign(payload.redirectUrl)
    } catch (checkoutError) {
      setError(checkoutError instanceof Error ? checkoutError.message : 'Unable to start secure checkout.')
      setLoading(false)
    }
  }

  return <div className="mt-6"><button type="button" disabled={loading} onClick={checkout} className="w-full rounded-full bg-gold-400 px-5 py-3 font-extrabold text-navy-950 transition hover:bg-gold-500 disabled:cursor-wait disabled:opacity-60">{loading ? 'Opening secure checkout…' : `Buy for ${price}`}</button>{error && <p role="alert" className="mt-3 text-sm font-semibold text-red-700">{error}</p>}</div>
}