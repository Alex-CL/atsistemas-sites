import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { AppTable, Field, Actions } from '../components'
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

		siteService.getAll().then((res: Site[]) => setItems(res))
	}, [isLoading])
	
	const seeSite = () => {}
	
	const editSite = () => {}
	
	const deleteSite = () => {}

	const fields: Field<Site>[] = [
		{
			name: 'name',
			label: 'Name',			
		}, {
			name: 'publicPath',
			label: 'Public Path',
		}, {
			name: 'createdDate',
			label: 'Created At',
			renderFunc: (f: Field<Site>, i: Site) => i.createdDate ? i.createdDate.toLocaleString() : '',
		}
	]
	
	const actions: Actions<Site> = {
		actionsColumn: 'Actions',
        items: [
            {
                handler: seeSite,
                icon: (<VisibilityIcon />),
                label: 'See detail',
            }, {
            	handler: editSite,
            	icon: (<EditIcon />),
            	label: 'Edit',
            }, {
            	handler: deleteSite,
            	icon: (<DeleteIcon />),
            	label: 'Delete',
            }
        ],
	}	

	const containerStyle = {
		width: '80%',
		margin: 'auto',
	}

	return (
		<Box sx={containerStyle}>
			<AppTable 
				fields={fields}
				items={items}
				rowKeyField={'id'}
				actions={actions}
			/>
		</Box>
	)
}
