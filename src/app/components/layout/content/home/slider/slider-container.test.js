import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import SliderContainer from './slider-container';
import MostPopularMoviesMock from 'mock/most-popular-movies.json';

describe('SliderContainer Test', () => {
  const sliderData = MostPopularMoviesMock.results;
  let props = {
    settings: {},
    title: 'Title Test',
    sliderData: sliderData
  };

  it('should render SliderContainer without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <SliderContainer {...props} />
        </MemoryRouter>
      </Provider>
      , div
    );
  });
});

