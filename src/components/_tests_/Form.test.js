import React from 'react';
import Form from '../Form';

describe('SystemAction component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper).toMatchSnapshot();
  });
});
