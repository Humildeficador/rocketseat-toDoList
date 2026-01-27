import CheckIcon from "./assets/icons/check.svg?react"
import PencilIcon from "./assets/icons/pencil.svg?react"
import PlusIcon from "./assets/icons/plus.svg?react"
import SpinnerIcon from "./assets/icons/spinner.svg?react"
import TrashIcon from "./assets/icons/trash.svg?react"
import XIcon from "./assets/icons/x.svg?react"
import { Badge } from "./components/Badge/Badge"
import { Button } from "./components/Button/Button"
import { ButtonIcon } from "./components/ButtonIcon/ButtonIcon"
import { Card } from "./components/Card/Card"
import { Checkbox } from "./components/Checkbox/Checkbox"
import { Container } from "./components/Container/Container"
import { Icon } from "./components/Icon/Icon"
import { Input } from "./components/Input/Input"
import { Text } from "./components/Text/Text"

export function App() {
	return (
		<Container>
			<div className="grid gap-10">
				<div className="flex flex-col gap-2">
					<Text variant={"body-md-bold"} className="text-pink-base">
						Hello World!
					</Text>
					<Text variant={"body-sm"}>Hello World!</Text>
					<Text variant={"body-sm-bold"}>Hello World!</Text>
				</div>
				<div className="flex gap-2">
					<Icon svg={TrashIcon} className="fill-green-base" />
					<Icon svg={CheckIcon} />
					<Icon svg={PencilIcon} />
					<Icon svg={PlusIcon} />
					<Icon svg={XIcon} />
					<Icon svg={SpinnerIcon} animate />
				</div>
				<div className="flex gap-2">
					<Badge variant={"secundary"}>5</Badge>
					<Badge variant={"primary"}>2 de 5</Badge>
					<Badge variant={"primary"} loading>
						2 de 5
					</Badge>
				</div>
				<div>
					<Button icon={PlusIcon}>Nova Tarefa</Button>
				</div>
				<div className="flex gap-2">
					<ButtonIcon icon={TrashIcon} />
					<ButtonIcon variant={"secundary"} icon={TrashIcon} />
					<ButtonIcon variant={"terciary"} icon={TrashIcon} />
					<ButtonIcon variant={"terciary"} icon={TrashIcon} loading />
				</div>
				<div>
					<Input />
				</div>
				<div>
					<Checkbox />
					<Checkbox loading />
				</div>
				<div>
					<Card size={"md"}>Olá Mundo</Card>
				</div>
			</div>
		</Container>
	)
}
