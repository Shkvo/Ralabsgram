import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import sagas from './actions';

const saga = createSagaMiddleware();

const middlewares = applyMiddleware(
  saga
);

export default createStore(reducer, {}, composeWithDevTools(middlewares));

saga.run(sagas);
