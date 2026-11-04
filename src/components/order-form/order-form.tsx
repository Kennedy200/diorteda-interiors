"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { SocialIcon } from "@/components/social-icon/social-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { collection } from "@/config/collection/collection";
import { site, whatsappLink } from "@/config/site/site";
import { scrollToElement } from "@/lib/lenis-store/lenis-store";

// The order form. It doesn't send anything itself: it writes the order out and opens Diorteda's WhatsApp chat
// with that message already typed, so the customer only has to press send. Nothing to copy or retype.

type Values = {
  kind: "home" | "business";
  categories: string[];
  item: string;
  quantity: string;
  area: string;
  name: string;
};

type Field = "item" | "quantity" | "name";
type Errors = Partial<Record<Field, string>>;

const empty: Values = {
  kind: "home",
  categories: [],
  item: "",
  quantity: "1",
  area: "",
  name: "",
};

const field = "mb-2 block text-[0.9375rem] font-medium";

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (values.categories.length === 0 && values.item.trim().length < 3) {
    errors.item = "Pick something above, or tell us what you're looking for.";
  }
  const quantity = Number(values.quantity);
  if (!Number.isInteger(quantity) || quantity < 1) errors.quantity = "Enter how many, as a whole number.";
  if (values.name.trim().length < 2) errors.name = "Tell us your name, so we know who we're talking to.";
  return errors;
}

// The WhatsApp message, written the way a customer would write it.
function message(values: Values) {
  const quantity = Number(values.quantity) || 1;
  const lines = [
    `Hello ${site.shortName}, I'd like a price, please.`,
    "",
    `For: ${values.kind === "business" ? "my business (wholesale)" : "my home"}`,
    values.categories.length ? `Looking for: ${values.categories.join(", ")}` : "",
    values.item.trim() ? `Details: ${values.item.trim()}` : "",
    `How many: ${quantity} ${quantity === 1 ? "piece" : "pieces"}`,
    values.area.trim() ? `Delivery to: ${values.area.trim()}` : "",
    "",
    values.name.trim() ? `Thank you, ${values.name.trim()}` : "",
  ];
  return lines
    .filter((line, i, all) => line !== "" || (all[i - 1] !== "" && i > 0))
    .join("\n")
    .trim();
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-small mt-1.5 text-error">
      {message}
    </p>
  );
}

function Chip({ checked, children, ...props }: React.ComponentProps<"input"> & { checked: boolean }) {
  return (
    <label
      className={`relative inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-full px-4 text-[0.9375rem] font-medium transition-[transform,background-color,color] duration-150 ease-out active:scale-[0.97] has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-brand ${
        checked ? "bg-brand text-white" : "bg-white hover:bg-brand-soft"
      }`}
    >
      <input checked={checked} {...props} className="absolute size-px opacity-0" />
      {checked && props.type === "checkbox" && <Check aria-hidden="true" className="size-4" />}
      {children}
    </label>
  );
}

export function OrderForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sentTo, setSentTo] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  // A link from the shop page can name the piece, as /order?item=Wall clocks: Mirror-finish clocks.
  // Read after hydration, so the server and browser render the same empty form first.
  useEffect(() => {
    const fromLink = () => {
      const item = new URLSearchParams(window.location.search).get("item");
      if (!item) return;
      const category = collection.find((c) => item.startsWith(`${c.title}:`));
      setValues((current) => ({
        ...current,
        item: current.item || item,
        categories:
          category && !current.categories.includes(category.title)
            ? [...current.categories, category.title]
            : current.categories,
      }));
    };
    fromLink();
  }, []);

  useEffect(() => {
    // The confirmation is shorter than the form, so bring it into view.
    if (sentTo && topRef.current) scrollToElement(topRef.current);
  }, [sentTo]);

  function set<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    if (key in errors) setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function toggleCategory(title: string) {
    const categories = values.categories.includes(title)
      ? values.categories.filter((c) => c !== title)
      : [...values.categories, title];
    setValues((current) => ({ ...current, categories }));
    setErrors((current) => ({ ...current, item: undefined }));
  }

  function checkField(name: Field) {
    setErrors((current) => ({ ...current, [name]: validate(values)[name] }));
  }

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    const first = (["item", "quantity", "name"] as Field[]).find((key) => found[key]);
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    // Opens WhatsApp (the app on phones, WhatsApp Web on computers) with the order already typed.
    const url = whatsappLink(message(values));
    // "noopener" would make window.open return null, so the link back to this page is cut by hand instead.
    const opened = window.open(url, "_blank");
    if (opened) opened.opener = null;
    else window.location.href = url;
    setSentTo(url);
  }

  function restart() {
    setValues(empty);
    setErrors({});
    setSentTo(null);
  }

  return (
    <MotionConfig reducedMotion="user">
      <div ref={topRef} className="scroll-mt-24">
        <AnimatePresence mode="wait" initial={false}>
          {sentTo ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              role="status"
              className="card bg-brand-soft p-[clamp(1.5rem,4vw,3.5rem)]"
            >
              <svg viewBox="0 0 52 52" className="size-16 text-brand" aria-hidden="true">
                <motion.circle
                  cx="26"
                  cy="26"
                  r="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <motion.path
                  d="M15 27l8 8 15-17"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
                />
              </svg>
              <h2 className="text-h2 mt-6">Now just press send, {values.name.trim().split(" ")[0]}</h2>
              <p className="text-lead mt-4 max-w-[42ch]">
                WhatsApp has opened with your order already written. Press send and we&apos;ll reply with the price and
                what&apos;s in stock.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href={sentTo} target="_blank" rel="noopener noreferrer">
                    <SocialIcon name="WhatsApp" />
                    WhatsApp didn&apos;t open? Tap here
                  </a>
                </Button>
                <Button variant="outline" size="lg" onClick={restart}>
                  Order something else
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              ref={formRef}
              noValidate
              onSubmit={submit}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="card grid gap-7 bg-surface-2 p-[clamp(1.25rem,4vw,3rem)]"
            >
              <fieldset>
                <legend className={field}>Who is it for?</legend>
                <div className="flex flex-wrap gap-2">
                  <Chip type="radio" name="kind" value="home" checked={values.kind === "home"} onChange={() => set("kind", "home")}>
                    My home
                  </Chip>
                  <Chip
                    type="radio"
                    name="kind"
                    value="business"
                    checked={values.kind === "business"}
                    onChange={() => set("kind", "business")}
                  >
                    My business, at wholesale
                  </Chip>
                </div>
              </fieldset>

              <fieldset>
                <legend className={field}>What do you need?</legend>
                <div className="flex flex-wrap gap-2">
                  {collection.map((category) => (
                    <Chip
                      key={category.id}
                      type="checkbox"
                      name="categories"
                      value={category.title}
                      checked={values.categories.includes(category.title)}
                      onChange={() => toggleCategory(category.title)}
                    >
                      {category.title}
                    </Chip>
                  ))}
                </div>
              </fieldset>

              <div>
                <Label htmlFor="item" className={field}>
                  Tell us more (optional)
                </Label>
                <Textarea
                  id="item"
                  name="item"
                  placeholder="Size, colour or style, or the Instagram post you saw"
                  value={values.item}
                  onChange={(event) => set("item", event.target.value)}
                  aria-invalid={!!errors.item}
                  aria-describedby={errors.item ? "item-error" : undefined}
                />
                <FieldError id="item-error" message={errors.item} />
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <Label htmlFor="quantity" className={field}>
                    How many pieces?
                  </Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="number"
                    inputMode="numeric"
                    min={1}
                    value={values.quantity}
                    onChange={(event) => set("quantity", event.target.value)}
                    onBlur={() => checkField("quantity")}
                    aria-invalid={!!errors.quantity}
                    aria-describedby={errors.quantity ? "quantity-error" : undefined}
                  />
                  <FieldError id="quantity-error" message={errors.quantity} />
                </div>
                <div>
                  <Label htmlFor="area" className={field}>
                    Delivery area (optional)
                  </Label>
                  <Input
                    id="area"
                    name="area"
                    placeholder="For example Lekki, Ikeja or Abuja"
                    autoComplete="address-level2"
                    value={values.area}
                    onChange={(event) => set("area", event.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="name" className={field}>
                  Your name
                </Label>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={(event) => set("name", event.target.value)}
                  onBlur={() => checkField("name")}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                <FieldError id="name-error" message={errors.name} />
              </div>

              <div>
                <p className={field}>Your WhatsApp message</p>
                <p
                  aria-live="polite"
                  className="rounded-2xl bg-white p-5 text-[1rem] leading-relaxed whitespace-pre-line"
                >
                  {message(values)}
                </p>
              </div>

              <div>
                <Button type="submit" size="lg" className="w-full sm:w-fit">
                  <SocialIcon name="WhatsApp" />
                  Send on WhatsApp
                </Button>
                <p className="text-small mt-3 text-ink-soft">
                  This opens WhatsApp with your message ready. You just press send.
                </p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
