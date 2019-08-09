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

export const addGame = gameObj => ({
  type: types.ADD_GAME,
  payload: gameObj,
});

export const loadGames = gamesArray => ({
  type: types.LOAD_GAMES,
  payload: gamesArray,
});

export const setNewGame = newGameString => ({
  type: types.SET_NEWGAME,
  payload: newGameString,
});
