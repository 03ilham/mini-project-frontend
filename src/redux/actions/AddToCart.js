import* as ActionCart from '../constants/AddToCart'

export const doAddToCartReq = (payload) => ({
    type: ActionCart.ADD_TO_CART_REQ,
    payload
})

export const doAddToCartSucced = (payload) => ({
    type: ActionCart.ADD_TO_CART_SUCCED,
    payload
})

export const doAddToCartFailed = (payload) => ({
    type: ActionCart.ADD_TO_CART_FAILED,
    payload
})