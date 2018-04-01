import React from 'react';
import LeftSideBar from '../../components/LeftSideBar';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { store } from '../mockedData';

let wrapper = null;

describe('<LeftSideBar /> component:', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>    
          <LeftSideBar />
        </MemoryRouter>
      </Provider>
    );
  });

  test('Renders properly without crashing', () => {
    const app = wrapper.find('LeftSideBar');

    expect(app.exists()).toBeTruthy;
    expect(app.name()).toEqual('LeftSideBar');
  });

  test('Renders children properly', () => {
    const children = wrapper.find('LeftSideBar').children();

    expect(children.length).toEqual(1);
    expect(children.name()).toEqual('nav');
    
    expect(children.children().length).toEqual(2);
    expect(children.childAt(0).name()).toEqual('Link');

    expect(children.childAt(0).children().length).toEqual(1);
    expect(children.childAt(0).children().children().name()).toEqual('h1');
    expect(children.childAt(0).children().children().hasClass('logo')).toBeTruthy;
    expect(children.childAt(0).children().text()).toEqual('Ralabsgram');

    expect(children.childAt(1).name()).toEqual('div');
    expect(children.childAt(1).hasClass('profile')).toBeTruthy;
    expect(children.childAt(1).children().length).toEqual(4);

    expect(children.childAt(1).childAt(0).name()).toEqual('img');

    expect(children.childAt(1).childAt(1).name()).toEqual('h4');
    expect(children.childAt(1).childAt(1).text()).toEqual('test name');

    expect(children.childAt(1).childAt(2).name()).toEqual('div');
    expect(children.childAt(1).childAt(2).hasClass('bio')).toBeTruthy;
    expect(children.childAt(1).childAt(2).children().length).toEqual(2);
    expect(children.childAt(1).childAt(2).childAt(0).name()).toEqual('h5');    
    expect(children.childAt(1).childAt(2).childAt(0).text()).toEqual('test bio');
    expect(children.childAt(1).childAt(2).childAt(1).name()).toEqual('a');    
    expect(children.childAt(1).childAt(2).childAt(1).text()).toEqual('test website');

    expect(children.childAt(1).childAt(3).name()).toEqual('div');
    expect(children.childAt(1).childAt(3).children().length).toEqual(3);
    expect(children.childAt(1).childAt(3).childAt(0).name()).toEqual('h4');
    expect(children.childAt(1).childAt(3).childAt(0).text()).toEqual('Publications: 10');
    expect(children.childAt(1).childAt(3).childAt(1).name()).toEqual('Link');
    expect(children.childAt(1).childAt(3).childAt(1).text()).toEqual('Followers: 34');
    expect(children.childAt(1).childAt(3).childAt(2).name()).toEqual('Link');
    expect(children.childAt(1).childAt(3).childAt(2).text()).toEqual('Follows: 14');
    
  });

  test('Has proper props', () => {
    expect(wrapper.find('LeftSideBar').instance().props.userInfo.id).toEqual(4);
    expect(wrapper.find('LeftSideBar').instance().props.getUserInfo).toBeInstanceOf(
      Function
    );
  });

  test('Has no state', () => {
    expect(wrapper.find('LeftSideBar').instance().state).toBeNull;
  });
});
