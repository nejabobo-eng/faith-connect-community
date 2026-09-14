'use client'
import { FormEvent, useState } from 'react'

export default function DonationPanel() {
  const [amount, setAmount] = useState('250')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function startCheckout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setLoading(true)
    try {
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: Number(amount) }),
      })
      const payload = await response.json() as { redirectUrl?: string; error?: string }
      if (!response.ok || !payload.redirectUrl) throw new Error(payload.error || 'Unable to start secure checkout.')
      window.location.assign(payload.redirectUrl)
    } catch (checkoutError) {
      setError(checkoutError instanceof Error ? checkoutError.message : 'Unable to start secure checkout.')
      setLoading(false)
    }
  }

  return <div className="rounded-[2rem] bg-white p-6 shadow-2xl ring-1 ring-slate-200 sm:p-9">
    <p className="font-display text-2xl font-bold text-navy-950">Give a once-off gift</p>
    <form className="mt-6" onSubmit={startCheckout}>
      <label htmlFor="donation-amount" className="text-sm font-extrabold text-navy-950">Donation amount (ZAR)</label>
      <div className="mt-3 flex overflow-hidden rounded-xl border border-slate-300 bg-white focus-within:ring-2 focus-within:ring-gold-500"><span className="grid w-14 place-items-center border-r border-slate-200 bg-slate-50 font-extrabold text-navy-950">R</span><input id="donation-amount" type="number" inputMode="decimal" min="5" max="100000" step="1" required value={amount} onChange={(event) => setAmount(event.target.value)} className="min-w-0 flex-1 px-4 py-3 font-bold text-navy-950 outline-none" /></div>
      <div className="mt-3 flex flex-wrap gap-2">{[100, 250, 500, 1000].map((value) => <button key={value} type="button" onClick={() => setAmount(String(value))} className="rounded-full border border-slate-200 px-3 py-1.5 text-sm font-bold text-slate-700 hover:border-gold-500 hover:text-navy-950">R{value}</button>)}</div>
      <button type="submit" disabled={loading} className="mt-6 block w-full rounded-full bg-gold-400 px-6 py-4 text-center font-extrabold text-navy-950 transition hover:bg-gold-500 disabled:cursor-wait disabled:opacity-60">{loading ? 'Opening secure checkout…' : 'Continue to Yoco secure checkout'}</button>
      {error && <p role="alert" className="mt-4 rounded-xl bg-red-50 p-3 text-sm leading-6 text-red-800">{error}</p>}
    </form>
    <div className="mt-5 flex items-start gap-3 text-xs leading-5 text-slate-500"><span aria-hidden>🔒</span><p>Checkout opens on our payment provider’s encrypted website. Faith Connect never sees or stores your card details.</p></div>
  </div>
}
