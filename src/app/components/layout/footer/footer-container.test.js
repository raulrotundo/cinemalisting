import React from 'react';
import FooterContainer from './footer-container';

describe('FooterContainer Test', () => {
  it('render FooterContainer without crashing', () => {
    const wrapper = shallow(<FooterContainer />);
    expect(wrapper.text()).toEqual('<FooterComponent />');
  });
});
