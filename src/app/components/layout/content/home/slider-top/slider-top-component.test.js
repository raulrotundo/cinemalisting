import React from 'react';
import SliderTopComponent from './slider-top-component';
import MostPopularMoviesMock from 'mock/most-popular-movies.json';

describe('SliderTopComponent Test', () => {
  it('should render SliderTopComponent without crashing', () => {
    <SliderTopComponent
      settings={{}}
      sliderData={MostPopularMoviesMock.results}
    />
  });

  it('Getting correct number of items on the slider component', () => {
    const wrapper = shallow(
      <SliderTopComponent
        settings={{}}
        sliderData={MostPopularMoviesMock.results}
      />
    );

    expect(wrapper.find('h3').length).toBe((MostPopularMoviesMock.results).length);
  });
});
