import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import SliderTopContainer from './slider-top-container';
import MostPopularMoviesMock from 'mock/most-popular-movies.json';

describe('SliderTopContainer Test', () => {
  const sliderData = MostPopularMoviesMock.results;
  let props = {
    settingsTop: {},
    sliderData: sliderData
  };

  it('should render SliderTopContainer without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <SliderTopContainer {...props} />
        </MemoryRouter>
      </Provider>
      , div
    );
  });
});

