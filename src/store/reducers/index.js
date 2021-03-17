import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user';
import settingReducer from './setting';

const rootReducer = combineReducers({
  user: userReducer,
  setting: settingReducer,
});

export default rootReducer;
