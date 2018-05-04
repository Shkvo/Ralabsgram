import reducer from '../../reducers/user';

describe('User reducer:', () => {
  let previousState;

  beforeEach(() => {
    previousState = {
      isLogged: false,
      access_token: '',
      info: {},
      media: [],
    };
  });

  test('should handle LOGIN', () => {
    const action = {
      type: 'LOGIN',
      payload: 'token',
    };

    expect(reducer(previousState, action)).toEqual({
      info: {},
      media: [],
      isLogged: true,
      access_token: 'token',
    });
  });

  test('should handle GET_USER_INFO_SUCCESS', () => {
    const action = {
      type: 'GET_USER_INFO_SUCCESS',
      payload: {
        username: 'Jake',
      },
    };

    expect(reducer(previousState, action)).toEqual({
      info: {
        username: 'Jake',
      },
      media: [],
      isLogged: false,
      access_token: '',
    });
  });

  test('should handle GET_USER_MEDIA_SUCCESS', () => {
    const action = {
      type: 'GET_USER_MEDIA_SUCCESS',
      payload: [
        {
          image: '12345.jpg',
          by: 'Jake',
          data: 'some data',
        },
      ],
    };

    expect(reducer(previousState, action)).toEqual({
      info: {},
      media: [
        {
          image: '12345.jpg',
          by: 'Jake',
          data: 'some data',
        },
      ],
      isLogged: false,
      access_token: '',
    });
  });

  test('should handle default case', () => {
    const action = {
      type: 'RANDOM',
    };

    expect(reducer(previousState, action)).toEqual({
      info: {},
      media: [],
      isLogged: false,
      access_token: '',
    });
  });
});
