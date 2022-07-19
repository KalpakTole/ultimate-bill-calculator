import { Box, Fab, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';

import FoodOptions from './FoodOptions';
import PeopleCount from './PeopleCount';
import ItemDetails from './ItemDetails';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Content = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const [leftDisable, setLeftDisable] = useState(true);
	const [rightDisable, setRightDisable] = useState(false);
	const [bothDisable, setBothDisable] = useState(false);

	const previousPageHandler = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};

	const nextPageHandler = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	useEffect(() => {
		if (currentPage === 0) {
			setLeftDisable(true);
		} else if (currentPage === 2) {
			setRightDisable(true);
		} else {
			setRightDisable(false);
			setLeftDisable(false);
		}
	}, [currentPage]);

	return (
		<Paper
			elevation={4}
			sx={{
				width: '90%',
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
				marginInline: 'auto',
				marginBlock: '1rem',
				padding: '1rem',
				flexGrow: 1,
			}}
		>
			{/* <Box sx={{ display: currentPage === 0 ? 'initial' : 'none', overflow: 'auto' }}>
				<PeopleCount setBothDisable={setBothDisable} />
			</Box> */}
			{currentPage === 0 && <PeopleCount setBothDisable={setBothDisable} />}
			<Box sx={{ display: currentPage === 1 ? 'initial' : 'none', overflow: 'auto' }}>
				<FoodOptions setBothDisable={setBothDisable} />
			</Box>
			<Box sx={{ display: currentPage === 2 ? 'initial' : 'none', overflow: 'auto' }}>
				<ItemDetails setBothDisable={setBothDisable} />
			</Box>
			<Box
				sx={{
					marginBlockStart: 'auto',
					display: 'flex',
					justifyContent: 'space-around',
					width: '100%',
				}}
			>
				<Fab
					color='secondary'
					aria-label='previous'
					onClick={previousPageHandler}
					disabled={leftDisable || bothDisable}
				>
					<ChevronLeftIcon />
				</Fab>
				<Fab
					color='secondary'
					aria-label='next'
					onClick={nextPageHandler}
					disabled={rightDisable || bothDisable}
				>
					<ChevronRightIcon />
				</Fab>
			</Box>
		</Paper>
	);
};

export default Content;
