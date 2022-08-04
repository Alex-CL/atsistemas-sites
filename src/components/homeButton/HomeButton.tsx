import { Button, Icon } from '@mui/material'

type HomeButtonProps = {
	label: string,
	icon: JSX.Element,
	onClick: () => void,
}

export const HomeButton = (props: HomeButtonProps) => {
	 const buttonStyle = {
	 	marginTop: '30px',
		height: '250px',
		width: '250px',
		display: 'flex',
		flexDirection: 'column',
		borderColor: '#17754e',
		color: '#17754e',
		fontSize: '1.5rem',
		
		'&:hover': {
			borderColor: '#17754e',
			backgroundColor: '#F2F2F2',
			textDecoration: 'underline'
		},
	  }
  
  const iconStyle = {
  	height: '30%',
  	width: '50px',
  	
  	'.MuiSvgIcon-root': {
	  	fontSize: '50px',  		
  	},
  }
  
  return (
  	<Button sx={buttonStyle} variant="outlined" onClick={props.onClick}>
		<Icon sx={iconStyle}>{props.icon}</Icon>
  		{props.label}
  	</Button>	
  )
}
