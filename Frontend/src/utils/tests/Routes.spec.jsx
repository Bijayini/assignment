import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Home from '../../pages/Home';
import Tasks from '../../pages/Tasks';
import Error from '../../pages/Error';
import Routes from '../Routes';
import { Provider } from 'react-redux';
import store from '../store';

describe('Routes', () => {
  it('should redirect to Home page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Routes/>
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(Tasks)).toHaveLength(0);
    expect(wrapper.find(Error)).toHaveLength(0);
  });

  it('should redirect to Tasks page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/Tasks']}>
        <Provider store={store}>
          <Routes/>
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(Tasks)).toHaveLength(1);
    expect(wrapper.find(Error)).toHaveLength(0);
  });

  it('should redirect to Error page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/Error']}>
        <Routes/>
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(Tasks)).toHaveLength(0);
    expect(wrapper.find(Error)).toHaveLength(1);
  });
});