import { hasEmail, hasPhone, site } from "@/config/site/site";

// Tells search engines what the business is and where its shops are. Unknown details are left out, never guessed.
export function BusinessSchema() {
  const schema = site.shops.map((shop) => ({
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    name: `${site.name}, ${shop.name}`,
    description: site.description,
    url: site.url,
    ...(hasPhone && { telephone: site.phone.display }),
    ...(hasEmail && { email: site.email.display }),
    sameAs: site.social.map((item) => item.href),
    address: {
      "@type": "PostalAddress",
      streetAddress: shop.street,
      addressLocality: site.district,
      addressRegion: site.city,
      addressCountry: "NG",
    },
    ...(site.hours.length > 0 && {
      openingHoursSpecification: site.hours
        .filter((h) => h.open)
        .map((h) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: h.day, opens: h.open, closes: h.close })),
    }),
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}
