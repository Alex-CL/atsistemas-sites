import { useState, useEffect } from 'react'
import { Box, Button } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router'
import { AppTable, Field, Actions, Pager } from '../components'
import { Site } from '../models'
import { SiteService } from '../services'
import { Routes } from '../routes'

const siteService = new SiteService();

export const List = () => {

	const navigate = useNavigate()

	const [originalItems, setOriginalItems] = useState<Site[]>([])
	const [items, setItems] = useState<Site[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [pager, setPager] = useState<Pager>()
	const [page, setPage] = useState<number>(0)
	const [count, setCount] = useState<number>(0)
	const [rowsPerPage, setRowsPerPage] = useState<number>(5)

	useEffect(() => {
		if (!isLoading) {
			return
		}
		setIsLoading(false)

		siteService.getAll().then((res: Site[]) => {
			setCount(res.length)	
			setOriginalItems(res)
		})
	}, [isLoading])
	
	useEffect(() => {
		const start = page * rowsPerPage
		setItems(originalItems.slice(start, start + rowsPerPage))
	}, [originalItems])	
	
	useEffect(() => {
		setIsLoading(true)
		
		setPager({
			page,
			count,
			handleChangePage,
			rowsPerPage,
			handleChangeRowsPerPage
		})
	}, [page, count, rowsPerPage])
		
	const handleChangePage = (event: unknown, value: number) => setPage(value)

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (Number.isNaN(event.target.value)) {
            setRowsPerPage(10)
            return
        }
        setRowsPerPage(+event.target.value)
    }
	
	const seeSite = (s: Site) => navigate(Routes.DETAILS + s.id)
	
	const editSite = (s: Site) => navigate(Routes.EDIT + s.id)
	
	const deleteSite = () => {}

	const fields: Field<Site>[] = [
		{
			name: 'name',
			label: 'Name',			
		}, {
			name: 'publicPath',
			label: 'Public Path',
		}, {
			name: 'createDate',
			label: 'Created At',
			renderFunc: (f: Field<Site>, i: Site) => i.createDate ? i.createDate.toLocaleString() : '',
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
	
	const goBack = () => navigate(Routes.HOME)

	const containerStyle = {
		width: '80%',
		margin: 'auto',
	}
	
	const buttonStyle = {
		marginTop: '20px',
	}

	return (
		<Box sx={containerStyle}>
			<Button sx={buttonStyle} variant="outlined" startIcon={<ArrowBackIcon/>} onClick={goBack}>
				Back
			</Button>
			<AppTable 
				fields={fields}
				items={items}
				rowKeyField={'id'}
				actions={actions}
				pager={pager}
			/>
		</Box>
	)
}
