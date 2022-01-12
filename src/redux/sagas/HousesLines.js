import { call, put } from "redux-saga/effects";
import ApiAddToCart from "../../api/ApiAddToCart";
import {
  doDeleteLinesFailed,
  doDeleteLinesSucced,
  doGetLinesByOrderFailed,
  doGetLinesByOrderSucced,
  doGetLinesFailed,
  doGetLinesSuceed,
} from "../actions/HousesLines";

function* handleGetLines(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiAddToCart.getReserveLine, payload);
    yield put(doGetLinesSuceed(result.data));
  } catch (error) {
    yield put(doGetLinesFailed(error.message));
  }
}

function* handleDeleteLines(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiAddToCart.deleteLines, payload);
    yield put(doDeleteLinesSucced({ id: payload, result: result.data }));
  } catch (error) {
    yield put(doDeleteLinesFailed(error));
  }
}

function* handleGetLinesByOrder(action) {
  const {payload} = action
  try {
    const result = yield call(ApiAddToCart.getLinesByOrder, payload)
    yield put(doGetLinesByOrderSucced(result.data))
  } catch (error) {
    yield put(doGetLinesByOrderFailed(error.message))
  }
}

export { handleGetLines, handleDeleteLines, handleGetLinesByOrder };
