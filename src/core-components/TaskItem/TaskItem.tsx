import { cx } from "class-variance-authority"
import { type ChangeEvent, type FormEvent, useState } from "react"
import CheckIcon from "../../assets/icons/check.svg?react"
import PencilIcon from "../../assets/icons/pencil.svg?react"
import TrashIcon from "../../assets/icons/trash.svg?react"
import XIcon from "../../assets/icons/x.svg?react"
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon"
import { Card } from "../../components/Card/Card"
import { Checkbox } from "../../components/Checkbox/Checkbox"
import { Input } from "../../components/Input/Input"
import { Text } from "../../components/Text/Text"
import { useTask } from "../../hooks/useTask"
import { type Task, TaskState } from "../../models/tasks"

interface TaskItemProps {
	task: Task
}

export function TaskItem({ task }: TaskItemProps) {
	const [isEditing, setIsEditing] = useState(task?.state === TaskState.Creating)
	const [taskTitle, setTaskTitle] = useState(task?.title || "")
	const { updateTask, deleteTask, updateTaskStatus } = useTask()

	function handleEditTask() {
		setIsEditing(true)
	}

	function hadleExitEditTask() {
		if(task.state === TaskState.Creating) {
			deleteTask(task.id)
		}
		setIsEditing(false)
	}

	function handleChangeTaskTitle(e: ChangeEvent<HTMLInputElement>) {
		setTaskTitle(e.target.value || "")
	}

	function handleSaveTask(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		updateTask(task.id, { title: taskTitle })
		setIsEditing(false)
	}

	function handleDeleteTask() {
		deleteTask(task.id)
	}

	function handleChangeTaskStatus(e: ChangeEvent<HTMLInputElement>) {
		const checked = e.target.checked
		updateTaskStatus(task.id, checked)
	}

	return (
		<Card size={"md"}>
			{!isEditing ? (
				<div className="flex items-center gap-4">
					<Checkbox
						checked={task?.concluded}
						onChange={handleChangeTaskStatus}
					/>
					<Text className={cx("flex-1", { "line-through": task?.concluded })}>
						{task?.title}
					</Text>
					<div className="flex gap-1">
						<ButtonIcon
							icon={PencilIcon}
							variant={"terciary"}
							onClick={handleEditTask}
						/>
						<ButtonIcon
							icon={TrashIcon}
							variant={"terciary"}
							onClick={handleDeleteTask}
						/>
					</div>
				</div>
			) : (
				<form onSubmit={handleSaveTask} className="flex items-center gap-4">
					<Input
						value={taskTitle}
						className="flex-1"
						onChange={handleChangeTaskTitle}
						autoFocus
						required
					/>
					<div className="flex gap-1">
						<ButtonIcon
							type="button"
							icon={XIcon}
							variant={"secundary"}
							onClick={hadleExitEditTask}
						/>
						<ButtonIcon type="submit" icon={CheckIcon} variant={"primary"} />
					</div>
				</form>
			)}
		</Card>
	)
}
