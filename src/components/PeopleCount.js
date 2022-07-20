import React, { useEffect, useState } from 'react';
import { Box, List, ListItem, Paper, TextField, Typography } from '@mui/material';

import NumberFormat from 'react-number-format';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { useSelector, useDispatch } from 'react-redux';
import { headCountActions } from '../store/index';

const PeopleCount = ({ setBothDisable }) => {
	const dispatch = useDispatch();
	const headCount = useSelector((state) => state.headCount);
	const gobblerNames = useSelector((state) => state.gobblerNames);
	const [headCountHelperText, setHeadCountHelperText] = useState(' ');
	const [headCountError, setHeadCountError] = useState(false);

	const handleHeadCount = (e) => {
		let val = e.floatValue;
		if (val === undefined) {
			setHeadCountError(true);
			setHeadCountHelperText('Please enter a valid number');
			setBothDisable(true);
		} else if (val < 2) {
			setHeadCountError(true);
			setHeadCountHelperText('Please enter a number greater than 2');
			setBothDisable(true);
		} else {
			setHeadCountError(false);
			setHeadCountHelperText(' ');
			setBothDisable(false);
		}
		dispatch(headCountActions.handleHeadCountInputChange(val));
	};

	const increaseHeadCount = () => {
		dispatch(headCountActions.increaseHeadCount());
	};

	const decreaseHeadCount = () => {
		dispatch(headCountActions.decreaseHeadCount());
	};

	const changeGobblerName = (gobblerId, newName) => {
		dispatch(headCountActions.handleGobblerName({ gobblerId, newName }));
	};

	useEffect(() => {
		let flag = true;
		gobblerNames.forEach((ele) => {
			if (ele.name === '') {
				flag = false;
				setBothDisable(true);
				return;
			}
		});
		if (gobblerNames.length === 0) {
			setBothDisable(true);
			return;
		}
		if (flag) {
			setBothDisable(false);
		}
		console.log(gobblerNames);
	}, [gobblerNames, setBothDisable]);

	return (
		<>
			<Typography variant='h5' sx={{ marginBlockEnd: '1rem', fontSize: '20px' }}>
				Enter number of food gobblers!
			</Typography>
			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
				<IconButton size='medium' onClick={decreaseHeadCount}>
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
					size='small'
				></NumberFormat>
				<IconButton size='medium' onClick={increaseHeadCount}>
					<AddIcon />
				</IconButton>
			</Box>
			<Box sx={{ maxWidth: '20rem' }}>
				<Typography variant='h5' sx={{ marginBlock: '1rem', fontSize: '20px' }}>
					Enter their names:
				</Typography>
				<Paper sx={{ width: '20rem', maxHeight: '18rem', overflow: 'auto' }}>
					<List>
						{gobblerNames.map((gobbler) => (
							<ListItem
								key={gobbler.id}
								sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
							>
								<Typography
									variant='body1'
									sx={{
										marginInlineEnd: '0.5rem',
										backgroundColor: 'secondary.main',
										borderRadius: '50%',
										padding: '0.25rem',
										width: '2.25rem',
										height: '2rem',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										color: 'black',
										fontWeight: 500,
									}}
								>
									{gobbler.id}
								</Typography>
								<TextField
									id='gobbler-name-input'
									label={`Gobbler ${gobbler.id}`}
									variant='outlined'
									// inputRef={currentGobbler}
									size='small'
									value={gobbler.name}
									fullWidth
									onChange={(e) => changeGobblerName(gobbler.id, e.target.value)}
								/>
							</ListItem>
						))}
					</List>
				</Paper>
			</Box>
		</>
	);
};

export default PeopleCount;
