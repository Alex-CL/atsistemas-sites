import { Button } from '@mui/material'

type HomeButtonProps = {
	label: string,
	icon: JSX.Element,
	onClick: () => void,
}

export const HomeButton = (props: HomeButtonProps) => {
	 const buttonStyle = {
		height: '100px',
		width: '100px',
		display: 'flex',
		flexDirection: 'column',
	  }
  
  return (
  	<Button sx={buttonStyle} variant="outlined" onClick={props.onClick}>
		{props.icon}
  		{props.label}
  	</Button>	
  )
}
