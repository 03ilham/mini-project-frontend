import { call, put } from "redux-saga/effects";
import ApiUsers from "../../api/ApiUsers";
import {
  doGetUserFailed,
  doGetUserSucced,
  doLogoutFailed,
  doLogoutSucced,
  doSiginSucced,
  doSigninFailed,
  doSignupFailed,
  doSignupSucced,
  doUpdateUserFailed,
  doUpdateUserSucced,
} from "../actions/User";

function* handleSignup(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiUsers.signup, payload);
    yield put(doSignupSucced(result.data));
  } catch (error) {
    yield put(doSignupFailed(error));
  }
}

function* handleSignin(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiUsers.signin, payload);
    localStorage.setItem("@profile", JSON.stringify(result.data.profile));
    localStorage.setItem("@token", result.data.token);
    yield put(doSiginSucced(result.data));
  } catch (error) {
    yield put(doSigninFailed(error));
  }
}

function* handleUpdateUsers(action) {
  const {payload} = action
  try {
    const result = yield call(ApiUsers.updateUser, payload)
    yield put(doUpdateUserSucced(result.data))
  } catch (error) {
    yield put(doUpdateUserFailed(error))
  }
}

function* handleLogout(action) {
  const { payload } = action;
  try {
    localStorage.clear();
    yield put(doLogoutSucced(payload));
  } catch (error) {
    yield put(doLogoutFailed(error));
  }
}

function* handleGetUsers(action) {
  const {payload} = action
  try {
    const result = yield call(ApiUsers.list, payload)
    yield put(doGetUserSucced(result.data))
  } catch (error) {
    yield put(doGetUserFailed(error))
  }
}

export { handleSignup, handleSignin, handleLogout, handleUpdateUsers, handleGetUsers };
