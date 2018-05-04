import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import LeftSideBar from '../../components/LeftSideBar';
import { store } from '../mockedData';

describe('<LeftSideBar /> component:', () => {
  let wrapper;
  let children;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <LeftSideBar />
        </MemoryRouter>
      </Provider>,
    );

    children = wrapper.find('LeftSideBar').children();
  });

  test('Renders properly without crashing', () => {
    const app = wrapper.find('LeftSideBar');

    expect(app.exists()).toBeTruthy();
    expect(app.name()).toEqual('LeftSideBar');
  });

  describe('Renders children properly', () => {
    test('Renders <nav> as wrapper', () => {
      expect(children.length).toEqual(1);
      expect(children.name()).toEqual('nav');
    });

    test('Renders <Link> as first child of <nav>', () => {
      expect(children.children().length).toEqual(2);
      expect(children.childAt(0).name()).toEqual('Link');
      expect(children.childAt(0).children().length).toEqual(1);

      expect(
        children
          .childAt(0)
          .children()
          .children()
          .name(),
      ).toEqual('h1');

      expect(
        children
          .childAt(0)
          .children()
          .children()
          .hasClass('logo'),
      ).toBeTruthy();

      expect(
        children
          .childAt(0)
          .children()
          .text(),
      ).toEqual('Ralabsgram');
    });

    test('Renders <div> with class .profile as second child of nav', () => {
      expect(children.childAt(1).name()).toEqual('div');
      expect(children.childAt(1).hasClass('profile')).toBeTruthy();
      expect(children.childAt(1).children().length).toEqual(4);
    });

    test('Renders <img> as first child of .profile', () => {
      expect(
        children
          .childAt(1)
          .childAt(0)
          .name(),
      ).toEqual('img');
    });

    test('Renders <h4> as second child of .profile', () => {
      expect(
        children
          .childAt(1)
          .childAt(1)
          .name(),
      ).toEqual('h4');

      expect(
        children
          .childAt(1)
          .childAt(1)
          .text(),
      ).toEqual('test name');
    });

    test('Renders <div> with class .bio as third child of .profile', () => {
      expect(
        children
          .childAt(1)
          .childAt(2)
          .name(),
      ).toEqual('div');

      expect(
        children
          .childAt(1)
          .childAt(2)
          .hasClass('bio'),
      ).toBeTruthy();

      expect(
        children
          .childAt(1)
          .childAt(2)
          .children().length,
      ).toEqual(2);
    });

    test('Renders <h5> as first child of .bio', () => {
      expect(
        children
          .childAt(1)
          .childAt(2)
          .childAt(0)
          .name(),
      ).toEqual('h5');

      expect(
        children
          .childAt(1)
          .childAt(2)
          .childAt(0)
          .text(),
      ).toEqual('test bio');
    });

    test('Renders <a> as second child of .bio', () => {
      expect(
        children
          .childAt(1)
          .childAt(2)
          .childAt(1)
          .name(),
      ).toEqual('a');

      expect(
        children
          .childAt(1)
          .childAt(2)
          .childAt(1)
          .text(),
      ).toEqual('test website');
    });

    test('Renders <div> with class .user-metrics as fourth child of .profile', () => {
      expect(
        children
          .childAt(1)
          .childAt(3)
          .name(),
      ).toEqual('div');

      expect(
        children
          .childAt(1)
          .childAt(3)
          .children().length,
      ).toEqual(3);

      expect(
        children
          .childAt(1)
          .childAt(3)
          .hasClass('user-metrics'),
      ).toBeTruthy();
    });

    test('Renders <h4> as first child of .user-metrics', () => {
      expect(
        children
          .childAt(1)
          .childAt(3)
          .childAt(0)
          .name(),
      ).toEqual('h4');

      expect(
        children
          .childAt(1)
          .childAt(3)
          .childAt(0)
          .text(),
      ).toEqual('Publications: 10');
    });

    test('Renders <Link> with followers as second child of .user-metrics', () => {
      expect(
        children
          .childAt(1)
          .childAt(3)
          .childAt(1)
          .name(),
      ).toEqual('Link');

      expect(
        children
          .childAt(1)
          .childAt(3)
          .childAt(1)
          .text(),
      ).toEqual('Followers: 34');
    });

    test('Renders <Link> with follows as first child of .user-metrics', () => {
      expect(
        children
          .childAt(1)
          .childAt(3)
          .childAt(2)
          .name(),
      ).toEqual('Link');

      expect(
        children
          .childAt(1)
          .childAt(3)
          .childAt(2)
          .text(),
      ).toEqual('Follows: 14');
    });
  });

  test('Has proper props', () => {
    expect(wrapper.find('LeftSideBar').instance().props.userInfo.id).toEqual(4);
    expect(
      wrapper.find('LeftSideBar').instance().props.getUserInfo,
    ).toBeInstanceOf(Function);
  });

  test('Has no state', () => {
    expect(wrapper.find('LeftSideBar').instance().state).toBeNull();
  });
});
