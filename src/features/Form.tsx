import { useState, useEffect } from 'react'
import { Box, TextField, Button } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import { useLocation, useNavigate } from 'react-router'
import { Site, SiteDTO, emptySiteDTO } from '../models'

export const Form = () => {
	const location = useLocation()
	const navigate = useNavigate()
	
	const [excludedKeys, setExcludedKeys] = useState<string[]>(['id'])
	
	const [site, setSite] = useState<SiteDTO>(emptySiteDTO())
	const [isEditing, setIsEditing] = useState<boolean>(false)
	

	useEffect(() => {
		if (location.pathname.endsWith('/create')) {
			setIsEditing(false)
			setExcludedKeys([...excludedKeys, 'createDate'])
		} else {
			setIsEditing(true)
		}
	}, [])
	
	const setSiteChange = (k: string, v: string | Date) => setSite({ ...site, [k]: v })

	const renderField = (k: keyof SiteDTO): JSX.Element => {
		if (k === 'createDate') {
			return <>{new Date(site.createDate).toLocaleString()}</>
		}
		
		const multiline = k === 'description'
		
		return (
			<TextField
				value={site[k]}
				type={k === 'key' ? 'password' : 'text'}
				onChange={(e) => setSiteChange(k, e.target.value)}
				rows={multiline ? 5 : 0}
				multiline={multiline}
				size="small"
			/>
		)
	}
	
	const transformKey = (k: string): string => {
		switch (k) {
			case 'publicPath':
				return 'Public path'
			case 'createDate':
				return 'Created At'
			default:
				return k.charAt(0).toUpperCase() + k.slice(1)
		}
	}
	
	const goBack = () => {
		if (isEditing) {
			navigate('/list')	
		} else {
			navigate('/')
		}
	}

	const saveSite = () => {
		
	}
	
	const container = {
		width: '50%',
		paddingTop: '20px',
		margin: 'auto',
	}

	const labelStyle = {
		width: '100px',
		textAlign: 'right',
		marginRight: '10px',
		marginTop: '10px',
	}
	
	const valueStyle = {
		marginBottom: '20px',
	}
	
	const createDateStyle = {
		paddingTop: '10px',
	}

	const buttonContainer = {
		display: 'flex',
		justifyContent: 'space-around',
	}

	return (
		<Box>
			<Box sx={container}>
				{Object.keys(site).filter((k) => !excludedKeys.includes(k)).map((k) => {
				
				const style = k === 'createDate' ? createDateStyle : {}
				
				return (
					<Box display="flex" justify-content="space-around" sx={{ width: '100%' }}>
						<Box sx={labelStyle}>{transformKey(k)}: </Box>
						<Box sx={{...valueStyle, ...style}}>{renderField(k as keyof SiteDTO)}</Box>
					</Box>
				)})}
			</Box>
			<Box sx={buttonContainer}>
				<Button variant="outlined" color="secondary" onClick={goBack}>
					Cancel
				</Button>
				<Button variant="outlined" endIcon={<SaveIcon />} onClick={saveSite}>
					Save
				</Button>
			</Box>
		</Box>
	)
}
