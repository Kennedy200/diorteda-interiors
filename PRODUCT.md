# Product

## Platform

web

## Stack

Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui on Radix (restyled), Motion, GSAP with ScrollTrigger and SplitText, Lenis, lucide-react. Frontend only: no backend, database, API or auth.

## Users

People in Lagos furnishing a home, often on a phone, and trade buyers (decor shops, interior designers, hotels and short lets, event decorators) buying in bulk.

## Product Purpose

The website for Diorteda Interiors, a home decor shop and wholesaler with two shops in Oshodi, Lagos. It gets a visitor from browsing to a WhatsApp message or a price request.

## Capabilities and Constraints

- All business details live in `src/config/site/site.ts`; the range is in `src/config/collection/collection.ts`.
- Links without a real destination stay `href="#"` with a TODO comment (phone, map pins).
- The order form writes the order out and opens Diorteda's WhatsApp chat (wa.me) with the message already typed. The customer only presses send. Every "Order on WhatsApp" button leads to the form first.
- No prices on the site: stock and wholesale prices change, so everything is "ask the price".

## Evidence on Hand

- Real, from Instagram (4 November 2026): name, both shop addresses, WhatsApp link, Instagram and Threads, categories (wall clocks, scented candles, console mirrors, centre rugs, flowers), follower and post counts.
- Not known: phone, email, opening hours, delivery terms, minimum order, payment. Hours stay empty and the pages ask people to message first.
- Photos are free Unsplash stand-ins listed in `CREDITS.md`, not the shop's own.
- No reviews or accreditations. The reviews list in `site.ts` is empty and must only ever hold real ones.
