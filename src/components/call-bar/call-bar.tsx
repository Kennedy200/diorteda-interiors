import { CallButton, WhatsAppButton } from "@/components/contact-buttons/contact-buttons";

const bar =
  "fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 bg-white p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-1px_0_0_var(--line)] lg:hidden"; // taste-skill-ignore: a fixed bar

// Keeps a call or a WhatsApp message one tap away on phones and tablets.
export function CallBar() {
  return (
    <div className={bar}>
      <WhatsAppButton size="default" label="WhatsApp" />
      <CallButton size="default" />
    </div>
  );
}
