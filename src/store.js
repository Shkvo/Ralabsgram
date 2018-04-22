import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import sagas from './actions';

const saga = createSagaMiddleware();

const initialState = {
  user: {
    isLogged: false,
    access_token: '',
    info: {},
    media: [],
  },
  media: {
    details: {},
    comments: [],
    likes: [],
  },
};

const middlewares = applyMiddleware(saga);

export default createStore(
  reducer,
  initialState,
  composeWithDevTools(middlewares),
);

saga.run(sagas);
