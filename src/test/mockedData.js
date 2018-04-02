import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

const saga = createSagaMiddleware();
const middlewares = [saga];
const mockStore = configureStore(middlewares);

export const store = mockStore({
  user: {
    isLogged: false,
    access_token: '',
    info: {
      id: 4,
      profile_picture: 'test picture url',
      username: 'test name',
      bio: 'test bio',
      website: 'test website',
      counts: {
        media: 10,
        followed_by: 34,
        follows: 14
      }
    },
    media: []
  },
  media: {
    details: {},
    comments: [],
    likes: []
  }
});