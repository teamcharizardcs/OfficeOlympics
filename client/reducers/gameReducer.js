import * as types from '../constants/actionTypes';
const initialState = {
games:[],
newGame: ''
}

export default gameReducer = (state = initialState, action) => {
let games;
let newGame;

switch(action.type) {
  case actionTypes.ADD_GAME:
    games = action.payload.games; 
    // return new state
    return {
      ...state,
          games
    } 
  case newGame.ADD_NEWGAME:
    newGame = action.payload.newGame;
    // return new state
    return {
      ...state,
        newGame
    }
  default:
    return initialState;
    //return initial
}
}



// const initialState = {
//   isSigned: false,
//   company: {
//     name: 'Codesmith',
//     id: 1
//   },
//   office: {
//     name: 'LA',
//     id: 1
//   },
//   user: {
//       userid: '',
//       avatar: 'https://www.secondcity.com/wp-content/uploads/2018/11/Eric-Stallings.jpg',
//       userName: '',
//       gamesPlaying: ['Smash Bros'],
//   },
//   newGameName: '',
//   currentGame: '',
//   games: [
//     {
//     name: 'Smash Bros.',
//     users: {
//       1: 'Eric',
//       2: 'Devon',
//       3: 'Vance',
//     }
//   },
//   {
//     name: 'Rage Cage.',
//     users: {
//       1: 'Jay',
//       2: 'Michele',
//       3: 'Justin',
//     }
//   },
// ], 
// };

const gameReducer = (state= initialState, action) => {
  switch (action.type) {
    case populateSideBarHandler:
      //   this.setState({
      //     user:{
      //     userid: user.userid,
      //     avatar: user.avatar,
      //     userName: user.userName,
      //     gamesPlaying: user.gamesPlaying
      //   }
      // })

      const user = action.payload;

      return {
        ...state,
        user
      };
      
      break;
  
    default:
      break;
  }
}