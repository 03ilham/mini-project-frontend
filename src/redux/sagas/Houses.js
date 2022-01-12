import { call, put } from "redux-saga/effects";
import ApiHouses from "../../api/ApiHouses";
import {
  doDeleteHousesFailed,
  doGetHousesFailed,
  doGetHousesSucced,
  doAddHousesFailed,
  doAddHousesSucced,
  doGetOneHousesSucced,
  doGetOneHousesFailed,
  doDeleteHousesSucced,
  doGetAllHousesSucced,
  doGetAllHousesFailed,
  doUpdateHousesSucced,
  doUpdateHousesFailed,
} from "../actions/Houses";

function* handleGetHouses(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiHouses.list, payload);
    yield put(doGetHousesSucced(result));
  } catch (error) {
    yield put(doGetHousesFailed(error));
  }
}

function* handleGetAllHouses(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiHouses.findAll, payload);
    yield put(doGetAllHousesSucced(result));
  } catch (error) {
    yield put(doGetAllHousesFailed(error));
  }
}

function* handleGetOneHouses(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiHouses.findOne, payload);
    yield put(doGetOneHousesSucced(result));
  } catch (error) {
    yield put(doGetOneHousesFailed(error));
  }
}

function* handleDeleteHouses(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiHouses.deleteRow, payload);
    yield put(doDeleteHousesSucced({ id: payload, result: result.data }));
  } catch (error) {
    yield put(doDeleteHousesFailed(error));
  }
}

function* handleAddHouses(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiHouses.cresteHouse, payload);
    yield put(doAddHousesSucced(result.data));
  } catch (error) {
    yield put(doAddHousesFailed(error));
  }
}

function* handleUpdateHouses(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiHouses.updateRows, payload);
    yield put(doUpdateHousesSucced(result.data));
  } catch (error) {
    yield put(doUpdateHousesFailed(error));
  }
}

export {
  handleGetHouses,
  handleDeleteHouses,
  handleAddHouses,
  handleGetOneHouses,
  handleGetAllHouses,
  handleUpdateHouses,
};
