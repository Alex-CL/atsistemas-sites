import { Box } from '@mui/material'
import { HomeButton } from './components/homeButton/HomeButton'
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HelpIcon from '@mui/icons-material/Help';
import { useNavigate } from 'react-router-dom'

function App() {

  let navigate = useNavigate();

	const routes = [
		{
			label: 'search',
			icon: (<SearchIcon/>),
			route: 'search',
		}, {
			label: 'create',
			icon: (<AddCircleOutlineIcon/>),
			route: 'create',
		}, {
			label: 'info',
			icon: (<HelpIcon/>),
			route: 'about',
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

export default App;
