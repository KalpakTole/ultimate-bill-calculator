import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react'

const Footer = () => {
  return (
		<AppBar sx={{position: 'sticky', bottom: 0, top: 'initial', left: 0, right: 0}}>
			<Toolbar>
				<Typography
					variant='body'
					component='div'
					sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', letterSpacing: '2px' }}
				>
					&copy;2022 Kalpak Tole
				</Typography>
			</Toolbar>
		</AppBar>
  );
}

export default Footer