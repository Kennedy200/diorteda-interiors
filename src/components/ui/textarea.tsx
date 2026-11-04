import * as React from "react"
import { cn } from "cn"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-28 w-full rounded-2xl border border-input bg-white px-4 py-3 text-[1.0625rem] transition-[border-color,box-shadow] duration-150 outline-none placeholder:text-ink-soft hover:border-ink focus-visible:border-brand focus-visible:shadow-[inset_0_0_0_1px_var(--brand)] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-error aria-invalid:shadow-[inset_0_0_0_1px_var(--error)]", // taste-skill-ignore: form field focus ring
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
