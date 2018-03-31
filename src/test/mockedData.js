import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

const saga = createSagaMiddleware();
const middlewares = [saga];
const mockStore = configureStore(middlewares);

export const store = mockStore({
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
