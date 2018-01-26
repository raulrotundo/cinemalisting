import React from 'react';
import HeaderContainer from './header-container';

describe('HeaderContainer Test', () => {
  it('render HeaderContainer without crashing', () => {
    const wrapper = shallow(<HeaderContainer />);
    expect(wrapper.text()).toEqual('<HeaderComponent />');
  });
});
