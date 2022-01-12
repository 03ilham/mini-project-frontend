import {
  all,
  call,
  fork,
  put,
  takeEvery,
  TakeLatest,
} from "redux-saga/effects";
import ApiHosted from "../../pages/hosted/ApiHosted";
import {
  doGetHostedFailed,
  doGetHostedSucced,
  doCreateHostedFailed,
  doCreateHostedSucced,
  doUpdateHostedSucced,
  doUpdateHostedFailed,
  doDeleteHostedSucced,
  doDeleteHostedFailed,
} from "../actions/Hosted";

function* handleGetHosted(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiHosted.list, payload);
    yield put(doGetHostedSucced(result));
  } catch (error) {
    yield put(doGetHostedFailed(error));
  }
}

function* handleCretaeHosted(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiHosted.createRow, payload);
    yield put(doCreateHostedSucced(result.data));
  } catch (error) {
    yield put(doCreateHostedFailed(error));
  }
}

function* handleUpdateHosted(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiHosted.updateRow, payload);
    const data = result.data;
    yield put(doUpdateHostedSucced(data));
  } catch (error) {
    yield put(doUpdateHostedFailed(error));
  }
}

function* handleDeleteHosted(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiHosted.deleteRow, payload);
    yield put(doDeleteHostedSucced({ id: payload, result: result.data }));
  } catch (error) {
    yield put(doDeleteHostedFailed(error));
  }
}

export {
  handleGetHosted,
  handleCretaeHosted,
  handleUpdateHosted,
  handleDeleteHosted,
};
