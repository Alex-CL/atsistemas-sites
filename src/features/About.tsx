import { useNavigate } from 'react-router'
import { Box, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Routes } from '../routes'

const link = "http://www.github.com/Alex-CL"

export const About = () => {

	const navigate = useNavigate()

	const faqs = [
		{
			question: 'Goal',
			answer: <p>This app has been created for a technical interview. It uses an API to make CRUD operations about sites.</p>
		}, {
			question: 'About me',
			answer: 
				<>
					<p>
						You can take a look at my <a href={link}>personal Github page</a>.
					</p>
					<p>
						At the moment, I don't have too many projects, but I want to improve those which already exists ;)
					</p>
				</>,
			
		}
	
	]
	
	const goBack = () => navigate(Routes.HOME)

	const container = {
		height: '70%',
		textAlign: 'justify',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	}
	
	const buttonStyle = {
		marginTop: '20px',
		marginLeft: '20px',
	}

	return (
		<>
			<Button sx={buttonStyle} variant="outlined" startIcon={<ArrowBackIcon/>} onClick={goBack}>
				Back
			</Button>
			<Box sx={container}>
				<ul>
				{faqs.map((f) => (
					<li key={f.question}>
						<b>{f.question}</b>
						{f.answer}
					</li>
				))}
				</ul>
			</Box>
		</>
	)
}
