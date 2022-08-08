import { Routes, Route } from 'react-router-dom'
import { Routes as R } from './routes'
import {
	About,
	Home,
	Form,
	List,
} from '../pages'

export const AppRouter = () => {
	return (
		<Routes>
		    <Route path={R.HOME} element={<Home />} />
	        <Route path={R.ABOUT} element={<About />} />
	        <Route path={R.CREATE} element={<Form />} />
	        <Route path={R.EDIT_ID} element={<Form />} />
	        <Route path={R.DETAILS_ID} element={<Form />} />
	        <Route path={R.LIST} element={<List />} />
    	</Routes>
	)
}
