import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { CallButton, WhatsAppButton } from "@/components/contact-buttons/contact-buttons";
import { FaqList } from "@/components/faq-list/faq-list";
import { PageHeader } from "@/components/page-header/page-header";
import { RevealImage } from "@/components/reveal-image/reveal-image";
import { RevealText } from "@/components/reveal-text/reveal-text";
import { Reveal } from "@/components/reveal/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site/site";
import { formatHours } from "@/lib/format-hours/format-hours";

export const metadata: Metadata = {
  title: "Visit the shops",
  description: `${site.name} has two shops in ${site.district}, ${site.city}: ${site.shops.map((s) => `${s.street}, ${s.area}`).join(" and ")}.`,
};

const pictures = ["/images/vases-pottery.jpg", "/images/clock-brass.jpg"];
const alts = ["Ceramic vases in earthy glazes on a shelf", "An open-frame brass wall clock"];

// PLACEHOLDER: general answers until the client confirms parking, payment and delivery details.
const faqs = [
  {
    question: "Which shop should I go to?",
    answer: "Both are in Oshodi. Message us what you're after and we'll tell you which one has it.",
  },
  {
    question: "Can you hold something for me?",
    answer: "Ask us on WhatsApp. Tell us the piece and when you're coming, and we'll let you know.",
  },
  {
    question: "Do you deliver?",
    answer: site.delivery,
  },
  {
    question: "Do you help with styling?",
    answer:
      "Yes. Send us photos of your room and its size, and we'll suggest pieces that fit the space and each other.",
  },
];

export default function VisitPage() {
  const hours = formatHours();

  return (
    <main>
      <PageHeader
        title="Visit the shops"
        intro={`Two shops in ${site.district}, ${site.city}, full of clocks, mirrors, rugs, candles and flowers. Come and see them in person.`}
      >
        <WhatsAppButton />
        <CallButton />
      </PageHeader>

      <div className="page grid gap-4 md:grid-cols-2">
        {site.shops.map((shop, index) => (
          <section key={shop.name} className={`rise grid gap-4 ${index === 1 ? "[--rise-delay:80ms]" : "[--rise-delay:40ms]"}`}>
            <RevealImage
              src={pictures[index]}
              alt={alts[index]}
              sizes="(min-width: 768px) 50vw, 100vw"
              priority={index === 0}
              className={index === 0 ? "aspect-[4/3]" : "aspect-[4/3] md:aspect-[4/3]"}
            />
            <div className={`card p-[clamp(1.5rem,3vw,2.5rem)] ${index === 0 ? "bg-brand-soft" : "bg-surface-2"}`}>
              <h2 className="text-h3">{shop.name}</h2>
              <address className="text-lead mt-3 not-italic">
                {shop.street}
                <br />
                {shop.area}
              </address>
              <Button asChild variant={index === 0 ? "default" : "outline"} className="mt-6">
                {/* TODO: real link. Each shop's map link lives in site.ts. */}
                <a href={shop.map}>
                  <MapPin aria-hidden="true" />
                  Get directions
                </a>
              </Button>
            </div>
          </section>
        ))}
      </div>

      <section className="page grid gap-8 pt-[var(--section)] lg:grid-cols-12">
        <div className="lg:col-span-5">
          <RevealText className="text-h2">Opening times</RevealText>
          <Reveal>
            {hours.length > 0 ? (
              <dl className="mt-6 grid max-w-sm gap-2">
                {hours.map((group) => (
                  <div key={group.days} className="flex justify-between gap-6 rounded-xl bg-surface-2 px-4 py-2">
                    <dt>{group.days}</dt>
                    <dd className="tabular-nums">{group.time}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="text-lead mt-5 max-w-[34ch]">
                Message us before you visit and we&apos;ll confirm we&apos;re open and that what you want is in.
              </p>
            )}
          </Reveal>
        </div>
        <Reveal className="card grid bg-surface-2 sm:grid-cols-2 lg:col-span-7">
          <RevealImage
            src="/images/gold-holders.jpg"
            alt="Two geometric gold candle holders"
            sizes="(min-width: 1024px) 29vw, (min-width: 640px) 50vw, 100vw"
            className="aspect-[4/3] rounded-none sm:aspect-auto sm:min-h-[22rem]"
          />
          <div className="flex flex-col justify-between gap-8 p-[clamp(1.5rem,3vw,2.5rem)]">
          <h2 className="text-h3">See the stock before you come</h2>
          <p className="text-lead max-w-[40ch]">
            We post new pieces on Instagram almost every day. It&apos;s the easiest way to see what&apos;s in this week.
          </p>
          <a
            href={site.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-medium text-brand-dark underline-offset-4 hover:underline"
          >
            {site.instagram.handle}
            <ArrowUpRight aria-hidden="true" className="size-5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          </div>
        </Reveal>
      </section>

      <section className="page grid gap-8 pt-[var(--section)] lg:grid-cols-12">
        <div className="lg:col-span-5">
          <RevealText className="text-h2">Before you come</RevealText>
          <Reveal className="mt-8">
            <RevealImage
              src="/images/rug-vase.jpg"
              alt="A woven rug with a vase motif"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[16/9] lg:aspect-[4/3]"
            />
          </Reveal>
        </div>
        <Reveal className="lg:col-span-6 lg:col-start-7">
          <FaqList items={faqs} />
          <Button asChild variant="tonal" size="lg" className="mt-8">
            <Link href={site.orderHref}>Order on WhatsApp</Link>
          </Button>
        </Reveal>
      </section>
    </main>
  );
}
