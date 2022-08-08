import { useParams, useLocation } from 'react-router'
import { Form as F } from '../../features'

export function Form() {
	const { id } = useParams()
	
	const location = useLocation()
	
	return (
		<F id={id} readOnly={location.pathname.startsWith('/details')}/>
	)
}

