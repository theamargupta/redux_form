import { takeEvery, call, put } from 'redux-saga/effects';
import { SignUp, SignIn, statePersist } from '../actionType';
import { createUser, SigniInUser } from '../../api';
import { setError, setUser } from '../actionGenerator';

function* handleSignUp({ payload }) {
  try {
    const user = yield call(createUser, payload);
    yield put(setUser(user));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}
function* handleSignIn({ payload }) {
  try {
    const user = yield call(SigniInUser, payload);
    yield put(setUser(user));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}
function* handlestatePersist({ payload }) {
  yield put(setUser(payload));
}

function* rootSaga() {
  yield takeEvery(SignUp, handleSignUp);
  yield takeEvery(SignIn, handleSignIn);
  yield takeEvery(statePersist, handlestatePersist);
}

//=> watcherSaga -> action -> workerSaga
export default rootSaga;
