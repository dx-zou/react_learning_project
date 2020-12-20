import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	noticeCount: 0,
	newUser: false,
	logged: true,
	menuList: [],
	username: 'feeng',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserItem(state, action) {
			const { username } = action.payload;

			if (username !== state.username) {
				localStorage.setItem('username', action.payload.username || '');
			}

			Object.assign(state, action.payload);
		},
	},
});

export const { setUserItem } = userSlice.actions;
export default userSlice.reducer;
