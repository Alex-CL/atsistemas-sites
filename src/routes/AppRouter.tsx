import { Routes, Route } from 'react-router-dom'
import {
	About,
	Home,
	Form,
	List,
} from '../pages'

export const AppRouter = () => {
	return (
		<Routes>
		    <Route path="/" element={<Home />} />
	        <Route path="about" element={<About />} />
	        <Route path="create" element={<Form />} />
	        <Route path="edit/:id" element={<Form />} />
	        <Route path="details/:id" element={<Form />} />
	        <Route path="list" element={<List />} />
    	</Routes>
	)
}
