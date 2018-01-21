import { all } from 'redux-saga/effects';
import saga1 from './saga1';

export default function* rootSaga() {
  yield all([
    saga1(),
  ])
};
