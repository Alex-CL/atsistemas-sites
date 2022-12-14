import { ReactNode } from 'react'
import { Container, Typography, Paper } from '@mui/material'

type LayoutProps = {
	children: ReactNode
}

export const Layout = (props: LayoutProps) => {

	const title = {
		textAlign: 'center',
		fontSize: '3rem',
		fontWeight: '400',
	  }

	  const paper = {
		marginTop: '15px',
		marginBottom: 'auto',
		minHeight: '700px',
	  };
	  

	return (
		<div style={{ background: "#F2F2F2", minHeight: "100vh" }}>
			<Container maxWidth="md">
			  <Typography sx={title} gutterBottom>
				Sites
			  </Typography>
			  <Paper sx={paper}>
			  	{props.children}
			  </Paper>
			</Container>
  		</div>
	)
}
