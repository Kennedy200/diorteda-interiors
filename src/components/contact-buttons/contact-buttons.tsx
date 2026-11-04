import Link from "next/link";
import { Phone } from "lucide-react";
import { SocialIcon } from "@/components/social-icon/social-icon";
import { Button } from "@/components/ui/button";
import { hasPhone, site, whatsappLink } from "@/config/site/site";

type Variant = "default" | "tonal" | "outline" | "white" | "ghost";
type Size = "default" | "lg";

type WhatsAppButtonProps = {
  variant?: Variant;
  size?: Size;
  label?: string;
  className?: string;
  // Opens the chat straight away instead of going through the order form.
  direct?: boolean;
};

// WhatsApp is how Diorteda already sells. Orders go through the short form first, which then opens
// WhatsApp with the whole order written out, so the customer only has to press send.
export function WhatsAppButton({ variant = "default", size = "lg", label, className, direct = false }: WhatsAppButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      {direct ? (
        <a href={whatsappLink(`Hello ${site.shortName}, `)} target="_blank" rel="noopener noreferrer">
          <SocialIcon name="WhatsApp" />
          {label ?? "Chat on WhatsApp"}
        </a>
      ) : (
        <Link href={site.orderHref}>
          <SocialIcon name="WhatsApp" />
          {label ?? "Order on WhatsApp"}
        </Link>
      )}
    </Button>
  );
}

// Click to call. Shows the number once site.ts has one; until then it reads "Call us".
export function CallButton({ variant = "tonal", size = "lg", className }: { variant?: Variant; size?: Size; className?: string }) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      {/* TODO: real link. site.phone.href stays "#" until there's a number. */}
      <a href={site.phone.href} aria-label={hasPhone ? `Call ${site.phone.display}` : "Call us"}>
        <Phone aria-hidden="true" />
        {hasPhone ? site.phone.display : "Call us"}
      </a>
    </Button>
  );
}
