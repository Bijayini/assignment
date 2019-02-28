import React from 'react';
import { shallow } from 'enzyme';

import TaskForm from '../TaskForm';

describe('<TaskForm />', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {
      description: 'some desc',
      status: 'some value',
      title: 'some title',
      handleChange: jest.fn(),
      hasError:true
    };
    component = shallow(<TaskForm {...props}> Hello </TaskForm>);
  });

  it('should match with snapshot', () => {
    expect(component.debug()).toMatchSnapshot();
  });
});