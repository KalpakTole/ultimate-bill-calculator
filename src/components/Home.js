import React from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { Box } from '@mui/material';

const Home = () => {
	return (
		<Box sx={{display: 'flex', flexDirection: 'column'}}>
			<Header />
			<Content />
			<Footer />
		</Box>
	);
};

export default Home;
