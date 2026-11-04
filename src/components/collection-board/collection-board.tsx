"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, MotionConfig } from "motion/react";
import { collection } from "@/config/collection/collection";
import { site } from "@/config/site/site";
import { scrollToElement } from "@/lib/lenis-store/lenis-store";

// The whole range, one category per section, with a sticky bar that follows along as you scroll.
export function CollectionBoard() {
  const [current, setCurrent] = useState(collection[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setCurrent(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    collection.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <nav aria-label="Categories" className="z-30 bg-white lg:sticky lg:top-[var(--nav-height)] lg:shadow-[0_1px_0_0_var(--line)]" /* taste-skill-ignore: a sticky bar */>
        <ul className="page flex flex-wrap gap-2 py-2">
          {collection.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={current === section.id ? "true" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  const el = document.getElementById(section.id);
                  if (el) scrollToElement(el);
                  history.replaceState(null, "", `#${section.id}`);
                }}
                className={`relative block rounded-full px-5 py-2.5 text-[0.9375rem] font-medium transition-colors duration-150 ${
                  current === section.id ? "text-brand-dark" : "bg-surface-2 hover:bg-brand-soft lg:bg-transparent lg:hover:bg-surface-2"
                }`}
              >
                {current === section.id && (
                  <motion.span
                    layoutId="category-tab"
                    className="absolute inset-0 rounded-full bg-brand-soft"
                    transition={{ type: "spring", duration: 0.4, bounce: 0.1 }}
                  />
                )}
                <span className="relative">{section.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {collection.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="page grid scroll-mt-24 gap-8 lg:scroll-mt-36 pt-[clamp(3.5rem,7vw,6rem)] md:grid-cols-12"
        >
          <div className="md:col-span-5">
            <div className="md:sticky md:top-40">
              <h2 className="text-h2">{section.title}</h2>
              <p className="text-lead mt-3 max-w-[30ch]">{section.short}</p>
              <div className="card relative mt-6 aspect-[4/3]">
                <Image src={section.image} alt={section.imageAlt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
              </div>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <ul>
              {section.styles.map((style) => (
                <li key={style.name} className="reveal-row">
                  <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3 py-5">
                    <div className="min-w-0 flex-1 basis-64">
                      <h3 className="text-[1.3125rem] leading-snug font-medium tracking-[-0.01em]">{style.name}</h3>
                      <p className="mt-1 text-ink-soft">{style.detail}</p>
                    </div>
                    <Link
                      href={`${site.orderHref}?item=${encodeURIComponent(`${section.title}: ${style.name}`)}`}
                      className="group inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full px-4 text-[0.9375rem] font-medium text-brand-dark transition-[background-color,transform] duration-150 hover:bg-brand-soft active:scale-[0.97]"
                    >
                      Ask the price
                      <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-2xl bg-surface-2 p-5">{section.note}</p>
          </div>
        </section>
      ))}
    </MotionConfig>
  );
}
