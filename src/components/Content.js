import { Box, Button, Fab, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import FoodOptions from './FoodOptions';
import PeopleCount from './PeopleCount';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Content = () => {
	const [currentPage, setCurrentPage] = useState(0);

	const previousPageHandler = () => {
		if (currentPage === 0) return;
		else setCurrentPage((prevPage) => prevPage - 1);
	};

	const nextPageHandler = () => {
		if (currentPage === 1) return;
		else setCurrentPage((prevPage) => prevPage + 1);
	};

	return (
		<Paper
			sx={{
				width: '90%',
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
				marginInline: 'auto',
				marginBlock: '2rem',
				flexGrow: 1,
				height: 'calc(100vh - 200px)',
			}}
		>
			<Box sx={{ display: currentPage === 0 ? 'initial' : 'none' }}>
				<PeopleCount />
			</Box>
			<Box sx={{ display: currentPage === 1 ? 'initial' : 'none' }}>
				<FoodOptions />
			</Box>
			<Box sx={{ marginBlockStart: 'auto', display: 'flex', justifyContent: 'space-around', width: '100%', marginBlockEnd: '1rem' }}>
				<Fab color='secondary' aria-label='previous' onClick={previousPageHandler}>
					<ChevronLeftIcon />
				</Fab>
				<Fab color='secondary' aria-label='next' onClick={nextPageHandler}>
					<ChevronRightIcon />
				</Fab>
			</Box>
		</Paper>
	);
};

export default Content;
