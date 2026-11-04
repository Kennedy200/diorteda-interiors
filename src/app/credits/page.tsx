import type { Metadata } from "next";
import Image from "next/image";
import images from "../../../scripts/fetch-images/images.json";
import { PageHeader } from "@/components/page-header/page-header";

export const metadata: Metadata = {
  title: "Photo credits",
  description: "The photographers whose pictures appear on this website.",
  robots: { index: false },
};

export default function CreditsPage() {
  return (
    <main>
      <PageHeader
        title="Photo credits"
        intro="The photographs on this site are by these photographers, shared on Unsplash under the Unsplash License."
      />
      <ul className="page grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image) => (
          <li key={image.name}>
            <div className="card relative aspect-[4/3] bg-surface-2">
              <Image src={`/images/${image.name}.jpg`} alt={image.shows} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
            <p className="mt-3 font-medium">{image.by}</p>
            <a
              href={`https://unsplash.com/photos/${image.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft underline underline-offset-4 hover:text-brand-dark"
            >
              {image.shows}, on Unsplash
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
