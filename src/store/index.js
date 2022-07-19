import { v4 as uuidv4 } from 'uuid';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const headCountSlice = createSlice({
	name: 'peopleCount',
	initialState: { headCount: 2, gobblerNames: [] },
	reducers: {
		increaseHeadCount(state) {
			state.headCount++;
		},
		decreaseHeadCount(state) {
			state.headCount--;
		},
		handleHeadCountInputChange(state, action) {
			state.headCount = action.payload;
		},
		addGobbler(state, action) {
			state.gobblerNames = [...state.gobblerNames, { id: uuidv4(), name: action.payload }];
		},
		removeGobbler(state, action) {
			state.gobblerNames = state.gobblerNames.filter((gobbler) => {
				return gobbler.id !== action.payload;
			});
		},
	},
});

const store = configureStore({
	reducer: headCountSlice.reducer,
});

export const headCountActions = headCountSlice.actions;

export default store;
