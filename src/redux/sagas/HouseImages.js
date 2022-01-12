import { call, put } from "redux-saga/effects";
import ApiHouseImages from "../../api/ApiHousesImages";
import {
  doGetImagesFailed,
  doGetImagesSucced,
  doCreateImagesFailed,
  doCreateImagesSucced,
  doDeleteImagesSucced,
  doDeleteImagesFailed,
  doUpdateImaesSucced,
  doUpdateImagesFailed,
} from "../actions/HousesImages";

function* handleGetImages(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiHouseImages.list, payload);
    yield put(doGetImagesSucced(result));
  } catch (error) {
    yield put(doGetImagesFailed(error));
  }
}

function* handleCreateImages(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiHouseImages.createRow, payload);
    yield put(doCreateImagesSucced(result.data));
  } catch (error) {
    yield put(doCreateImagesFailed(error));
  }
}

function* handleDeleteImages(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiHouseImages.deleteRow, payload);
    yield put(doDeleteImagesSucced({ id: payload, result: result.data }));
  } catch (error) {
    yield put(doDeleteImagesFailed(error));
  }
}

function* handleUpdateImages(action) {
  const { payload } = action;
  try {
    const result = yield call(ApiHouseImages.updateRow, payload);
    const data = result.data;
    yield put(doUpdateImaesSucced(data));
  } catch (error) {
    yield put(doUpdateImagesFailed(error));
  }
}

export {
  handleGetImages,
  handleCreateImages,
  handleDeleteImages,
  handleUpdateImages,
};
