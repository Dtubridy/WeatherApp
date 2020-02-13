import React from 'react';
import Weather from '../Weather';

describe('SystemAction component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Weather />);
    expect(wrapper).toMatchSnapshot();
  });
});
