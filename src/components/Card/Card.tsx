import { cva, type VariantProps } from "class-variance-authority"
import { type ComponentProps, createElement, type JSX } from "react"

export const cardVariants = cva(
	`
    rounded-lg border border-solid border-gray-200
    bg-white shadow-sm
  `,
	{
		variants: {
			size: {
				none: "",
				md: "p-5",
			},
		},
		defaultVariants: {
			size: "none",
		},
	},
)

interface CardProps
	extends ComponentProps<"div">,
		VariantProps<typeof cardVariants> {
	as?: keyof JSX.IntrinsicElements
}

export function Card({
	as = "div",
	size,
	className,
	children,
	...props
}: CardProps) {
	return createElement(
		as,
		{
			className: cardVariants({ size, className }),
			...props,
		},
		children,
	)
}
