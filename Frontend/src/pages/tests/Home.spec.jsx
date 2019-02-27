import React from 'react';
import { shallow } from 'enzyme';

import Home from '../Home';
import { routePaths } from '../../utils/config';

describe('<Home />', () => {
  const component = shallow(<Home />);

  it('should have link with redirection to tasks page', () => {
    expect(component.find('Link').length).toBe(1);
    expect(component.find('Link').props().to).toBe(routePaths.TASKS);
  });
});