import React from 'react';
import HomeComponent from './home-component';
import MostPopularMoviesMock from 'mock/most-popular-movies.json';
import MoviesInTheatersMock from 'mock/in-theaters-movies.json';
import CommingSoonMoviesMock from 'mock/comming-soon-movies.json';
import HighestRatedMoviesMock from 'mock/highest-rated-movies.json';

describe('HomeComponent Test', () => {
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

  it('should render HomeComponent without crashing', () => {
    const wrapper = shallow(<HomeComponent {...props} />);
    expect(wrapper).toBeDefined();
  });
});
