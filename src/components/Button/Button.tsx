import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps, ReactNode } from "react"
import { Icon } from "../Icon/Icon"
import { Text } from "../Text/Text"

export const buttonVariants = cva(
	`
  flex items-center justify-center gap-2 cursor-pointer
  transition group rounded-lg
  `,
	{
		variants: {
			variant: {
				primary: "bg-gray-200 hover:bg-pink-light",
			},
			size: {
				md: "h-14 py-4 px-5",
			},
			disabled: {
				true: "opacity-50 pointer-events-none",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
			disabled: false,
		},
	},
)

export const buttonIconVariants = cva("transition", {
	variants: {
		variant: {
			primary: "fill-pink-base",
		},
		size: {
			md: "w-5 h-5",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
	},
})

export const buttonTextVariants = cva("", {
	variants: {
		variant: {
			primary: "text-gray-400",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
})

interface ButtonProps
	extends Omit<ComponentProps<"button">, "size" | "disabled">,
		VariantProps<typeof buttonVariants> {
	children: ReactNode
	icon?: ComponentProps<typeof Icon>["svg"]
}

export function Button({
	children,
	variant,
	size,
	className,
	disabled,
	icon: IconComponent,
	...props
}: ButtonProps) {
	return (
		<button
			className={buttonVariants({ variant, size, disabled, className })}
			{...props}
		>
			{IconComponent && (
				<Icon
					svg={IconComponent}
					className={buttonIconVariants({ variant, size })}
				/>
			)}
			<Text
				variant={"body-md-bold"}
				className={buttonTextVariants({ variant })}
			>
				{children}
			</Text>
		</button>
	)
}
