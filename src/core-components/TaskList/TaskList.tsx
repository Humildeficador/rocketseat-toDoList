import { cx } from "class-variance-authority"
import PlusIcon from "../../assets/icons/plus.svg?react"
import { Button } from "../../components/Button/Button"
import { useTask } from "../../hooks/useTask"
import { useTasks } from "../../hooks/useTasks"
import { TaskState } from "../../models/tasks"
import { TaskItem } from "../TaskItem/TaskItem"

export function TaskList() {
	const { tasks } = useTasks()
	const { prepareTask } = useTask()

	function handlePrepareTask() {
		prepareTask()
	}

	return (
		<>
			<section>
				<Button
					icon={PlusIcon}
					className={cx("w-full", {
						hidden: tasks.some((task) => task.state === TaskState.Creating),
					})}
					onClick={handlePrepareTask}
				>
					Nova Tarefa
				</Button>
			</section>
			<section className="space-y-2">
				{tasks?.map((task) => (
					<TaskItem key={task.id} task={task}/>
				))}
			</section>
		</>
	)
}
