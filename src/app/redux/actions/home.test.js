import * as types from 'constants/actionTypes';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import instance from 'services/axiosconfig'
import thunk from 'redux-thunk';
import * as actions from './home';
import { initialState } from 'redux/reducers/home';
import MostPopularMoviesMock from 'mock/most-popular-movies.json';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

describe('Home actions', () => {

  beforeEach(() => {
    moxios.install(instance);
  });

  afterEach(function () {
    moxios.uninstall(instance);
  })

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

  it('GET discover/movie request should return Movie data', function () {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: MostPopularMoviesMock
      });
    });

    const data = MostPopularMoviesMock.results;
    const expectedActions = {
      type: types.SET_MOST_POPULAR_MOVIES,
      data
    };

    return store.dispatch(actions.getMovies('mostPopularMovies', {
      sort_by: 'popularity.desc'
    })).then(() => {
      expect(store.getActions()[0]).toEqual(expectedActions);
    });
  });
});