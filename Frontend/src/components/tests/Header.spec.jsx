import React from 'react';
import { shallow } from 'enzyme';

import {Header} from '../Header';
import { routePaths } from '../../utils/config';

describe('Header', () => {
  let component;
  let props;

  beforeEach(()=>{
    props = {
        location:{
          pathname:routePaths.TASKS
        }
    };
    component = shallow(<Header {...props}/>);
  });

  it('should match with snapshot', () => {
    expect(component.debug()).toMatchSnapshot();
  });

  it('should open modal on clicking on plus button', () => {
    component.find('Button').simulate('click');

    expect(component.instance().state.isOverlayOpen).toBe(true);
  });

  it('should not have create a task button for other route except todos', ()=>{
    const newProps = {
        location:{
            pathname:'/some_random'
        }
    };
    component = shallow(<Header {...newProps}/>);

    expect(component.find('Button').length).toBe(0);
  })

});
