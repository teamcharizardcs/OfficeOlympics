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
import * as types from '../constants/actionTypes';

export const addUserInfo = userObj => ({
  type: types.ADD_USERINFO,
  payload: {
    username: userObj.username,
    id: userObj.id,
    company: userObj.company,
    office: userObj.office,
  },
});

export const addGame = game => ({
  type: types.ADD_GAME,
  payload: game,
});

export const loadGames = gamesArray => ({
  type: types.LOAD_GAMES,
  payload: gamesArray,
});

export const addNewGame = newGameString => ({
  type: types.ADD_NEWGAME,
  payload: newGameString,
});
