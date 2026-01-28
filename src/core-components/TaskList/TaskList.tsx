import PlusIcon from "../../assets/icons/plus.svg?react"
import { Button } from "../../components/Button/Button"
import { TaskItem } from "../TaskItem/TaskItem"

export function TaskList() {
	return (
		<>
			<section>
				<Button icon={PlusIcon} className='w-full'>
					Nova Tarefa
				</Button>
			</section>
			<section className='space-y-2'>
				<TaskItem />
				<TaskItem />
			</section>
		</>
	)
}
