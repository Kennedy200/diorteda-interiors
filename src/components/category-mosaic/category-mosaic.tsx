import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal/reveal";
import { collection } from "@/config/collection/collection";

// Each category gets its own size and shape, so the grid reads like a shop wall rather than a row of cards.
const layout: Record<string, { cell: string; frame: string; sizes: string }> = {
  "wall-clocks": { cell: "md:col-span-7 md:row-span-2", frame: "aspect-[4/5] md:aspect-auto md:h-full md:min-h-[40rem]", sizes: "(min-width: 768px) 58vw, 100vw" },
  "console-mirrors": { cell: "md:col-span-5", frame: "aspect-[4/3]", sizes: "(min-width: 768px) 42vw, 100vw" },
  "centre-rugs": { cell: "md:col-span-5", frame: "aspect-[4/3]", sizes: "(min-width: 768px) 42vw, 100vw" },
  "scented-candles": { cell: "md:col-span-5", frame: "aspect-[5/4]", sizes: "(min-width: 768px) 42vw, 100vw" },
  flowers: { cell: "md:col-span-4", frame: "aspect-[4/5] md:aspect-[5/4]", sizes: "(min-width: 768px) 33vw, 100vw" },
  accents: { cell: "md:col-span-3", frame: "aspect-[4/5] md:aspect-[4/5]", sizes: "(min-width: 768px) 25vw, 100vw" },
};

export function CategoryMosaic() {
  return (
    <ul className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-12">
      {collection.map((category, index) => {
        const place = layout[category.id];
        return (
          <li key={category.id} className={`${place.cell} ${index === 0 ? "sm:col-span-2" : ""} flex`}>
            <Reveal className="flex w-full">
              <Link href={`/shop#${category.id}`} className="group flex w-full flex-col rounded-[var(--card-radius)]">
                <div className={`card relative flex-1 bg-surface-2 ${place.frame}`}>
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    sizes={place.sizes}
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="text-h3 mt-4 transition-colors duration-150 group-hover:text-brand-dark">{category.title}</h3>
                <p className="mt-1 max-w-[40ch] text-ink-soft">{category.short}</p>
              </Link>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
