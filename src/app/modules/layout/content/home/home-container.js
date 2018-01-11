import React, { Component } from 'react';
import HomeComponent from './home-component';
import MostPopularMoviesMock from 'mock/most-popular-movies.json';

class HomeContainer extends Component {
  render() {
    return <HomeComponent
      mostPopularMovies={MostPopularMoviesMock}
    />;
  }
}

export default HomeContainer;
