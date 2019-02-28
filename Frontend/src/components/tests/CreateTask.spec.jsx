import React from 'react';
import { shallow } from 'enzyme';
import CreateTask from '../CreateTask';


describe('CreateTask', () => {
  let component;
  let props;

  beforeEach(()=>{
    props = {
      error:null,
      loading:false,
      toggleOverlay:jest.fn(),
      createTask:jest.fn()
    };
    component = shallow(<CreateTask {...props}/>);
  });

  it('should match with snapshot', () => {
    expect(component.debug()).toMatchSnapshot();
  });

  it('should render error component when error is not null', ()=>{
    props.error = 'some error';
    component = shallow(<CreateTask {...props}/>);

    expect(component.find('Loader').length).toBe(0);
    expect(component.find('TaskForm').length).toBe(0);
    expect(component.find('Error').length).toBe(1);
  });

  it('should render loader component when loading is true', ()=>{
    props.loading = true;
    component = shallow(<CreateTask {...props}/>);

    expect(component.find('Loader').length).toBe(1);
    expect(component.find('TaskForm').length).toBe(0);
    expect(component.find('Error').length).toBe(0);
  });

  it('should update title on handleChange', ()=>{
    component.instance().handleChange({target:{name:'title', value:'some value'}});

    expect(component.instance().state.title).toBe('some value');
  });

  it('should not call createTask if any form field is empty on handleSubmit', ()=>{
    component.instance().handleSubmit();

    expect(component.instance().state.hasError).toBe(true);
    expect(props.createTask).not.toHaveBeenCalled();
  });

  it('should call createTask if all form fields are having value', ()=>{
    component.setState({
      title:'some title',
      description:'some desc',
      status:'some value'
    });
    component.instance().handleSubmit();

    expect(component.instance().state.hasError).toBe(false);
    expect(props.createTask).toHaveBeenCalledWith({description: "some desc", status: "some value", title: "some title"});
  })
});
