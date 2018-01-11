import * as types from 'constants/actionTypes';

const initialState = {
  mostPopularMovies: [],
  moviesInTheaters: [],
  commingSoonMovies: [],
  errors: {
    msg: ''
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_MOST_POPULAR_MOVIES:
      return {
        ...state,
        mostPopularMovies: action.data
      }
    case types.SET_MOVIES_IN_THEATERS:
      return {
        ...state,
        moviesInTheaters: action.data
      }
    case types.SET_GET_MOVIES_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          msg: action.errMsg
        }
      }
    case types.SET_COMMING_SOON_MOVIES:
      return {
        ...state,
        commingSoonMovies: action.data
      }
    default: return state;
  }
}
