import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import SliderTopComponent from './slider-top-component';
import MostPopularMoviesMock from 'mock/most-popular-movies.json';

describe('SliderTopComponent Test', () => {
  const sliderData = MostPopularMoviesMock.results;
  let props = {
    settings: {},
    sliderData: sliderData
  };

  it('should render SliderTopComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <SliderTopComponent {...props} />
        </MemoryRouter>
      </Provider>
      , div
    );
  });
});

