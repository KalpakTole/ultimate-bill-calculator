import React, { useState } from 'react';
import { Box, Button, FormControl, FormHelperText, MenuItem, Select, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import NumberFormat from 'react-number-format';

const ItemDetails = () => {
	const [dialogOpen, setDialogOpen] = useState(false);
	const [currentItem, setCurrentItem] = useState({ name: '', category: 'veg', value: 0 });
	const [items, setItems] = useState([]);

	const handleClickOpen = () => {
		setDialogOpen(true);
	};

	const handleClose = () => {
		setDialogOpen(false);
	};

	const handleAddItem = () => {
		console.log(currentItem);
		setItems((allCurrentItems) => {
			return [...allCurrentItems, currentItem];
		});
		setDialogOpen(false);
	};

	return (
		<>
			<Box>
				<Button variant='outlined' onClick={handleClickOpen}>
					Add Item
				</Button>
				<Dialog open={dialogOpen} onClose={handleClose} maxWidth='xs'>
					<DialogTitle>Add an item!</DialogTitle>
					<DialogContent>
						<DialogContentText>Please add an item which the gobblers gobbled!</DialogContentText>
						<Typography variant='body2' sx={{ marginBlockStart: '2rem', marginBlockEnd: '0.5rem' }}>
							Item Name
						</Typography>
						<TextField
							autoFocus
							margin='none'
							id='itemName'
							label='Item Name'
							type='text'
							variant='outlined'
							fullWidth
							value={currentItem.name}
							onChange={(e) =>
								setCurrentItem((prevItem) => {
									return { ...prevItem, name: e.target.value };
								})
							}
						/>
						<Typography variant='body2' sx={{ marginBlock: '0.5rem' }}>
							Item Price
						</Typography>
						<NumberFormat
							customInput={TextField}
							value={currentItem.value}
							displayType={'input'}
							decimalScale={2}
							prefix={'₹ '}
							allowNegative={false}
							onValueChange={(values) => {
								const { floatValue } = values;
								setCurrentItem((prevItem) => {
									return { ...prevItem, value: floatValue };
								});
							}}
							size={'large'}
							placeholder='Item Price'
							fullWidth
							disabled={false}
						></NumberFormat>
						<Typography variant='body2' sx={{ marginBlock: '0.5rem' }}>
							Item Category
						</Typography>
						<FormControl fullWidth>
							<Select
								labelId='item-category'
								id='item-category'
								value={currentItem.category}
								onChange={(e) => {
									setCurrentItem((prevItem) => {
										return { ...prevItem, category: e.target.value };
									});
								}}
								fullWidth
							>
								<MenuItem value={'veg'}>Vegetarian</MenuItem>
								<MenuItem value={'nonVeg'}>Non-Vegetarian</MenuItem>
								<MenuItem value={'drinks'}>Drinks</MenuItem>
								<MenuItem value={'others'}>Others</MenuItem>
							</Select>
							<FormHelperText>Select category of the item</FormHelperText>
						</FormControl>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Cancel</Button>
						<Button onClick={handleAddItem}>Add</Button>
					</DialogActions>
				</Dialog>
			</Box>
			<Box>
				{items.map((item) => (
					<Box key={item.name}>
						<Typography>{item.name}</Typography>
						<Typography>{item.value}</Typography>
						<Typography>{item.category}</Typography>
					</Box>
				))}
			</Box>
		</>
	);
};

export default ItemDetails;
