import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { CategoryMosaic } from "@/components/category-mosaic/category-mosaic";
import { CallButton, WhatsAppButton } from "@/components/contact-buttons/contact-buttons";
import { HeroImage } from "@/components/hero-image/hero-image";
import { RevealImage } from "@/components/reveal-image/reveal-image";
import { RevealText } from "@/components/reveal-text/reveal-text";
import { Reveal } from "@/components/reveal/reveal";
import { RoomPicker } from "@/components/room-picker/room-picker";
import { SocialIcon } from "@/components/social-icon/social-icon";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site/site";

const arrowLink = "group inline-flex items-center gap-2 font-medium text-brand-dark underline-offset-4 hover:underline";
const arrow = "size-[1.1em] transition-transform duration-200 ease-out group-hover:translate-x-1";

export default function Home() {
  return (
    <main>
      <section className="page pt-[calc(var(--nav-height)+clamp(2.5rem,6vw,5.5rem))] pb-[clamp(2.5rem,5vw,4rem)]">
        <h1 className="rise text-hero max-w-[15ch]">Decor that finishes the room.</h1>
        <div className="mt-[clamp(1.5rem,3vw,2.5rem)] flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <p className="rise text-lead max-w-[46ch] [--rise-delay:60ms]">
            Wall clocks, console mirrors, centre rugs, scented candles and flowers from our two shops in{" "}
            {site.district}, {site.city}. Buy one piece for your home, or buy in bulk for your business.
          </p>
          <div className="rise flex flex-wrap gap-3 [--rise-delay:120ms]">
            <WhatsAppButton />
            <CallButton />
          </div>
        </div>
      </section>

      <HeroImage src="/images/vase-shelves.jpg" alt="Wooden shelves filled with white ceramic vases of every shape" />

      <section className="page pt-[var(--section)]">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <RevealText className="text-h2 max-w-[18ch]">What we stock</RevealText>
          <Link href="/shop" className={arrowLink}>
            See the whole range <ArrowRight aria-hidden="true" className={arrow} />
          </Link>
        </div>
        <div className="mt-10">
          <CategoryMosaic />
        </div>
      </section>

      <section className="page pt-[var(--section)]">
        <div className="grid gap-x-[clamp(2rem,5vw,5rem)] gap-y-6 md:grid-cols-12">
          <RevealText className="text-h2 md:col-span-6">One piece, or a whole carton</RevealText>
          <Reveal className="md:col-span-6">
            <p className="text-lead">
              Most people come in for one clock or one rug. Plenty of others are shop owners, interior designers and
              event decorators buying by the dozen. Both get the same stock and the same help.
            </p>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-12">
          <Reveal className="card flex flex-col justify-between gap-12 bg-brand p-[clamp(1.5rem,4vw,3.5rem)] text-white md:col-span-7">
            <h3 className="text-h2 max-w-[16ch]">Buying for your business?</h3>
            <div>
              <p className="text-lead max-w-[36ch]">
                We sell wholesale as well as retail. Tell us what you need and how many, and we&apos;ll give you the
                trade price.
              </p>
              <Button asChild variant="white" size="lg" className="mt-7">
                <Link href="/wholesale">How wholesale works</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal className="md:col-span-5">
            <RevealImage
              src="/images/rug-pile.jpg"
              alt="A tall stack of folded patterned rugs"
              sizes="(min-width: 768px) 42vw, 100vw"
              className="aspect-[4/3] h-full w-full md:aspect-auto md:min-h-[30rem]"
            />
          </Reveal>
        </div>
      </section>

      <section className="page pt-[var(--section)]">
        <RevealText className="text-h2">Where&apos;s it going?</RevealText>
        <Reveal>
          <p className="text-lead mt-4 max-w-[40ch]">Pick a room and we&apos;ll show you where to start.</p>
        </Reveal>
        <div className="mt-8">
          <RoomPicker />
        </div>
      </section>

      <section className="page grid items-center gap-[clamp(2rem,5vw,5rem)] pt-[var(--section)] lg:grid-cols-12">
        <div className="lg:col-span-5">
          <RevealText className="text-h2">New stock lands on Instagram first</RevealText>
          <Reveal>
            <p className="text-lead mt-5 max-w-[34ch]">
              We post new arrivals almost every day. Screenshot anything you like and send it to us on WhatsApp.
            </p>
            <p className="mt-8 flex flex-wrap gap-x-12 gap-y-4">
              <span>
                <span className="text-hero block tabular-nums">{site.instagram.followers}</span>
                <span className="text-lead block">followers</span>
              </span>
              <span>
                <span className="text-hero block tabular-nums">{site.instagram.posts}</span>
                <span className="text-lead block">posts so far</span>
              </span>
            </p>
            <Button asChild variant="tonal" size="lg" className="mt-8">
              <a href={site.instagram.href} target="_blank" rel="noopener noreferrer">
                <SocialIcon name="Instagram" />
                Follow {site.instagram.handle}
              </a>
            </Button>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:col-span-7">
          <Reveal className="row-span-2">
            <RevealImage
              src="/images/gold-holders.jpg"
              alt="Two geometric gold candle holders"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="aspect-[3/5] h-full w-full"
            />
          </Reveal>
          <Reveal>
            <RevealImage
              src="/images/vases-pottery.jpg"
              alt="Ceramic vases in earthy glazes on a shelf"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="aspect-square"
            />
          </Reveal>
          <Reveal>
            <RevealImage
              src="/images/clock-wood.jpg"
              alt="A wooden wall clock above a potted plant"
              sizes="(min-width: 768px) 29vw, 50vw"
              className="aspect-square"
            />
          </Reveal>
        </div>
      </section>

      <section className="page grid gap-[clamp(2rem,5vw,5rem)] pt-[var(--section)] md:grid-cols-2">
        <Reveal className="order-last md:order-first">
          <RevealImage
            src="/images/shop-goods.jpg"
            alt="Home goods, frames and ornaments laid out on a shop counter"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="aspect-[4/3] h-full w-full"
          />
        </Reveal>
        <div className="flex flex-col justify-center">
          <RevealText className="text-h2">Two shops in {site.district}</RevealText>
          <Reveal>
            <ul className="mt-8 grid gap-6">
              {site.shops.map((shop) => (
                <li key={shop.name}>
                  <a href={shop.map} className="group flex gap-4 rounded-2xl">
                    <MapPin aria-hidden="true" className="mt-1.5 size-6 shrink-0 text-brand" />
                    <span>
                      <span className="text-h3 block group-hover:underline group-hover:underline-offset-4">{shop.street}</span>
                      <span className="text-lead block text-ink-soft">{shop.area}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-[40ch]">
              Send us a message before you set off, and we&apos;ll check the piece you want is at the shop nearest you.
            </p>
            <Link href="/visit" className={`${arrowLink} mt-5`}>
              Directions and opening times <ArrowRight aria-hidden="true" className={arrow} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="page pt-[var(--section)]">
        <Reveal className="card bg-brand px-6 py-[clamp(3.5rem,8vw,7rem)] text-center text-white">
          <h2 className="text-hero mx-auto max-w-[14ch]">Like what you see?</h2>
          <p className="text-lead mx-auto mt-5 max-w-[38ch]">
            Send us a screenshot or describe it. We&apos;ll reply with the price and whether it&apos;s in stock.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppButton variant="white" />
            <CallButton variant="default" className="bg-brand-dark hover:bg-[#6b0f1e]" />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
