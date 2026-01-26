import { Text } from "./components/Text/Text"

export function App() {
	return (
		<div className="grid gap-3">
			<div className="flex flex-col gap-1">
				<Text variant={"body-md"} className="text-pink-base">
					Hello World!
				</Text>
				<Text variant={"body-sm"}>Hello World!</Text>
				<Text variant={"body-sm-bold"}>Hello World!</Text>
			</div>
		</div>
	)
}
