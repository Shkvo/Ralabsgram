import reducer from '../../reducers/media';

describe('Media reducer:', () => {
  let previousState;

  beforeEach(() => {
    previousState = {
      details: {},
      comments: [],
      likes: [],
    };
  });

  test('should handle GET_MEDIA_DETAILS_SUCCESS', () => {
    const action = {
      type: 'GET_MEDIA_DETAILS_SUCCESS',
      payload: {
        someDetails: 'test details',
      },
    };

    expect(reducer(previousState, action)).toEqual({
      details: {
        someDetails: 'test details',
      },
      comments: [],
      likes: [],
    });
  });

  test('should handle GET_MEDIA_COMMENTS_SUCCESS', () => {
    const action = {
      type: 'GET_MEDIA_COMMENTS_SUCCESS',
      payload: [
        {
          text: 'comment text',
        },
      ],
    };

    expect(reducer(previousState, action)).toEqual({
      details: {},
      comments: [
        {
          text: 'comment text',
        },
      ],
      likes: [],
    });
  });

  test('should handle GET_MEDIA_LIKES_SUCCESS', () => {
    const action = {
      type: 'GET_MEDIA_LIKES_SUCCESS',
      payload: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
    };

    expect(reducer(previousState, action)).toEqual({
      details: {},
      comments: [],
      likes: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
    });
  });

  test('should handle POST_MEDIA_COMMENT', () => {
    const action = {
      type: 'POST_MEDIA_COMMENT',
      payload: {
        text: 'new comment',
      },
    };

    const modifiedPreviousState = {
      ...previousState,
      comments: [
        {
          text: 'old comment',
        },
      ],
    };

    expect(reducer(modifiedPreviousState, action)).toEqual({
      details: {},
      comments: [
        {
          text: 'old comment',
        },
        {
          text: 'new comment',
        },
      ],
      likes: [],
    });
  });

  test('should handle DELETE_MEDIA_COMMENT', () => {
    const action = {
      type: 'DELETE_MEDIA_COMMENT',
      payload: 1,
    };

    const modifiedPreviousState = {
      ...previousState,
      comments: [
        {
          text: 'first comment',
        },
        {
          text: 'second comment',
        },
        {
          text: 'third comment',
        },
      ],
    };

    expect(reducer(modifiedPreviousState, action)).toEqual({
      details: {},
      comments: [
        {
          text: 'first comment',
        },
        {
          text: 'third comment',
        },
      ],
      likes: [],
    });
  });

  test('should handle POST_MEDIA_LIKE', () => {
    const action = {
      type: 'POST_MEDIA_LIKE',
      payload: {
        id: '1',
        username: 'Jake',
      },
    };

    expect(reducer(previousState, action)).toEqual({
      details: {},
      comments: [],
      likes: [
        {
          id: '1',
          username: 'Jake',
        },
      ],
    });
  });

  test('should handle DELETE_MEDIA_LIKE', () => {
    const action = {
      type: 'DELETE_MEDIA_LIKE',
      payload: 2,
    };

    const modifiedPreviousState = {
      ...previousState,
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
      ],
    };

    expect(reducer(modifiedPreviousState, action)).toEqual({
      details: {},
      comments: [],
      likes: [
        {
          id: 1,
        },
        {
          id: 3,
        },
      ],
    });
  });

  test('should handle default case', () => {
    const action = {
      type: 'RANDOM',
    };

    expect(reducer(previousState, action)).toEqual({
      details: {},
      comments: [],
      likes: [],
    });
  });
});
