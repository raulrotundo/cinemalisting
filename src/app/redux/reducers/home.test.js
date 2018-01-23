import reducer from './home';
import * as types from 'constants/ActionTypes';

describe('Home reducer', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        mostPopularMovies: [],
        moviesInTheaters: [],
        commingSoonMovies: [],
        highestRatedMovies: [],
        errors: {
          msg: ''
        }
      }
    );
  });

  it('Should handle SET_MOST_POPULAR_MOVIES', () => {
    const data = [];
    expect(
      reducer([], {
        type: types.SET_MOST_POPULAR_MOVIES,
        data
      })
    ).toEqual({
      mostPopularMovies: data
    });
  });

  it('Should handle SET_MOVIES_IN_THEATERS', () => {
    const data = [];
    expect(
      reducer([], {
        type: types.SET_MOVIES_IN_THEATERS,
        data
      })
    ).toEqual({
      moviesInTheaters: data
    });
  });

  it('Should handle SET_GET_MOVIES_ERROR', () => {
    const errMsg = 'display error';
    expect(
      reducer([], {
        type: types.SET_GET_MOVIES_ERROR,
        errMsg
      })
    ).toEqual({
      errors: {
        msg: 'display error'
      }
    });
  });

  it('Should handle SET_COMMING_SOON_MOVIES', () => {
    const data = [];
    expect(
      reducer([], {
        type: types.SET_COMMING_SOON_MOVIES,
        data
      })
    ).toEqual({
      commingSoonMovies: data
    });
  });

  it('Should handle SET_HIGHEST_RATED_MOVIES', () => {
    const data = [];
    expect(
      reducer([], {
        type: types.SET_HIGHEST_RATED_MOVIES,
        data
      })
    ).toEqual({
      highestRatedMovies: data
    });
  });
});