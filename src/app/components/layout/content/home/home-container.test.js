import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import HomeContainer from './home-container';
import MostPopularMoviesMock from 'mock/most-popular-movies.json';
import MoviesInTheatersMock from 'mock/in-theaters-movies.json';
import CommingSoonMoviesMock from 'mock/comming-soon-movies.json';
import HighestRatedMoviesMock from 'mock/highest-rated-movies.json';

describe('HomeContainer Test', () => {
  const mostPopularMovies = MostPopularMoviesMock.results;
  const moviesInTheaters = MoviesInTheatersMock.results;
  const commingSoonMovies = CommingSoonMoviesMock.results;
  const highestRatedMovies = HighestRatedMoviesMock.results;

  let props = {
    mostPopularMovies: mostPopularMovies,
    moviesInTheaters: moviesInTheaters,
    commingSoonMovies: commingSoonMovies,
    highestRatedMovies: highestRatedMovies
  };

  it('should render HomeContainer without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <HomeContainer {...props} />
        </MemoryRouter>
      </Provider>
      , div
    );
  });
});
