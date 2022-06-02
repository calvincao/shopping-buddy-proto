import { combineReducers } from 'redux';

import listReducer from './listReducer.js';

const reducers = combineReducers({
  list: listReducer,
});

export default reducers;
