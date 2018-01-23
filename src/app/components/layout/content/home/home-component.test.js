import React from 'react';
import HomeComponent from './home-component';

describe('HomeComponent Test', () => {
  it('render HomeComponent without crashing', () => {
    shallow(<HomeComponent />);
  });
});
