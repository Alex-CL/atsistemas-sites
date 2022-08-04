import { useState, useEffect } from 'react'
import { Site } from '../models'
import { SiteService } from '../services/SiteService'

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
			{items.map((i) => (<li>{i.name}</li>))}
		</ul>
	)
}
