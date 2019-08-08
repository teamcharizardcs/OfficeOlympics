import * as actionTypes from '../constants/actionTypes';

const initialState = {
  games: [],
  newGame: '',
};

const gameReducer = (state = initialState, action) => {
  let games;
  let newGame;

  switch (action.type) {
    case actionTypes.LOAD_GAMES:
      games = action.payload; 
      // return new state
      return {
        ...state,
        games,
      };
    case actionTypes.ADD_GAME:
      games = [...state.games, action.payload];
      return {
        ...state,
        games,
      };
    case newGame.ADD_NEWGAME:
      newGame = action.payload;
      // return new state
      return {
        ...state,
        newGame,
      };
    default:
      return initialState;
  }
};

export default gameReducer;
