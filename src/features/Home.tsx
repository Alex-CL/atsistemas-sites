import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import ListAltIcon from '@mui/icons-material/ListAlt'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import HelpIcon from '@mui/icons-material/Help'
import { Routes } from '../routes'
import { HomeButton } from '../components'

export function Home() {

  const navigate = useNavigate();

	const routes = [
		{
			label: 'list',
			icon: (<ListAltIcon/>),
			route: Routes.LIST,
		}, {
			label: 'create',
			icon: (<AddCircleOutlineIcon/>),
			route: Routes.CREATE,
		}, {
			label: 'info',
			icon: (<HelpIcon/>),
			route: Routes.ABOUT,
		},
	]
  
  const containerStyle = {
	minHeight: '100%',
    width: '80%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
    flexFlow: 'wrap',
  }
  
  return (
  	<Box sx={containerStyle}>
  		{routes.map((r) => (
  			<HomeButton key={r.label} label={r.label} icon={r.icon} onClick={() => navigate(r.route)}/>
  		))}
  	</Box>
  )
}
