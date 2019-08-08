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
export const addUserInfo = (userObj) => ({
    type: types.ADD_USERINFO,
    payload: {
      username: userObj.username,
      id: userObj.id,
      company: userObj.company,
      office: userObj.office,
    },
  });

  export const addGameArray = (gamesArray) => ({
    type: types.ADD_GAME,
    payload: {
      games: gamesArray.games,
      
    }
  });

  export const addNewGame = (newGameString) => ({
    type: types.ADD_NEWGAME,
    payload: {
    newGame: newGameString
    }
  });