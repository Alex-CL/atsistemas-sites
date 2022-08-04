import { useState, useEffect } from 'react'
import { Site } from '../models'
import { SiteService } from '../services'

const siteService = new SiteService();

export const Search = () => {

	const [items, setItems] = useState<Site[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		if (!isLoading) {
			return
		}
		setIsLoading(false)

		siteService.getAll().then((res) => setItems(res))
	}, [isLoading])

	return (
		<ul>
			{items.map((i) => (<li key={i.id}>{i.name}</li>))}
		</ul>
	)
}
