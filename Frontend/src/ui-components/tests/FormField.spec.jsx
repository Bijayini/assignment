import React from 'react';
import { shallow } from 'enzyme';

import FormField from '../FormField';

describe('<FormField />', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {
      label:'some label',
      labelFor:'someId',
      children:<span>Some input</span>
    };
    component = shallow(<FormField {...props} />);
  });

  it('should match with snapshot', () => {
    expect(component.debug()).toMatchSnapshot();
  });
});