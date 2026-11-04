import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header/page-header";
import { site } from "@/config/site/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${site.name} handles the details you share with us.`,
};

// PLACEHOLDER: a plain starting point, to be checked by the client against the Nigeria Data Protection Act 2023.
const sections = [
  {
    title: "What we collect",
    body: "When you ask for a price, we ask for your name, your phone or WhatsApp number, what you're looking for and, if you like, where it should be delivered. We don't ask for anything else.",
  },
  {
    title: "What we use it for",
    body: "Only to reply to you about your request, send you a price and arrange collection or delivery. We don't sell your details or add you to marketing lists.",
  },
  {
    title: "How long we keep it",
    body: "For as long as we need it to deal with your order and any follow-up, then we delete it.",
  },
  {
    title: "Cookies",
    body: "This website doesn't use advertising or tracking cookies. Links to WhatsApp, Instagram and Threads take you to those services, which have their own privacy policies.",
  },
  {
    title: "Your rights",
    body: "You can ask us what we hold about you, ask us to correct it, or ask us to delete it, at any time. Message us on WhatsApp and we'll deal with it.",
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <PageHeader title="Privacy policy" intro="The short version: we use your details to answer you, and for nothing else." />
      <div className="page grid max-w-[64rem] gap-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-h3">{section.title}</h2>
            <p className="mt-3 max-w-[62ch]">{section.body}</p>
          </section>
        ))}
        <p className="text-small text-ink-soft">Last updated November 2026.</p>
      </div>
    </main>
  );
}
