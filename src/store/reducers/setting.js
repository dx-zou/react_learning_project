import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  breadcrumbs: [],
};

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setBreadcrumbs(state, action) {
      Object.assign(state, action.payload);
    },
  },
});

export const { setBreadcrumbs } = settingSlice.actions;
export default settingSlice.reducer;
