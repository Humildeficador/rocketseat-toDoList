import { Badge } from "../../components/Badge/Badge"
import { Text } from "../../components/Text/Text"
import { useTasks } from '../../hooks/useTasks'

export function TaskSummary() {
	const {createdTasksCount: tasksCount, concludedTaskCount} = useTasks()
	return (
		<>
			<div className="flex items-center gap-2">
				<Text variant={"body-sm-bold"} className='text-gray-300!'>Tarefas criadas</Text>
				<Badge variant={"secundary"} className='h-6 w-6' >{tasksCount}</Badge>
			</div>
			<div className="flex items-center gap-2">
				<Text variant={"body-sm-bold"} className='text-gray-300!'>Concluídas</Text>
				<Badge variant={"primary"}>{concludedTaskCount} de {tasksCount}</Badge>
			</div>
		</>
	)
}
