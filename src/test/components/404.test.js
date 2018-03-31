import React from 'react';
import PageNotFound from '../../components/404';

describe('<PageNotFound /> component:', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PageNotFound />);
  });

  test('Renders properly without crashing', () => {
    expect(wrapper.name()).toEqual('h1');
    expect(wrapper.text()).toEqual('404');
  });

  test('Has no props', () => {
    expect(wrapper.props()).toEqual({ children: '404' });
  });
});
