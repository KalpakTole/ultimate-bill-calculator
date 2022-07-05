import { Box, Checkbox, FormControl, FormControlLabel, FormHelperText, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material';
import React, { useState } from 'react';

const FoodOptions = () => {
	const [foodOptions, setFoodOptions] = useState({ veg: true, nonVeg: false, drinks: false, others: false });
	const [separateBill, setSeparateBill] = useState('yes')

	const handleSeparateBillChange = (e) => {
		console.log(e)
		setSeparateBill(e.target.value)
	}

	const handleFoodOptionsCheckboxes = (foodType) => {
		if (foodType === 'veg') {
			setFoodOptions((prevFoodOptions) => {
				return { ...prevFoodOptions, veg: !prevFoodOptions.veg };
			});
		} else if (foodType === 'nonVeg') {
			setFoodOptions((prevFoodOptions) => {
				return { ...prevFoodOptions, nonVeg: !prevFoodOptions.nonVeg };
			});
		} else if (foodType === 'drinks') {
			setFoodOptions((prevFoodOptions) => {
				return { ...prevFoodOptions, drinks: !prevFoodOptions.drinks };
			});
		} else if (foodType === 'others') {
			setFoodOptions((prevFoodOptions) => {
				return { ...prevFoodOptions, others: !prevFoodOptions.others };
			});
		}
	};

	return (
		<>
			<Typography variant='h5' sx={{ marginBlock: '1rem', textAlign: 'center' }}>
				Select your food categories!
			</Typography>
			<Paper sx={{ display: 'flex', flexDirection: 'column', margin: '1rem', padding: '1rem' }}>
				<FormControlLabel
					control={
						<Checkbox
							checked={foodOptions.veg}
							onChange={() => {
								handleFoodOptionsCheckboxes('veg');
							}}
						/>
					}
					label='Vegetarian'
				/>
				<FormControlLabel
					control={
						<Checkbox
							checked={foodOptions.nonVeg}
							onChange={() => {
								handleFoodOptionsCheckboxes('nonVeg');
							}}
						/>
					}
					label='Non-Vegetarian'
				/>
				<FormControlLabel
					control={
						<Checkbox
							checked={foodOptions.drinks}
							onChange={() => {
								handleFoodOptionsCheckboxes('drinks');
							}}
						/>
					}
					label='Drinks'
				/>
				<FormControlLabel
					control={
						<Checkbox
							checked={foodOptions.others}
							onChange={() => {
								handleFoodOptionsCheckboxes('others');
							}}
						/>
					}
					label='Others'
				/>
				<Box sx={{ minWidth: 300 }}>
					<Typography sx={{ marginBlock: '2rem 0.5rem' }}>Separate bill?</Typography>
					<FormControl fullWidth sx={{ marginBlock: '0.5rem' }}>
						<Select
							labelId='separate-bill-category'
							id='separate-bill-category'
							value={separateBill}
							onChange={handleSeparateBillChange}
						>
							<MenuItem value={'yes'}>Yes</MenuItem>
							<MenuItem value={'no'}>No</MenuItem>
						</Select>
						<FormHelperText>Separate bill for each Category?</FormHelperText>
					</FormControl>
				</Box>
			</Paper>
		</>
	);
};

export default FoodOptions;
