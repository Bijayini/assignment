import React from 'react';
import { shallow } from 'enzyme';
import DeleteTask from '../DeleteTask';


describe('DeleteTask', () => {
  let component;
  let props;

  beforeEach(()=>{
    props = {
      id:34,
      handelClick:jest.fn()
    };
    component = shallow(<DeleteTask {...props}/>);
  });

  it('should match with snapshot', () => {
    expect(component.debug()).toMatchSnapshot();
  });

  it('should call handelClick on handelDelete', ()=>{
    component.instance().handelDelete();

    expect(props.handelClick).toHaveBeenCalledWith(34);
  })
});
