import type { Metadata } from "next";
import { CallButton, WhatsAppButton } from "@/components/contact-buttons/contact-buttons";
import { FaqList } from "@/components/faq-list/faq-list";
import { PageHeader } from "@/components/page-header/page-header";
import { RevealImage } from "@/components/reveal-image/reveal-image";
import { RevealText } from "@/components/reveal-text/reveal-text";
import { Reveal } from "@/components/reveal/reveal";
import { site } from "@/config/site/site";

export const metadata: Metadata = {
  title: "Wholesale",
  description: `Wholesale wall clocks, mirrors, rugs, candles, artificial flowers and decor from ${site.name} in Oshodi, Lagos, for shops, designers, hotels and event decorators.`,
};

const buyers = [
  { who: "Decor shops and boutiques", why: "Restock clocks, mirrors, candles and flowers from one supplier instead of five." },
  { who: "Interior designers", why: "Finish a client's whole flat in one trip, with pieces that match." },
  { who: "Hotels, short lets and offices", why: "The same rug, clock or arrangement in every room, so it looks planned." },
  { who: "Event decorators", why: "Candles, holders, vases and flowers by the dozen for weddings and parties." },
];

const steps = [
  {
    title: "First, send us your list.",
    text: "Names, screenshots from our Instagram or rough descriptions are all fine, with how many of each.",
    start: "lg:col-start-1",
  },
  {
    title: "Then we send a trade price.",
    text: "Prices depend on what you buy and how much of it, so every wholesale order gets its own quote.",
    start: "lg:col-start-3",
  },
  {
    title: "Collect it, or we send it.",
    text: `Pick up from either shop in ${site.district}. ${site.delivery}`,
    start: "lg:col-start-5",
  },
];

// PLACEHOLDER: answers are kept general until the client confirms minimums, payment and delivery.
const faqs = [
  {
    question: "Is there a minimum order for wholesale prices?",
    answer: "Tell us what you need and how many, and we'll tell you which items qualify for trade prices.",
  },
  {
    question: "Can I see the stock before I buy?",
    answer: `Yes. Visit either of our shops in ${site.district}, or ask us on WhatsApp for photos and videos of the exact pieces.`,
  },
  {
    question: "Do you deliver?",
    answer: site.delivery,
  },
  {
    question: "How do I pay?",
    answer: "We'll give you the payment details along with your quote, and confirm your order once payment is in.",
  },
  {
    question: "Can I order the same piece again later?",
    answer:
      "Stock moves quickly, so ask us before you plan around a repeat. If it has sold out, we'll suggest the closest match.",
  },
];

export default function WholesalePage() {
  return (
    <main>
      <PageHeader
        title="Wholesale decor for your business"
        intro="Clocks, mirrors, rugs, candles and flowers by the dozen, at trade prices, from our two shops in Oshodi."
      >
        <WhatsAppButton label="Order wholesale on WhatsApp" />
        <CallButton />
      </PageHeader>

      <div className="page rise [--rise-delay:120ms]">
        <RevealImage
          src="/images/rug-pile.jpg"
          alt="A tall stack of folded patterned rugs"
          sizes="100vw"
          priority
          className="aspect-[4/3] sm:aspect-[21/9]"
        />
      </div>

      <section className="page grid gap-8 pt-[var(--section)] lg:grid-cols-12">
        <div className="lg:col-span-5">
          <RevealText className="text-h2">Who buys from us wholesale</RevealText>
          <Reveal className="mt-8 hidden lg:block">
            <RevealImage
              src="/images/shop-goods.jpg"
              alt="Home goods, frames and ornaments laid out on a shop counter"
              sizes="40vw"
              className="aspect-[4/3]"
            />
          </Reveal>
        </div>
        <dl className="lg:col-span-6 lg:col-start-7">
          {buyers.map((buyer) => (
            <div key={buyer.who} className="reveal-row pb-9 last:pb-0">
              <dt className="text-h3">{buyer.who}</dt>
              <dd className="mt-2 text-ink-soft">{buyer.why}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="page pt-[var(--section)]">
        <h2 className="sr-only">How wholesale works</h2>
        <ol className="grid gap-[clamp(2.5rem,4vw,3.5rem)] lg:grid-cols-12">
          {steps.map((step) => (
            <li key={step.title} className={`lg:col-span-8 ${step.start}`}>
              <Reveal>
                <h3 className="text-h2">{step.title}</h3>
                <p className="text-lead mt-3 max-w-[38ch] text-ink-soft">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="page pt-[var(--section)]">
        <div className="grid gap-4 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <RevealImage
              src="/images/gold-vase.jpg"
              alt="A gold vase lit among darker vases"
              sizes="(min-width: 768px) 42vw, 100vw"
              className="aspect-[4/3] h-full w-full md:aspect-auto md:min-h-[28rem]"
            />
          </Reveal>
          <Reveal className="card flex flex-col justify-between gap-10 bg-brand p-[clamp(1.5rem,4vw,3.5rem)] text-white md:col-span-7">
            <h2 className="text-h2 max-w-[16ch]">Send your list today</h2>
            <div>
              <p className="text-lead max-w-[36ch]">
                Tell us what you need and how many. WhatsApp opens with your order written out, and we reply with the
                trade price.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <WhatsAppButton variant="white" />
                <CallButton variant="default" className="bg-brand-dark hover:bg-[#6b0f1e]" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page grid gap-8 pt-[var(--section)] lg:grid-cols-12">
        <div className="lg:col-span-5">
          <RevealText className="text-h2">Good to know</RevealText>
          <Reveal className="mt-8">
            <RevealImage
              src="/images/vases-pottery.jpg"
              alt="Ceramic vases in earthy glazes on a shelf"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[16/9] lg:aspect-[4/3]"
            />
          </Reveal>
        </div>
        <Reveal className="lg:col-span-6 lg:col-start-7">
          <FaqList items={faqs} />
        </Reveal>
      </section>
    </main>
  );
}
