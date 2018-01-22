import * as types from 'constants/actionTypes';
import http from 'services/axios-wrapper';

export function getMovies(content, params) {
  return dispatch => {
    return http.get('/discover/movie', { params: params }).then(res => {
      dispatch(setMovies(content, res.data.results))
    }).catch((err) => {
      dispatch(setGetMoviesError(params, err.response.data.status_message));
    });
  }
}

export function setMovies(content, data) {
  switch (content) {
    case 'mostPopularMovies':
      return {
        type: types.SET_MOST_POPULAR_MOVIES,
        data
      }
    case 'moviesInTheaters':
      return {
        type: types.SET_MOVIES_IN_THEATERS,
        data
      }
    case 'commingSoonMovies':
      return {
        type: types.SET_COMMING_SOON_MOVIES,
        data
      }
    case 'highestRatedMovies':
      return {
        type: types.SET_HIGHEST_RATED_MOVIES,
        data
      }
    default: return false;
  }
}

export function setGetMoviesError(params, errMsg) {
  return {
    type: types.SET_GET_MOVIES_ERROR,
    params,
    errMsg
  }
}
