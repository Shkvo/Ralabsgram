import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import Auth from '../../components/Auth';
import { store } from '../mockedData';

describe('<Auth /> component:', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Auth />
        </MemoryRouter>
      </Provider>,
    );
  });

  test('Renders properly without crashing', () => {
    const app = wrapper.find('Auth');

    expect(app.exists()).toBeTruthy();
    expect(app.name()).toEqual('Auth');
  });

  test('Renders children properly', () => {
    const children = wrapper.find('Auth').children();

    expect(children.name()).toEqual('MuiThemeProvider');
    expect(children.length).toEqual(1);
  });

  test('Has proper class properties', () => {
    expect(wrapper.find('Auth').instance().accessToken).toEqual('');
  });

  test('Has proper props', () => {
    expect(wrapper.find('Auth').instance().props.isLogged).toBeFalsy();
    expect(wrapper.find('Auth').instance().props.login).toBeInstanceOf(
      Function,
    );
  });

  test('Has no state', () => {
    expect(wrapper.find('Auth').instance().state).toBeNull();
  });
});
