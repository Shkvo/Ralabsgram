import React from 'react';
import Spinner from '../../components/Spinner';

describe('<Spinner /> component:', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Spinner />);
  });

  test('renders properly without crashing', () => {
    expect(wrapper.name()).toEqual('div');
    expect(wrapper.hasClass('spinner-wrapper')).toBeTruthy;
  });

  test('children renders properly', () => {
    expect(wrapper.children().length).toEqual(1);
    expect(wrapper.children().name()).toEqual('CircularProgress');
  });

  test('has proper color prop', () => {
    expect(wrapper.children().props().color).toEqual('red');
  });
});
