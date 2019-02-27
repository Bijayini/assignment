import React from 'react';
import { shallow } from 'enzyme';

import Error from '../Error';

describe('<Error />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Error />);
  });

  it('should match with snapshot', () => {
    expect(component.debug()).toMatchSnapshot();
  });
});