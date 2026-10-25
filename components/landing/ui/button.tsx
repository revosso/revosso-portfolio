import type { ButtonHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

export const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-rv font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-rv-accent-fill text-white hover:bg-rv-accent-fill-hover",
        outline: "border border-rv-text/20 text-rv-text hover:border-rv-text/45 hover:bg-rv-text/[0.03]",
      },
      size: {
        sm: "px-3.5 text-sm",
        md: "px-4 text-[15px]",
        lg: "min-h-12 px-5 py-2.5 text-center text-base text-balance max-sm:whitespace-normal",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
)

export type ButtonVariantProps = VariantProps<typeof buttonVariants>

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariantProps

export function Button({ variant, size, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />
}
