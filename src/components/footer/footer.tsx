import Link from "next/link";
import { SocialIcon } from "@/components/social-icon/social-icon";
import { Wordmark } from "@/components/wordmark/wordmark";
import { hasEmail, hasPhone, site } from "@/config/site/site";
import { formatHours } from "@/lib/format-hours/format-hours";

const textLink = "transition-colors duration-150 hover:text-brand-dark hover:underline underline-offset-4";
const navLinks = [{ label: "Home", href: "/" }, ...site.nav, { label: "Order on WhatsApp", href: site.orderHref }];

export function Footer() {
  const hours = formatHours();

  return (
    <footer id="contact" className="mt-[var(--section)] bg-surface-2 pb-16 lg:pb-0">
      <div className="page py-[clamp(3rem,6vw,5rem)]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.2fr_1.2fr]">
          <div>
            <p className="max-w-[32ch]">{site.description}</p>
            <ul className="mt-6 flex gap-2">
              {site.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="inline-flex size-11 items-center justify-center rounded-full bg-white transition-[transform,background-color,color] duration-150 ease-out hover:-translate-y-0.5 hover:bg-brand hover:text-white active:scale-[0.97]"
                  >
                    <SocialIcon name={item.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-[1.0625rem] font-medium tracking-normal">Explore</h2>
            <ul className="mt-4 grid gap-2.5 text-ink-soft">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={textLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[1.0625rem] font-medium tracking-normal">Our shops</h2>
            <address className="mt-4 grid gap-4 text-ink-soft not-italic">
              {site.shops.map((shop) => (
                <a key={shop.name} href={shop.map} className={textLink}>
                  {shop.street}
                  <br />
                  {shop.area}
                </a>
              ))}
            </address>
          </div>

          <div>
            <h2 className="text-[1.0625rem] font-medium tracking-normal">Talk to us</h2>
            <div className="mt-4 grid gap-2.5 text-ink-soft">
              <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer" className={textLink}>
                WhatsApp {site.whatsapp.display}
              </a>
              {/* TODO: real link. Shows the number once site.ts has one. */}
              <a href={site.phone.href} className={textLink}>
                {hasPhone ? site.phone.display : "Phone number coming soon"}
              </a>
              {hasEmail && (
                <a href={site.email.href} className={textLink}>
                  {site.email.display}
                </a>
              )}
              <a href={site.instagram.href} target="_blank" rel="noopener noreferrer" className={textLink}>
                {site.instagram.handle}
              </a>
              {hours.length > 0 && (
                <dl className="mt-2 grid gap-1.5">
                  {hours.map((group) => (
                    <div key={group.days} className="flex justify-between gap-4">
                      <dt>{group.days}</dt>
                      <dd className="tabular-nums">{group.time}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </div>
        </div>

        <Link
          href="/"
          aria-label={`${site.name}, home`}
          className="mt-[clamp(3rem,6vw,5rem)] block rounded-sm"
        >
          <Wordmark className="text-[clamp(4.5rem,21vw,19rem)] leading-[0.9] tracking-[-0.05em]" />
        </Link>

        <div className="text-small mt-8 flex flex-wrap justify-between gap-x-8 gap-y-2 text-ink-soft">
          <p>
            © {site.copyrightYear} {site.legalName}. Photographs from Unsplash, listed on the{" "}
            <Link href="/credits" className={`underline ${textLink}`}>
              credits page
            </Link>
            .
          </p>
          <Link href="/privacy" className={textLink}>
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
