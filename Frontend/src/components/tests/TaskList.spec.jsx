import React from 'react';
import { shallow } from 'enzyme';
import TaskList from '../TaskList';


describe('TaskList', () => {
  let component;
  let props;

  beforeEach(()=>{
    props = {
      error:null,
      loading:false,
      fetchTasks:jest.fn(),
      tasks:[{
        description: 'some desc',
        status: 'some value',
        title: 'some title',
        _id:'23'
      }],
      deleteTask:jest.fn(),
      editTask:jest.fn()
    };
    component = shallow(<TaskList {...props}/>);
  });

  it('should match with snapshot', () => {
    expect(component.debug()).toMatchSnapshot();
    expect(props.fetchTasks).toHaveBeenCalled();
  });

  it('should render error component when error is not null', ()=>{
    props.error = 'some error';
    component = shallow(<TaskList {...props}/>);

    expect(component.find('Error').length).toBe(1);
  });

  it('should render loader component when loading is true', ()=>{
    props.loading = true;
    component = shallow(<TaskList {...props}/>);

    expect(component.find('Loader').length).toBe(1);
  });
});
