import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="page pt-[calc(var(--nav-height)+clamp(3rem,10vw,8rem))]">
      <h1 className="text-hero max-w-[16ch]">That page isn&apos;t on the shelf.</h1>
      <p className="text-lead mt-5 text-ink-soft">It may have moved, or it may never have existed.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild size="lg">
          <Link href="/">Back to home</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/shop">Browse the shop</Link>
        </Button>
      </div>
    </main>
  );
}
