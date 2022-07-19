import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, List, ListItem, ListItemText, ListSubheader, Paper, TextField, Typography } from '@mui/material';

import NumberFormat from 'react-number-format';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

import { useSelector, useDispatch } from 'react-redux';
import { headCountActions } from '../store/index';

const PeopleCount = ({ setBothDisable }) => {
	const dispatch = useDispatch();
	const headCount = useSelector((state) => state.headCount);
	const gobblerNames = useSelector((state) => state.gobblerNames);

	// const [headCount, setHeadCount] = useState(2);
	const [headCountHelperText, setHeadCountHelperText] = useState(' ');
	const [headCountError, setHeadCountError] = useState(false);
	const currentGobbler = useRef(null);
	const [filledArray, setFilledArray] = useState([]);

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
		let tempArray = [...filledArray];
		if (headCount >= 0) {
			tempArray.push({ id: tempArray.length + 1, name: '' });
			setFilledArray(tempArray);
		}
	};

	const decreaseHeadCount = () => {
		dispatch(headCountActions.decreaseHeadCount());
		let tempArray = [...filledArray];
		if (headCount >= 1) {
			tempArray = tempArray.slice(0, -1);
			setFilledArray(tempArray);
		}
	};

	const handleGobblerAddition = () => {
		dispatch(headCountActions.addGobbler(currentGobbler.current.value));
	};

	const handleGobblerRemoval = (index) => {
		dispatch(headCountActions.removeGobbler(index));
	};

	const changeGobblerName = (gobblerId, newName) => {
		let currentArray = [...filledArray];
		for (let i = 0; i < currentArray.length; i++) {
			if (currentArray[i].id === gobblerId) {
				currentArray[i].name = newName;
				break;
			}
		}
		setFilledArray(currentArray);
	};

	useEffect(() => {
		let tempArray = new Array(headCount);
		for (let i = 0; i < headCount; i++) {
			tempArray[i] = { id: i + 1, name: '' };
		}
		setFilledArray(tempArray);
	}, []);

	useEffect(() => {
		let flag = true;
		filledArray.forEach((ele) => {
			if (ele.name === '') {
				flag = false;
				setBothDisable(true);
				return;
			}
		});
		if (filledArray.length === 0) {
			setBothDisable(true);
			return;
		}
		if (flag) {
			setBothDisable(false);
		}
	}, [filledArray, setBothDisable]);

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
			{/* <Typography variant='h6' sx={{ marginBlock: '0.5rem', fontWeight: '400' }}>
				Enter their names
			</Typography> */}
			{/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<TextField
					id='gobbler-name-input'
					label='Gobblers'
					variant='outlined'
					sx={{ width: '75%', marginBlock: '0.5rem' }}
					inputRef={currentGobbler}
					size='small'
				/>
				<Button variant='contained' onClick={handleGobblerAddition} sx={{ width: '25%' }}>
					Add
				</Button>
			</Box> */}
			<Box sx={{ maxWidth: '20rem' }}>
				<Typography sx={{ marginBlock: '1rem', fontWeight: '400' }} variant='h6' component='div'>
					Enter their names:
				</Typography>
				<Paper sx={{ width: '20rem', maxHeight: '18rem', overflow: 'auto' }}>
					<List>
						{filledArray.map((gobbler) => (
							<ListItem
								key={gobbler.id}
								// secondaryAction={
								// 	<IconButton
								// 		edge='end'
								// 		aria-label='remove-gobbler'
								// 		onClick={() => handleGobblerRemoval(gobbler.id)}
								// 	>
								// 		<ClearIcon />
								// 	</IconButton>
								// }
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
