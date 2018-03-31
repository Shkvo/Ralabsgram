import React from 'react';
import App from '../../components/App';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

const saga = createSagaMiddleware();
const middlewares = [saga];
const mockStore = configureStore(middlewares);

let wrapper = null;

const store = mockStore({
  user: {
    isLogged: false,
    access_token: '',
    info: {},
    media: []
  },
  media: {
    details: {},
    comments: [],
    likes: []
  }
});

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
    const app = wrapper.find('App').children();

    expect(app.children().length).toEqual(2);
    expect(
      app
        .childAt(0)
        .find('LeftSideBar')
        .exists()
    ).toBeTruthy;

    expect(app.childAt(1).name()).toEqual('Switch');
    expect(app.childAt(1).children().length).toEqual(1);
    expect(
      app
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
