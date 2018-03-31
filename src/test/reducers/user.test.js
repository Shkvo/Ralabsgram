import React from 'react';
import PageNotFound from '../../components/404';

describe.only('<PageNotFound /> component:', () => {
  test('Component renders properly without crashing', () => {
    const wrapper = shallow(<PageNotFound />);
    expect(wrapper.name()).toEqual('h1');
  });
});
