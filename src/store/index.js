import { v4 as uuidv4 } from 'uuid';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const headCountSlice = createSlice({
	name: 'peopleCount',
	initialState: {
		headCount: 2,
		gobblerNames: [
			{ id: 1, name: '' },
			{ id: 2, name: '' },
		],
	},
	reducers: {
		increaseHeadCount(state) {
			state.headCount++;
			if (state.headCount > 0) {
				state.gobblerNames = [...state.gobblerNames, { id: state.gobblerNames.length + 1, name: '' }];
			}
		},
		decreaseHeadCount(state) {
			state.headCount--;
			if (state.headCount >= 0) {
				state.gobblerNames = state.gobblerNames.slice(0, -1);
			}
		},
		handleHeadCountInputChange(state, action) {
			state.headCount = action.payload;
		},
		handleGobblerName(state, action) {
			const { gobblerId, newName } = action.payload;
			for (let i = 0; i < state.gobblerNames.length; i++) {
				if (state.gobblerNames[i].id === gobblerId) {
					state.gobblerNames[i].name = newName;
					break;
				}
			}
		}
	},
});

const store = configureStore({
	reducer: headCountSlice.reducer,
});

export const headCountActions = headCountSlice.actions;

export default store;
