import { site } from "@/config/site/site";

// Set as live text, like the shop's own logo: the name, then a red full stop.
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`block min-w-0 truncate font-medium tracking-[-0.03em] ${className ?? "text-[1.375rem]"}`}>
      {site.shortName}
      <span className="text-brand">.</span>
      <span className="sr-only"> Interiors</span>
    </span>
  );
}
