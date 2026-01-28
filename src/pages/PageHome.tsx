import { Container } from "../components/Container/Container"
import { TaskList } from "../core-components/TaskList/TaskList"
import { TaskSummary } from "../core-components/TaskSummary/TaskSummary"

export function PageHome() {
	return (
		<Container as="article" className="space-y-3">
			<header className="flex justify-between">
				<TaskSummary />
			</header>
			<TaskList />
		</Container>
	)
}
