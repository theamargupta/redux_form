import { takeEvery, call, put } from 'redux-saga/effects';
import { load } from '../actionType';
import { createUser } from '../../api';
import { setError, setUser } from '../actionGenerator';

function* handleImagesLoad({ payload }) {
  try {
    const user = yield call(createUser, payload);
    yield put(setUser(user));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

function* rootSaga() {
  yield takeEvery(load, handleImagesLoad);
}

//=> watcherSaga -> action -> workerSaga
export default rootSaga;
