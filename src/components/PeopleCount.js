import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';

import NumberFormat from 'react-number-format';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const PeopleCount = (props) => {
	const [headCount, setHeadCount] = useState(2);
	const [headCountHelperText, setHeadCountHelperText] = useState(' ');
	const [headCountError, setHeadCountError] = useState(false);

	const handleHeadCount = (e) => {
		let val = e.floatValue;
		if (val === undefined) {
			setHeadCountError(true);
			setHeadCountHelperText('Please enter a valid number');
			// props.setLeftDisable(true);
			props.setBothDisable(true);
		} else if (val < 2) {
			setHeadCountError(true);
			setHeadCountHelperText('Please enter a number greater than 2');
			// props.setLeftDisable(true);
			props.setBothDisable(true);
		} else {
			setHeadCountError(false);
			setHeadCountHelperText(' ');
			// props.setLeftDisable(false);
			props.setBothDisable(false);
		}
		setHeadCount(val);
	};

	const decreaseHeadCount = () => {
		setHeadCount((prevHC) => {
			return prevHC - 1;
		});
	};

	const increaseHeadCount = () => {
		setHeadCount((prevHC) => {
			return prevHC + 1;
		});
	};

	return (
		<>
			<Typography variant='h5' sx={{marginBlock: '1rem'}}>Enter number of food gobblers!</Typography>
			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<IconButton size='large' onClick={decreaseHeadCount}>
					<RemoveIcon />
				</IconButton>
				<NumberFormat
					customInput={TextField}
					value={headCount}
					displayType='input'
					decimalScale={0}
					onValueChange={handleHeadCount}
					error={headCountError}
					helperText={headCountHelperText}
					sx={{ width: '15rem' }}
				></NumberFormat>
				<IconButton size='large' onClick={increaseHeadCount}>
					<AddIcon />
				</IconButton>
			</Box>
		</>
	);
};

export default PeopleCount;
