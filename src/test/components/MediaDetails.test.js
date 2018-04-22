import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MediaDetails from '../../components/MediaDetails';
import store from '../mockedData';

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

    test('Renders <div> with class .media-details as wrapper', () => {
      expect(children.length).toEqual(1);
      expect(children.name()).toEqual('div');
      expect(children.hasClass('media-details')).toBeTruthy();
    });
  });
});
