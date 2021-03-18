import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  breadcrumbs: [],
  locale: localStorage.getItem('locale') || 'zh_CN',
};

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setBreadcrumbs(state, action) {
      Object.assign(state, action.payload);
    },
    setLocale(state, action) {
      localStorage.setItem('locale', action.payload.locale);
      Object.assign(state, action.payload);
    },
  },
});

export const { setBreadcrumbs, setLocale } = settingSlice.actions;
export default settingSlice.reducer;
