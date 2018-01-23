import React from 'react';
import HeaderComponent from './header-component';

describe('HeaderComponent Test', () => {
  it('render HeaderComponent without crashing', () => {
    shallow(<HeaderComponent />);
  });
});
