import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[transform,background-color,color,box-shadow] duration-150 ease-out select-none active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[1.15em]",
  {
    variants: {
      variant: {
        default: "bg-brand text-white hover:bg-brand-dark",
        tonal: "bg-brand-soft text-brand-dark hover:bg-[#f6d9dc]",
        outline: "bg-transparent text-ink shadow-[inset_0_0_0_1px_#80868b] hover:bg-surface-2", // taste-skill-ignore: the outline of a control, like a form field
        white: "bg-white text-brand-dark hover:bg-brand-soft",
        ghost: "text-ink hover:bg-surface-2",
      },
      size: {
        default: "h-11 px-5 text-[0.9375rem]",
        lg: "h-14 px-8 text-[1.0625rem]",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
