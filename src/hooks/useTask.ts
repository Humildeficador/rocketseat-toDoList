import useLocalStorage from "use-local-storage"
import { TASKS_KEY, type Task, TaskState } from "../models/tasks"

export function useTask() {
	const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, [])

	function prepareTask() {
		setTasks([
			...tasks,
			{
				id: Math.random().toString(36).substring(2, 9),
				title: "",
				state: TaskState.Creating,
			},
		])
	}

	function updateTask(id: string, payload: { title: Task["title"] }) {
		setTasks(
			tasks.map((task) =>
				task.id === id
					? { ...task, state: TaskState.Created, ...payload }
					: task,
			),
		)
	}

	function deleteTask(id: string) {
		setTasks(tasks.filter((task) => id !== task.id))
	}

	function updateTaskStatus(id: string, status: boolean) {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, concluded: status } : task,
			),
		)
	}

	return {
		prepareTask,
		updateTask,
		deleteTask,
		updateTaskStatus
	}
}
