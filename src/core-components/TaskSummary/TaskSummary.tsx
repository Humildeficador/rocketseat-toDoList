import { Badge } from "../../components/Badge/Badge"
import { Text } from "../../components/Text/Text"

export function TaskSummary() {
	return (
		<>
			<div className="flex items-center gap-2">
				<Text variant={"body-sm-bold"} className='text-gray-300!'>Tarefas criadas</Text>
				<Badge variant={"secundary"} className='h-6 w-6' >5</Badge>
			</div>
			<div className="flex items-center gap-2">
				<Text variant={"body-sm-bold"} className='text-gray-300!'>Concluídas</Text>
				<Badge variant={"primary"}>2 de 5</Badge>
			</div>
		</>
	)
}
