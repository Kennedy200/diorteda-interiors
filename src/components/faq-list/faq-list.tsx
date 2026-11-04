"use client";

import { ChevronDown } from "lucide-react";
import { Accordion } from "radix-ui";

// Each question sits on its own soft tile, so no divider lines are needed.
export function FaqList({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <Accordion.Root type="single" collapsible className="grid gap-2">
      {items.map((item) => (
        <Accordion.Item key={item.question} value={item.question} className="rounded-2xl bg-surface-2 transition-colors duration-150 data-[state=open]:bg-brand-soft">
          <Accordion.Header>
            <Accordion.Trigger className="group flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-[1.1875rem] font-medium tracking-[-0.01em]">
              {item.question}
              <ChevronDown
                aria-hidden="true"
                className="size-5 shrink-0 transition-transform duration-200 ease-out group-data-[state=open]:rotate-180"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <p className="max-w-[60ch] px-5 pb-5">{item.answer}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
