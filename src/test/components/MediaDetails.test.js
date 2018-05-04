import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MediaDetails from '../../components/MediaDetails';
import { store, props } from '../mockedData';

describe('<MediaDetails /> component:', () => {
  let wrapper;
  let children;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <MuiThemeProvider>
            <MediaDetails
              location={{
                pathname: 'some/test/location',
              }}
            />
          </MuiThemeProvider>
        </MemoryRouter>
      </Provider>,
    );

    children = wrapper.find('MediaDetails').children();
  });

  test('Component renders properly without crashing', () => {
    expect(wrapper.find('MediaDetails').exists()).toBeTruthy();
  });

  describe('Renders children properly', () => {
    test('Renders <div> with class .media-details as wrapper', () => {
      expect(children.length).toEqual(1);
      expect(children.name()).toEqual('div');
      expect(children.hasClass('media-details')).toBeTruthy();
    });

    test('Renders <i> with class .fa-chevron-left as icon', () => {
      expect(children.childAt(0).name()).toEqual('div');
      expect(
        children
          .childAt(0)
          .children()
          .name(),
      ).toEqual('i');

      expect(
        children
          .childAt(0)
          .children()
          .hasClass('fa-chevron-left'),
      ).toBeTruthy();
    });

    test('Renders <section> as second child', () => {
      expect(children.childAt(1).name()).toEqual('section');
      expect(children.childAt(1).children().length).toEqual(2);
    });

    test('Renders <div> with class .media-details-photo', () => {
      expect(
        children
          .childAt(1)
          .childAt(0)
          .name(),
      ).toEqual('div');

      expect(
        children
          .childAt(1)
          .childAt(0)
          .hasClass('media-details-photo'),
      ).toBeTruthy();
    });

    test('Renders <img> as first child', () => {
      expect(
        children
          .childAt(1)
          .childAt(0)
          .childAt(0)
          .name(),
      ).toEqual('img');

      expect(
        children
          .childAt(1)
          .childAt(0)
          .childAt(0)
          .props().src,
      ).toEqual('some first url');
    });

    test('Renders <i> with classes .fa-heart.main-heart as second child', () => {
      expect(
        children
          .childAt(1)
          .childAt(0)
          .childAt(1)
          .name(),
      ).toEqual('i');

      expect(
        children
          .childAt(1)
          .childAt(0)
          .childAt(1)
          .hasClass('fa-heart main-heart'),
      ).toBeTruthy();
    });

    test('Renders <div> with class .likes-container as third child', () => {
      expect(
        children
          .childAt(1)
          .childAt(0)
          .childAt(2)
          .name(),
      ).toEqual('div');

      expect(
        children
          .childAt(1)
          .childAt(0)
          .childAt(2)
          .hasClass('likes-container'),
      ).toBeTruthy();

      expect(
        children
          .childAt(1)
          .childAt(0)
          .childAt(2)
          .children().length,
      ).toEqual(2);
    });

    test('Renders <span> with total count of likes', () => {
      expect(
        children
          .childAt(1)
          .childAt(0)
          .childAt(2)
          .childAt(0)
          .name(),
      ).toEqual('span');

      expect(
        children
          .childAt(1)
          .childAt(0)
          .childAt(2)
          .childAt(0)
          .text(),
      ).toEqual('6');
    });

    test('Renders <i> with classes .fa-heart.main-heart as second child', () => {
      expect(
        children
          .childAt(1)
          .childAt(0)
          .childAt(2)
          .childAt(1)
          .name(),
      ).toEqual('i');

      expect(
        children
          .childAt(1)
          .childAt(0)
          .childAt(2)
          .childAt(1)
          .hasClass('fa-heart likes'),
      ).toBeTruthy();
    });

    test('Renders <aside> as second child', () => {
      expect(
        children
          .childAt(1)
          .childAt(1)
          .name(),
      ).toEqual('aside');

      expect(
        children
          .childAt(1)
          .childAt(1)
          .children().length,
      ).toEqual(3);
    });

    test('Renders <div> with class .user as first child', () => {
      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(0)
          .name(),
      ).toEqual('div');

      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(0)
          .hasClass('user'),
      ).toBeTruthy();
    });

    test('Renders <img> with user profile photo', () => {
      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(0)
          .childAt(0)
          .name(),
      ).toEqual('img');

      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(0)
          .childAt(0)
          .props().src,
      ).toEqual('test picture url');
    });

    test('Renders <div> with user profile details', () => {
      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(0)
          .childAt(1)
          .name(),
      ).toEqual('div');

      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(0)
          .childAt(1)
          .children().length,
      ).toEqual(2);
    });

    test('Renders <h4> with username', () => {
      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(0)
          .childAt(1)
          .childAt(0)
          .name(),
      ).toEqual('h4');

      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(0)
          .childAt(1)
          .childAt(0)
          .text(),
      ).toEqual('test name');
    });

    test('Renders <h5> with username', () => {
      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(0)
          .childAt(1)
          .childAt(1)
          .name(),
      ).toEqual('h5');

      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(0)
          .childAt(1)
          .childAt(1)
          .text(),
      ).toEqual('test location name');
    });

    test('Renders <div> with comments', () => {
      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(1)
          .name(),
      ).toEqual('div');

      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(1)
          .hasClass('comments'),
      ).toBeTruthy();

      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(1)
          .children().length,
      ).toEqual(4);
    });

    test('Renders <div> with comment info', () => {
      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(1)
          .childAt(0)
          .name(),
      ).toEqual('div');

      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(1)
          .childAt(0)
          .childAt(0)
          .name(),
      ).toEqual('span');

      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(1)
          .childAt(0)
          .childAt(1)
          .text(),
      ).toEqual('test comment text');
    });

    test('Renders <div> with comment info', () => {
      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(1)
          .childAt(0)
          .name(),
      ).toEqual('div');

      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(1)
          .childAt(0)
          .childAt(0)
          .text(),
      ).toEqual('somename');

      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(1)
          .childAt(0)
          .childAt(0)
          .childAt(1)
          .children()
          .name(),
      ).toEqual('i');

      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(1)
          .childAt(0)
          .childAt(0)
          .childAt(1)
          .children()
          .hasClass('fa-times'),
      ).toBeTruthy();

      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(1)
          .childAt(0)
          .childAt(1)
          .text(),
      ).toEqual('test comment text');
    });

    test('Renders <div> with class .comment-input', () => {
      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(2)
          .name(),
      ).toEqual('div');

      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(2)
          .hasClass('comment-input'),
      ).toBeTruthy();

      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(2)
          .children().length,
      ).toEqual(2);
    });

    test('Renders <input> with as first child', () => {
      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(2)
          .childAt(0)
          .name(),
      ).toEqual('input');

      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(2)
          .childAt(0)
          .props().value,
      ).toEqual('');
    });

    test('Renders <div> as second child with class .send-button-wrapper', () => {
      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(2)
          .childAt(1)
          .name(),
      ).toEqual('div');

      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(2)
          .childAt(1)
          .hasClass('send-button-wrapper'),
      ).toBeTruthy();
    });

    test('Renders <i> with class .fa-paper-plane', () => {
      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(2)
          .childAt(1)
          .children()
          .name(),
      ).toEqual('i');

      expect(
        children
          .childAt(1)
          .childAt(1)
          .childAt(2)
          .childAt(1)
          .children()
          .hasClass('fa-paper-plane'),
      ).toBeTruthy();
    });
  });

  test('Has proper props', () => {
    const wrapperStore = wrapper.find('MediaDetails').instance().props;

    expect(JSON.parse(JSON.stringify(wrapperStore))).toEqual(
      JSON.parse(JSON.stringify(props)),
    );
  });

  test('Has proper state', () => {
    const state = {
      commentText: '',
      loading: false,
    };
    expect(wrapper.find('MediaDetails').instance().state).toEqual(state);
  });

  test('Has proper methods', () => {
    expect(
      wrapper.find('MediaDetails').instance().getHistoryPreviousPath,
    ).toBeInstanceOf(Function);
    expect(
      wrapper.find('MediaDetails').instance().handleCommentChange,
    ).toBeInstanceOf(Function);
    expect(
      wrapper.find('MediaDetails').instance().handleCommentPost,
    ).toBeInstanceOf(Function);
    expect(
      wrapper.find('MediaDetails').instance().handleCommentDelete,
    ).toBeInstanceOf(Function);
    expect(
      wrapper.find('MediaDetails').instance().handleLikeChange,
    ).toBeInstanceOf(Function);
  });

  test('handleCommentChange method works properly', () => {
    const event = {
      target: {
        value: 'changed comment text',
      },
    };

    expect(wrapper.find('MediaDetails').instance().state.commentText).toEqual(
      '',
    );

    wrapper
      .find('MediaDetails')
      .instance()
      .handleCommentChange(event);

    expect(wrapper.find('MediaDetails').instance().state.commentText).toEqual(
      'changed comment text',
    );
  });

  test('handleCommentPost method works properly', () => {
    const event = {
      target: {
        value: 'changed comment text',
      },
    };

    wrapper
      .find('MediaDetails')
      .instance()
      .handleCommentChange(event);

    expect(wrapper.find('MediaDetails').instance().state.commentText).toEqual(
      'changed comment text',
    );

    wrapper
      .find('MediaDetails')
      .instance()
      .handleCommentPost();

    expect(wrapper.find('MediaDetails').instance().state.commentText).toEqual(
      '',
    );
  });
});
