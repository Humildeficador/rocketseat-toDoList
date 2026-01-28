import { Container } from "../components/Container/Container"
import { TaskItem } from "../core-components/TaskItem/TaskItem"
import { TaskSummary } from "../core-components/TaskSummary/TaskSummary"

export function PageHome() {
	return (
		<Container as="article" className="space-y-3">
			<header className="flex justify-between">
				<TaskSummary />
			</header>
				<TaskItem />
		</Container>
	)
}
