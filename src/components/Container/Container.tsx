import { cva, type VariantProps } from "class-variance-authority"
import { type ComponentProps, createElement, type JSX } from "react"

export const containerVariants = cva("mx-auto",
  {
    variants: {
      size: {
        md: "max-w-126 px-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
)

interface ContainerProps
  extends ComponentProps<"div">,
    VariantProps<typeof containerVariants> {
  as?: keyof JSX.IntrinsicElements
}

export function Container({
  as = "div",
  size,
  className,
  children,
  ...props
}: ContainerProps) {
  return createElement(
    as,
    {
      className: containerVariants({ size, className }),
      ...props,
    },
    children,
  )
}
