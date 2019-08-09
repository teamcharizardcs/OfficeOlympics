import * as actionTypes from '../constants/actionTypes';

const initialState = {
  games: {},
  newGame: '',
};

const gameReducer = (state = initialState, action) => {
  let games;
  let newGame;

  switch (action.type) {
    case actionTypes.LOAD_GAMES:
      games = action.payload; 
      // return new state
      console.log('load games');
      return {
        ...state,
        games,
      };
    case actionTypes.ADD_GAME:
      games = {...state.games};
      games[action.payload] = [];
      return {
        ...state,
        games,
      };
    case actionTypes.SET_NEWGAME:
      newGame = action.payload;
      // return new state
      return {
        ...state,
        newGame,
      };
    default:
      console.log('returning default');
      return initialState;
  }
};

export default gameReducer;
