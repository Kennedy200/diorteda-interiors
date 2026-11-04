// Every business detail lives here. Change it once and every page follows.
// Facts marked SOURCE come from Diorteda's Instagram profile (instagram.com/diorteda_interiors), read on 4 November 2026.
// Anything marked PLACEHOLDER or TODO is not confirmed yet and must be checked with the client before launch.

export type DayHours = { day: string; short: string; open: string | null; close: string | null };

export type Shop = {
  name: string;
  street: string;
  area: string;
  map: string;
};

export type Review = { quote: string; name: string; place: string };

export const site = {
  name: "Diorteda Interiors", // SOURCE
  shortName: "Diorteda", // SOURCE: the logo reads "Diorteda."
  legalName: "Diorteda Interiors", // TODO: registered business name, if different
  copyrightYear: 2026,
  description:
    "Diorteda Interiors sells wall clocks, console mirrors, centre rugs, scented candles, artificial flowers and decor accessories from two shops in Oshodi, Lagos, by the piece or wholesale.",
  locale: "en_NG",
  city: "Lagos", // SOURCE
  district: "Oshodi", // SOURCE
  url: "http://localhost:3000", // TODO: real link, the live domain

  // SOURCE: the two shops listed in the Instagram bio. The spelling of the street names is as the bio writes them.
  shops: [
    {
      name: "Shop 1",
      street: "6B Sehinde Calisto Street",
      area: "Charity, Oshodi, Lagos",
      map: "#", // TODO: real link, Google Maps pin for Shop 1
    },
    {
      name: "Shop 2",
      street: "14 Oyetayo Street",
      area: "Bolade, Oshodi, Lagos",
      map: "#", // TODO: real link, Google Maps pin for Shop 2
    },
  ] satisfies Shop[],

  // Phone: not yet. While display is empty, buttons say "Call us" and point nowhere.
  phone: {
    display: "", // TODO: shop phone number, for example 0803 000 0000
    href: "#", // TODO: real link, for example tel:+2348030000000
  },

  // SOURCE: the number behind wa.link/56c2vo, the WhatsApp link in the Instagram bio (checked 4 November 2026).
  // Orders go through the form on /order, which opens this chat with the customer's message already written.
  whatsapp: {
    number: "2348167127783", // international format, no plus sign or spaces
    display: "0816 712 7783",
    href: "https://wa.me/2348167127783",
  },

  // Email: not yet. Hidden everywhere while display is empty.
  email: {
    display: "", // TODO: email address, if there is one
    href: "#", // TODO: real link, for example mailto:hello@diorteda.com
  },

  // Monday first, 24-hour, Lagos time. Left empty because the real hours aren't known yet.
  // While it's empty, pages ask people to message before visiting instead of showing invented times.
  hours: [] as DayHours[], // TODO: real opening hours, for example { day: "Monday", short: "Mon", open: "09:00", close: "19:00" }

  // SOURCE: Instagram profile on 4 November 2026. Update the numbers or remove them when they go stale.
  instagram: {
    handle: "@diorteda_interiors",
    href: "https://www.instagram.com/diorteda_interiors/",
    followers: "36.4K",
    posts: "9,927",
    asOf: "November 2026",
  },

  social: [
    { label: "Instagram", href: "https://www.instagram.com/diorteda_interiors/" }, // SOURCE
    { label: "Threads", href: "https://www.threads.net/@diorteda_interiors" }, // SOURCE: linked from the Instagram bio
    { label: "WhatsApp", href: "https://wa.me/2348167127783" }, // SOURCE
  ],

  // Delivery hasn't been confirmed, so the copy only promises to talk about it.
  delivery: "Ask us about delivery within Lagos and to other states.", // PLACEHOLDER: confirm the delivery offer

  // Real customer reviews only. The section hides itself while this is empty. Never add invented ones.
  reviews: [] as Review[],

  nav: [
    { label: "Shop", href: "/shop" },
    { label: "Wholesale", href: "/wholesale" },
    { label: "Visit the shops", href: "/visit" },
  ],

  orderHref: "/order",
};

export type Site = typeof site;

// A link that opens Diorteda's WhatsApp chat with the message already typed, so the customer only presses send.
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const hasPhone = site.phone.display.length > 0;
export const hasEmail = site.email.display.length > 0;
