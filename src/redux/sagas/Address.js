import { call, put } from "redux-saga/effects";
import ApiAddress from "../../api/ApiAddress";
import { doCreateAddressFailed, doCreateAddressSucced, doGetAddressFailed, doGetAddressSucced } from "../actions/Address";

function* handleCreateAddres(action){
    const {payload} = action
    try {
        const result = yield call(ApiAddress.createAddress, payload)
        yield put(doCreateAddressSucced(result.data))
    } catch (error) {
        yield put(doCreateAddressFailed(error))
    }
}

function* handleGetAddress(action){
    const {payload} = action;
    try {
        const result = yield call(ApiAddress.list, payload)
        yield put(doGetAddressSucced(result))
    } catch (error) {
        yield put(doGetAddressFailed(error))
    }
}

export {handleCreateAddres, handleGetAddress}