import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import { Icon } from "../Icon/Icon"

export const buttonIconVariants = cva(
	`
  inline-flex items-center justify-center cursor-pointer transition group
  `,
	{
		variants: {
			variant: {
				primary: "bg-green-base hover:bg-green-dark",
				secundary: "bg-gray-200 hover:bg-pink-base",
				terciary: "bg-transparent hover:bg-gray-200",
			},
			size: {
				sm: "h-6 w-6 p-1 rounded",
			},
			disabled: {
				true: "opacity-50 pointer-events-none",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "sm",
			disabled: false,
		},
	},
)

export const buttonIconIconVariants = cva("transition", {
	variants: {
		variant: {
			primary: "fill-white",
			secundary: "fill-pink-base group-hover:fill-white",
			terciary: "fill-gray-300 group-hover:fil-gray-300",
		},
		size: {
			sm: "h-4 w-4",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "sm",
	},
})

interface ButtonIconProps
	extends Omit<ComponentProps<"button">, "size" | "disabled">,
		VariantProps<typeof buttonIconVariants> {
	icon: ComponentProps<typeof Icon>["svg"]
}

export function ButtonIcon({
	variant,
	size,
	disabled,
	className,
	icon,
	...props
}: ButtonIconProps) {
	return (
		<button
			className={buttonIconVariants({ variant, size, disabled, className })}
			{...props}
		>
			<Icon
				svg={icon}
				className={buttonIconIconVariants({ variant, size })}
			/>
		</button>
	)
}
