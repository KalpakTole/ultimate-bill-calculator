import { Box, Fab, Paper } from '@mui/material';
import React, { useState } from 'react';

import FoodOptions from './FoodOptions';
import PeopleCount from './PeopleCount';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Content = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const [leftDisable, setLeftDisable] = useState(true);
	const [rightDisable, setRightDisable] = useState(false);
	const [bothDisable, setBothDisable] = useState(false);

	const previousPageHandler = () => {
		if (currentPage === 1) {
			setLeftDisable(true);
		} else {
			setCurrentPage((prevPage) => prevPage - 1);
			setLeftDisable(false);
		}
	};

	const nextPageHandler = () => {
		if (currentPage === 0) {
			setRightDisable(true);
		} else {
			setCurrentPage((prevPage) => prevPage + 1);
			setRightDisable(false);
		}
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
				height: 'calc(100vh - 14rem)',
			}}
		>
			<Box sx={{ display: currentPage === 0 ? 'initial' : 'none', overflow: 'auto' }}>
				<PeopleCount
					setLeftDisable={setLeftDisable}
					setRightDisable={setRightDisable}
					setBothDisable={setBothDisable}
				/>
			</Box>
			<Box sx={{ display: currentPage === 1 ? 'initial' : 'none', overflow: 'auto' }}>
				<FoodOptions
					setLeftDisable={setLeftDisable}
					setRightDisable={setRightDisable}
					setBothDisable={setBothDisable}
				/>
			</Box>
			<Box
				sx={{
					marginBlockStart: 'auto',
					display: 'flex',
					justifyContent: 'space-around',
					width: '100%',
					marginBlockEnd: '1rem',
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
