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
		}
	]
  
  return (
  	<Box display="flex" justify-content="space-around">
  		{routes.map((r) => (
  			<HomeButton label={r.label} icon={r.icon} onClick={() => navigate(r.route)}/>
  		))}
  	</Box>
  )
}

export default App;
