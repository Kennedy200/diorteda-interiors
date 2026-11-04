import type { Metadata } from "next";
import { CollectionBoard } from "@/components/collection-board/collection-board";
import { CallButton, WhatsAppButton } from "@/components/contact-buttons/contact-buttons";
import { PageHeader } from "@/components/page-header/page-header";
import { Reveal } from "@/components/reveal/reveal";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Wall clocks, console mirrors, centre rugs, scented candles, artificial flowers, vases and decor accents at Diorteda Interiors in Oshodi, Lagos.",
};

export default function ShopPage() {
  return (
    <main>
      <PageHeader
        title="Everything for the finishing touches"
        intro="Our stock changes every week, so prices are by message. Pick what you like and ask, and we'll tell you the price and what's in."
      >
        <WhatsAppButton />
        <CallButton />
      </PageHeader>

      <CollectionBoard />

      <section className="page pt-[var(--section)]">
        <Reveal className="card grid gap-8 bg-surface-2 p-[clamp(1.5rem,5vw,4.5rem)] md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <h2 className="text-h2">Can&apos;t see what you want?</h2>
            <p className="text-lead mt-4 max-w-[38ch]">
              We have far more in the shops than fits on a page. Send a photo of what you&apos;re after and we&apos;ll
              find it, or the closest thing to it.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
            <WhatsAppButton />
            <CallButton variant="outline" />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
