import * as types from 'constants/actionTypes';

export const initialState = {
  mostPopularMovies: [],
  moviesInTheaters: [],
  commingSoonMovies: [],
  highestRatedMovies: [],
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
    case types.SET_HIGHEST_RATED_MOVIES:
      return {
        ...state,
        highestRatedMovies: action.data
      }
    default: return state;
  }
}
