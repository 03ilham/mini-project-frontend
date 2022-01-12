import { call, put } from "redux-saga/effects";
import ApiAddToCart from "../../api/ApiAddToCart";
import { doAddToCartFailed, doAddToCartSucced } from "../actions/AddToCart";

function* handleAddToCart(action){
    const {payload} = action
    try {
        const result = yield call(ApiAddToCart.addToCart, payload)
        yield put(doAddToCartSucced(result.data))
    } catch (error) {
        yield put(doAddToCartFailed(error))
    }
}

export {handleAddToCart}