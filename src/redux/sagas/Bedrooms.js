import { call, put } from "redux-saga/effects";
import ApiBedrooms from "../../api/ApiBedrooms";
import { doGetBedroomsFailed, doGetBedroomsSucced } from "../actions/Bedrooms";

function* handleGetBedrooms(action){
    const {payload} = action
    try {
        const result = yield call(ApiBedrooms.list, payload)
        yield put(doGetBedroomsSucced(result))
    } catch (error) {
        yield put(doGetBedroomsFailed(error))
    }
}

export {handleGetBedrooms}