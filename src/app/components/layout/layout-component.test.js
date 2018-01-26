import React from 'react';
import LayoutComponent from './layout-component';

describe('LayoutComponent Test', () => {
  it('render LayoutComponent without crashing', () => {
    const wrapper = shallow(<LayoutComponent />);
    expect(wrapper).toBeDefined();
  });
});
