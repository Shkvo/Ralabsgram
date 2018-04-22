import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

const saga = createSagaMiddleware();
const middlewares = [saga];
const mockStore = configureStore(middlewares);

export default mockStore({
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
        follows: 14,
      },
    },
    media: [
      {
        id: 5,
        images: {
          standard_resolution: {
            url: 'some first url',
          },
        },
      },
      {
        id: 13,
        images: {
          standard_resolution: {
            url: 'some second url',
          },
        },
      },
    ],
  },
  media: {
    details: {
      id: 5,
      images: {
        standard_resolution: {
          url: 'some first url',
        },
      },
      user: {
        id: 4,
        profile_picture: 'test picture url',
        username: 'test name',
        bio: 'test bio',
        website: 'test website',
        counts: {
          media: 10,
          followed_by: 34,
          follows: 14,
        },
      },
      location: {
        name: 'test location name',
      },
    },
    comments: [],
    likes: [],
  },
});
