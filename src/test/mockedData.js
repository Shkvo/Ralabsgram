import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

const saga = createSagaMiddleware();
const middlewares = [saga];
const mockStore = configureStore(middlewares);

export const props = {
  accessToken: '',
  deleteMediaComment() {},
  deleteMediaLike() {},
  getMediaComments() {},
  getMediaDetails() {},
  getMediaLikes() {},
  postMediaComment() {},
  postMediaLike() {},
  history: '',
  location: {
    pathname: 'some/test/location',
  },
  mediaComments: [
    {
      from: {
        username: 'somename',
      },
      text: 'test comment text',
    },
    {
      from: {
        username: 'somename',
      },
      text: 'test comment text',
    },
    {
      from: {
        username: 'somename',
      },
      text: 'test comment text',
    },
    {
      from: {
        username: 'somename',
      },
      text: 'test comment text',
    },
  ],
  mediaDetails: {
    id: 5,
    images: {
      standard_resolution: {
        url: 'some first url',
      },
    },
    location: {
      name: 'test location name',
    },
    user: {
      bio: 'test bio',
      counts: {
        followed_by: 34,
        follows: 14,
        media: 10,
      },
      id: 4,
      profile_picture: 'test picture url',
      username: 'test name',
      website: 'test website',
    },
  },
  mediaLikes: [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ],
  userInfo: {
    bio: 'test bio',
    counts: {
      followed_by: 34,
      follows: 14,
      media: 10,
    },
    id: 4,
    profile_picture: 'test picture url',
    username: 'test name',
    website: 'test website',
  },
};

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
    comments: [
      {
        from: {
          username: 'somename',
        },
        text: 'test comment text',
      },
      {
        from: {
          username: 'somename',
        },
        text: 'test comment text',
      },
      {
        from: {
          username: 'somename',
        },
        text: 'test comment text',
      },
      {
        from: {
          username: 'somename',
        },
        text: 'test comment text',
      },
    ],
    likes: [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
      {
        id: 5,
      },
      {
        id: 6,
      },
    ],
  },
});
