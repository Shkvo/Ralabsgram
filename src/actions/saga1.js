import { put, takeEvery, all } from 'redux-saga/effects';

function* login() {
  yield put({ type: "LOGGED" });
}

export default function* saga1() {
  yield all([
    takeEvery("LOGING", login)
  ]);
};
