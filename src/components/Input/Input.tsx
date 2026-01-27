import { cva, cx, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import { textVariants } from "../Text/Text"

export const inputVariants = cva(
	`
  border-b border-solid border-gray-200 focus:border-pink-base
  bg-transparent outline-none
  `,
	{
		variants: {
			size: {
				md: "px-2 pb-2 pt-0",
			},
			disabled: {
				true: "pointer-events-none",
			},
		},
		defaultVariants: {
			size: "md",
			disabled: false,
		},
	},
)

interface InputProps
	extends Omit<ComponentProps<"input">, "size" | "disabled">,
		VariantProps<typeof inputVariants> {}

export function Input({ size, disabled, className, ...props }: InputProps) {
	return (
		<input
			className={cx(
				inputVariants({ size, disabled }),
				textVariants(),
				className,
			)}
			{...props}
		/>
	)
}
