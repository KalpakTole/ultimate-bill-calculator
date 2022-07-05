import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react'

const Header = () => {
  return (
		<AppBar position='sticky'>
			<Toolbar>
				<Typography variant='h6' component='div' sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', letterSpacing: '2px' }}>
					ULTIMATE BILL CALCULATOR
				</Typography>
			</Toolbar>
		</AppBar>
  );
}

export default Header