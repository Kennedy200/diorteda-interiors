import type { Metadata } from "next";
import { CallButton } from "@/components/contact-buttons/contact-buttons";
import { OrderForm } from "@/components/order-form/order-form";
import { PageHeader } from "@/components/page-header/page-header";
import { RevealImage } from "@/components/reveal-image/reveal-image";
import { Reveal } from "@/components/reveal/reveal";
import { site } from "@/config/site/site";

export const metadata: Metadata = {
  title: "Order on WhatsApp",
  description: `Ask ${site.name} for a price on wall clocks, mirrors, rugs, candles, flowers and decor, for your home or at wholesale.`,
};

export default function OrderPage() {
  return (
    <main>
      <PageHeader
        title="Order on WhatsApp"
        intro="Fill this in and press the button. WhatsApp opens with your order already written, so you just press send."
      />

      <div className="page grid gap-[clamp(2rem,4vw,4rem)] lg:grid-cols-12">
        <div className="rise lg:col-span-8 [--rise-delay:60ms]">
          <OrderForm />
        </div>
        <aside className="grid content-start gap-6 lg:col-span-4">
          <Reveal>
            <h2 className="text-h3">Rather talk it through?</h2>
            <p className="mt-2">Call us and we&apos;ll sort it out on the phone.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <CallButton size="default" />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            <Reveal className="col-span-2">
              <RevealImage
                src="/images/candles-pillar.jpg"
                alt="Cream pillar candles packed closely together"
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="aspect-[4/3]"
              />
            </Reveal>
            <Reveal>
              <RevealImage src="/images/clock-wood.jpg" alt="A wooden wall clock" sizes="(min-width: 1024px) 15vw, 50vw" className="aspect-square" />
            </Reveal>
            <Reveal>
              <RevealImage src="/images/rug-pattern.jpg" alt="A dark floral patterned rug" sizes="(min-width: 1024px) 15vw, 50vw" className="aspect-square" />
            </Reveal>
          </div>
          <Reveal>
            <h2 className="text-h3">What happens next</h2>
            <p className="mt-2">
              We check what&apos;s in stock and reply on WhatsApp with the price. You decide from there, with no obligation to buy.
            </p>
          </Reveal>
        </aside>
      </div>
    </main>
  );
}
