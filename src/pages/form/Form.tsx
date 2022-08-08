import { useParams } from 'react-router'
import { Form as F } from '../../features'

export function Form() {
	const { id } = useParams()
	
	return (
		<F id={id}/>
	)
}

