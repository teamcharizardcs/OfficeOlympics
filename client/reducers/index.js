/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  // if we had other reducers, they would go here
  game: gameReducer,
  user: userReducer,
});

export default reducers;
