import {
	Box,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormHelperText,
	MenuItem,
	Paper,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';
import NumberFormat from 'react-number-format';

const FoodOptions = () => {
	const [foodOptions, setFoodOptions] = useState({ veg: true, nonVeg: false, drinks: false, others: false });
	const [separateBill, setSeparateBill] = useState('yes');
	const [foodTaxes, setFoodTaxes] = useState({ veg: 0, nonVeg: 0, drinks: 0, others: 0 });

	const handleSeparateBillChange = (e) => {
		console.log(e);
		setSeparateBill(e.target.value);
	};

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

	const handleFoodTaxes = (foodType, value) => {
		if (foodType === 'veg') {
			setFoodTaxes((prevFoodTaxes) => {
				return { ...prevFoodTaxes, veg: value };
			});
		} else if (foodType === 'nonVeg') {
			setFoodTaxes((prevFoodTaxes) => {
				return { ...prevFoodTaxes, nonVeg: value };
			});
		} else if (foodType === 'drinks') {
			setFoodTaxes((prevFoodTaxes) => {
				return { ...prevFoodTaxes, drinks: value };
			});
		} else if (foodType === 'others') {
			setFoodTaxes((prevFoodTaxes) => {
				return { ...prevFoodTaxes, others: value };
			});
		}
	};

	return (
		<>
			<Typography variant='h5' sx={{ marginBlockEnd: '1rem', fontSize: '20px', textAlign: 'center' }}>
				Select your food categories!
			</Typography>
			<Paper sx={{ display: 'flex', flexDirection: 'column', margin: '1rem', padding: '0.5rem' }}>
				<Box sx={{ display: 'flex', justifyContent: 'flex-end', marginInline: '4rem' }}>
					<Typography variant='body2'>Taxes</Typography>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
					<NumberFormat
						customInput={TextField}
						value={foodTaxes.veg}
						displayType={'input'}
						decimalScale={2}
						suffix={' %'}
						allowNegative={false}
						onValueChange={(values) => {
							const { floatValue } = values;
							handleFoodTaxes('veg', floatValue);
						}}
						size={'small'}
						sx={{ maxWidth: '30%' }}
						disabled={!foodOptions.veg}
					></NumberFormat>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
					<NumberFormat
						customInput={TextField}
						value={foodTaxes.nonVeg}
						displayType={'input'}
						decimalScale={2}
						suffix={' %'}
						allowNegative={false}
						onValueChange={(values) => {
							const { floatValue } = values;
							handleFoodTaxes('nonVeg', floatValue);
						}}
						size={'small'}
						sx={{ maxWidth: '30%' }}
						disabled={!foodOptions.nonVeg}
					></NumberFormat>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
					<NumberFormat
						customInput={TextField}
						value={foodTaxes.drinks}
						displayType={'input'}
						decimalScale={2}
						suffix={' %'}
						allowNegative={false}
						onValueChange={(values) => {
							const { floatValue } = values;
							handleFoodTaxes('drinks', floatValue);
						}}
						size={'small'}
						sx={{ maxWidth: '30%' }}
						disabled={!foodOptions.drinks}
					></NumberFormat>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
					<NumberFormat
						customInput={TextField}
						value={foodTaxes.others}
						displayType={'input'}
						decimalScale={2}
						suffix={' %'}
						allowNegative={false}
						onValueChange={(values) => {
							const { floatValue } = values;
							handleFoodTaxes('others', floatValue);
						}}
						size={'small'}
						sx={{ maxWidth: '30%' }}
						disabled={!foodOptions.others}
					></NumberFormat>
				</Box>
			</Paper>
			<Paper sx={{ display: 'flex', flexDirection: 'column', margin: '1rem', padding: '0.5rem' }}>
				<Box sx={{ minWidth: 300 }}>
					<Typography sx={{ marginBlock: '0.5rem' }}>Separate bill?</Typography>
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
