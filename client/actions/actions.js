/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes'
import { bindActionCreators } from 'redux';


cd 
export const populateSideBarHandler = (user) => ({
    type: types.populateSideBarHandler,
    payload: user,
  });

  export const populateGameDisplayHandler = (games) => ({
    type: types.populateGameDisplayHandler,
    payload: games,
  });

  export const populateGameHandler = (game) => ({
    type: types.populateGameHandler,
    payload: game,
  });

  export const addGameToOfficeHandler = (game) => ({
    type: types.addGameToOfficeHandler,
    payload: game,
  });

  export const changeUserRankHandler = (gameName, users) => ({
    type: types.changeUserRankHandler,
    payload: gameName, users
  });

  export const loginHandler = (user) => ({
    type: types.loginHandler,
    payload: user,
  });

  export const signupHandler = (user) => ({
    type: types.signupHandler,
    payload: user,
  });