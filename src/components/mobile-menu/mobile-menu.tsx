"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Dialog } from "radix-ui";
import { CallButton, WhatsAppButton } from "@/components/contact-buttons/contact-buttons";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/wordmark/wordmark";
import { site } from "@/config/site/site";

type MobileMenuProps = {
  pathname: string;
  onClose: () => void;
};

// Loaded only when someone opens the menu, so phones don't pay for it up front.
export default function MobileMenu({ pathname, onClose }: MobileMenuProps) {
  const links = [{ label: "Home", href: "/" }, ...site.nav, { label: "Order on WhatsApp", href: site.orderHref }];

  return (
    <Dialog.Root defaultOpen onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Content data-lenis-prevent className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-white">
          <Dialog.Title className="sr-only">Site menu</Dialog.Title>
          <Dialog.Description className="sr-only">Links to every page on the site.</Dialog.Description>
          <div className="page flex h-[var(--nav-height)] shrink-0 items-center justify-between">
            <Wordmark />
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" aria-label="Close menu">
                <X />
              </Button>
            </Dialog.Close>
          </div>
          <ul className="page mt-4 flex flex-col gap-1">
            {links.map((item, i) => (
              <li key={item.href} className="menu-item" style={{ animationDelay: `${i * 30}ms` }}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="block rounded-2xl px-4 py-3 text-[1.75rem] leading-tight font-medium tracking-tight aria-[current=page]:bg-brand-soft aria-[current=page]:text-brand-dark"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="page mt-auto grid gap-2 py-6">
            <WhatsAppButton className="w-full" />
            <CallButton className="w-full" />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
