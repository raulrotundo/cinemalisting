import * as types from 'constants/actionTypes';
import * as actions from './home';

describe('Home actions', () => {
  it('Should create an action to set a movie error', () => {
    const params = [];
    const errMsg = 'Error';
    const expectedAction = {
      type: types.SET_GET_MOVIES_ERROR,
      params,
      errMsg
    };

    expect(actions.setGetMoviesError(params, errMsg)).toEqual(expectedAction);
  });

  it('Should create an action to set a movie', () => {
    const data = [];

    expect(actions.setMovies('mostPopularMovies', data)).toEqual({
      type: types.SET_MOST_POPULAR_MOVIES,
      data
    });
    expect(actions.setMovies('moviesInTheaters', data)).toEqual({
      type: types.SET_MOVIES_IN_THEATERS,
      data
    });
    expect(actions.setMovies('commingSoonMovies', data)).toEqual({
      type: types.SET_COMMING_SOON_MOVIES,
      data
    });
    expect(actions.setMovies('highestRatedMovies', data)).toEqual({
      type: types.SET_HIGHEST_RATED_MOVIES,
      data
    });
    expect(actions.setMovies('', data)).toEqual(false);
  });
})