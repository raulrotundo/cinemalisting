import React from 'react';
import FooterComponent from './footer-component';

describe('FooterComponent Test', () => {
  it('render FooterComponent without crashing', () => {
    shallow(<FooterComponent />);
  });
});
