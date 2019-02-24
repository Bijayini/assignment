import React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button';

describe('<Button />', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {
      variant: 'secondary',
      size: 'small',
      onClick: jest.fn(),
    };
    component = shallow(<Button {...props}> Hello </Button>);
  });

  it('should match with snapshot', () => {
    expect(component.debug()).toMatchSnapshot();
  });
});