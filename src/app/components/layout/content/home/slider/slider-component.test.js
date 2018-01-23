import React from 'react';
import SliderComponent from './slider-component';
import MostPopularMoviesMock from 'mock/most-popular-movies.json';

describe('SliderComponent Test', () => {
  it('render SliderComponent without crashing', () => {
    <SliderComponent
      settings={{}}
      title="Most Popular Movies"
      sliderData={MostPopularMoviesMock.results}
    />
  });

  it('Getting correct number of items on the slider component', () => {
    const wrapper = shallow(
      <SliderComponent
        settings={{}}
        title="Most Popular Movies"
        sliderData={MostPopularMoviesMock.results}
      />
    );

    expect(wrapper.find('h3').length).toBe((MostPopularMoviesMock.results).length);
  });
});
