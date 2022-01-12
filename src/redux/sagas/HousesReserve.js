import { call, put } from "redux-saga/effects";
import ApiAddToCart from "../../api/ApiAddToCart";
import {
  doGetHousesReserveFailed,
  doGetHousesReserveSucced,
} from "../actions/HouseReserve";

function* handleGetHousesReserve(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiAddToCart.getReserve, payload);
    yield put(doGetHousesReserveSucced(result.data));
  } catch (error) {
    yield put(doGetHousesReserveFailed(error));
  }
}

export { handleGetHousesReserve };
