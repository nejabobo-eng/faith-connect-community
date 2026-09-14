# Faith Connect Community

Production website for Faith Connect Community NPC, built with Next.js 15, the App Router, TypeScript, and Tailwind CSS 4.

## Local development

```bash
npm install
copy .env.example .env.local
npm run dev
```

Run `npm run build` to create the production build.

## Deployment

The project uses a secure server-side payment endpoint, so deploy it to a Next.js-compatible host with server functions (for example Vercel, Netlify, or Cloudflare Workers with a compatible adapter). GitHub Pages and other static-only hosts cannot run the Yoco checkout endpoint.

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain before building so canonical metadata, the sitemap, and social sharing resolve correctly.

## Secure online giving

The donation flow creates a Yoco checkout session on the server and redirects donors to Yoco’s hosted, PCI-compliant payment page. Card details never enter this application, and the Yoco secret key is never exposed to the browser.

Yoco setup:

1. Open and verify the organisation’s Yoco account, then add and verify the production domain in Yoco’s Checkout API settings.
2. Add the sandbox `YOCO_SECRET_KEY` to local development and preview environments. It must not have a `NEXT_PUBLIC_` prefix.
3. Set `NEXT_PUBLIC_SITE_URL` to the exact HTTPS production domain.
4. Test a low-value donation, cancellation, and Yoco confirmation using the test key.
5. Replace `YOCO_SECRET_KEY` with Yoco’s live key in the production host only after Yoco unlocks the verified domain.
6. Configure Yoco’s transaction notifications and reconcile gifts in the Yoco App. Add a verified webhook-backed donor record system only when the church adopts a secure donor database/CRM.

Never place merchant keys, passphrases, webhook secrets, or API secret keys in a `NEXT_PUBLIC_*` variable. The application already creates checkout sessions from the server in `app/api/donations/route.ts`.

Optional EFT display variables are documented in `.env.example`. Leave any of them blank to keep bank details off the public site and direct donors to email instead.

## Before launch

- Confirm the final domain, gathering location, service times, and official contact channels.
- Have the NPC review the privacy notice, website terms, refund approach, and donation wording.
- Confirm the organisation’s SARS PBO/Section 18A status before offering tax-deductible receipts. The site currently makes no such promise.
- Replace the square source logo with an optimised transparent mark when available for a sharper header treatment.
