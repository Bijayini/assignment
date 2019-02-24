import React from 'react';
import { shallow } from 'enzyme';

import Loader from '../Loader';

describe('<Loader />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Loader />);
  });

  it('should match with snapshot', () => {
    expect(component.debug()).toMatchSnapshot();
  });
});