import { Routes, Route } from 'react-router-dom'
import {
	About,
	Home,
	Form,
	Search,
} from './pages'

export const AppRouter = () => {
	return (
		<Routes>
		    <Route path="/" element={<Home />} />
	        <Route path="about" element={<About />} />
	        <Route path="create" element={<Form />} />
	        <Route path="search" element={<Search />} />
      </Routes>
	)
}
