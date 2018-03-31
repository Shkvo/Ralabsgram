import React from 'react';
import Auth from '../../components/Auth';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { store } from '../mockedData';

let wrapper = null;

describe('<Auth /> component:', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Auth />
        </MemoryRouter>
      </Provider>
    );
  });

  test('Renders properly without crashing', () => {
    const app = wrapper.find('Auth');

    expect(app.exists()).toBeTruthy;
    expect(app.name()).toEqual('Auth');
  });

  test('Renders children properly', () => {
    const children = wrapper.find('Auth').children();

    expect(children.name()).toEqual('MuiThemeProvider');
    expect(children.length).toEqual(1);
  });

  test('Has proper class properties', () => {
    expect(wrapper.find('Auth').instance().access_token).toEqual('');
  });

  test('Has proper props', () => {
    expect(wrapper.find('Auth').instance().props.isLogged).toBeFalsy;
    expect(wrapper.find('Auth').instance().props.login).toBeInstanceOf(
      Function
    );
  });

  test('Has no state', () => {
    expect(wrapper.find('Auth').instance().state).toBeNull;
  });
});
