import * as types from 'constants/actionTypes';
import fetch from 'services/fetch-wrapper';

export function getMovies(content, params) {
  return dispatch => {
    return fetch.get('/discover/movie', { params: params }).then(res => {
      dispatch(setMovies(content, res.data.results))
    }).catch((err) => {
      if (!err.response) {
        dispatch(setGetMoviesError(params, { msg: 'Network Error' }));
      } else {
        dispatch(setGetMoviesError(params, err.response.data.status_message));
      }
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
