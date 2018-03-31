import React from 'react';
import App from '../../components/App';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { store } from '../mockedData';

let wrapper = null;

describe('<App /> component:', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
  });

  test('Renders properly without crashing', () => {
    const app = wrapper.find('App');

    expect(app.exists()).toBeTruthy;
    expect(app.hasClass('app')).toBeTruthy;
  });

  test('Renders children properly', () => {
    const children = wrapper.find('App').children();

    expect(children.children().length).toEqual(2);
    expect(
      children
        .childAt(0)
        .find('LeftSideBar')
        .exists()
    ).toBeTruthy;

    expect(children.childAt(1).name()).toEqual('Switch');
    expect(children.childAt(1).children().length).toEqual(1);
    expect(
      children
        .childAt(1)
        .children()
        .find('Feed')
        .exists()
    ).toBeTruthy;
  });

  test('Has proper props', () => {
    expect(wrapper.find('App').instance().props.accessToken).toEqual('');
  });

  test('Has no state', () => {
    expect(wrapper.find('App').instance().state).toBeNull;
  });
});
