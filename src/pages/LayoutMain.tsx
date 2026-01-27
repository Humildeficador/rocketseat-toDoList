import { Outlet } from 'react-router'
import { Footer } from "../core-components/Footer/Footer"
import { Header } from "../core-components/Header/Header"
import { MainContent } from "../core-components/MainContent/MainContent"

export function LayoutMain() {
	return (
		<>
			<Header />
			<MainContent>
				<Outlet />
			</MainContent>
			<Footer />
		</>
	)
}
