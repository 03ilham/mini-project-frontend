import { call, put } from "redux-saga/effects";
import ApiOrder from "../../api/ApiOrder";
import ApiAddToCart from "../../api/ApiAddToCart";
import {
  doCancelOrderFailed,
  doCancelOrderSucced,
  doCreateORderFailed,
  doCreateORderSucced,
  dogetCancelorderFailed,
  dogetCancelorderSucced,
  doGetOrderFailed,
  doGetOrderSucced,
} from "../actions/Order";

function* handleCreateOrder(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiOrder.orders, payload);
    yield put(doCreateORderSucced(result.data));
  } catch (error) {
    yield put(doCreateORderFailed(error.message));
  }
}

function* handleGetOrder(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiOrder.getOrders, payload);
    yield put(doGetOrderSucced(result.data));
  } catch (error) {
    yield put(doGetOrderFailed(error.message));
  }
}

function* handleCancelOrder(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiAddToCart.CancelOrder, payload);
    yield put(doCancelOrderSucced(result.data));
  } catch (error) {
    yield put(doCancelOrderFailed(error.message));
  }
}

function* handleGetOrderCancelled(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiOrder.getCancelOrders, payload);
    yield put(dogetCancelorderSucced(result.data));
  } catch (error) {
    yield put(dogetCancelorderFailed(error.message));
  }
}

export {
  handleCreateOrder,
  handleGetOrder,
  handleCancelOrder,
  handleGetOrderCancelled,
};
