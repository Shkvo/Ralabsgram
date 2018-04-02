import React from 'react';
import Feed from '../../components/Feed';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { store } from '../mockedData';

let wrapper = null;
let children = null;

describe('<Feed /> component:', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>    
          <Feed />
        </MemoryRouter>
      </Provider>
    );

    children = wrapper.find('Feed').children();
    
  });

  test('Renders properly without crashing', () => {
    const app = wrapper.find('Feed');

    expect(app.exists()).toBeTruthy;
    expect(app.name()).toEqual('Feed');
  });

  describe('Renders children properly', () => {

    test('Renders <div> with class .feed-container as wrapper', () => {
      expect(children.length).toEqual(1);
      expect(children.name()).toEqual('div');
      expect(children.hasClass('feed-container')).toBeTruthy;     
    });

    test('Renders media children properly', () => {
      expect(children.children().length).toEqual(2);
    });


    test('Renders first children properly', () => {
      expect(children.childAt(0).name()).toEqual('Link');
      expect(children.childAt(0).props().to).toEqual('/media/5');
      expect(children.childAt(0).children().children().name()).toEqual('img');
      expect(children.childAt(0).children().children().props().src).toEqual('some first url');
    });

    test('Renders first children properly', () => {
      expect(children.childAt(1).name()).toEqual('Link');
      expect(children.childAt(1).props().to).toEqual('/media/13');
      expect(children.childAt(1).children().children().name()).toEqual('img');
      expect(children.childAt(1).children().children().props().src).toEqual('some second url');
    });

  });

  test('Has proper props', () => {
    expect(wrapper.find('Feed').instance().props.userMedia[0].id).toEqual(5);
    expect(wrapper.find('Feed').instance().props.getUserMedia).toBeInstanceOf(
      Function
    );
  });

  test('Has no state', () => {
    expect(wrapper.find('Feed').instance().state).toBeNull;
  });

});
