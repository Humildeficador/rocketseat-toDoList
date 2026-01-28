import { useState } from "react"
import CheckIcon from "../../assets/icons/check.svg?react"
import PencilIcon from "../../assets/icons/pencil.svg?react"
import TrashIcon from "../../assets/icons/trash.svg?react"
import XIcon from "../../assets/icons/x.svg?react"
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon"
import { Card } from "../../components/Card/Card"
import { Checkbox } from "../../components/Checkbox/Checkbox"
import { Input } from "../../components/Input/Input"
import { Text } from "../../components/Text/Text"

export function TaskItem() {
	const [isEditing, setIsEditing] = useState(false)

	function handleEditTask() {
		setIsEditing(true)
	}

	function hadleExitEditTask() {
		setIsEditing(false)
	}

	return (
		<Card size={"md"} className="flex items-center gap-4">
			{!isEditing ? (
				<>
					<Checkbox />
					<Text className="flex-1">🛒 Fazer compras da semana</Text>
					<div className="flex gap-1">
						<ButtonIcon
							icon={PencilIcon}
							variant={"terciary"}
							onClick={handleEditTask}
						/>
						<ButtonIcon icon={TrashIcon} variant={"terciary"} />
					</div>
				</>
			) : (
				<>
					<Input className="flex-1" />
					<div className="flex gap-1">
						<ButtonIcon icon={XIcon} variant={"secundary"} onClick={hadleExitEditTask}/>
						<ButtonIcon icon={CheckIcon} variant={"primary"} />
					</div>
				</>
			)}
		</Card>
	)
}
