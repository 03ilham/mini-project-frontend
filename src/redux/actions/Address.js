import * as ActionAddress from '../constants/address'

export const doCreateAddressReq = (payload) => ({
    type: ActionAddress.CREATE_ADDRESS_REQ,
    payload
})

export const doCreateAddressSucced = (payload) => ({
    type: ActionAddress.CREATE_ADDRESS_SUCCED,
    payload
})

export const doCreateAddressFailed = (payload) => ({
    type: ActionAddress.CREATE_ADDRESS_FAILED,
    payload
})

export const doGetAddressReq = (payload) => ({
    type: ActionAddress.GET_ADDRESS_REQ,
    payload
})

export const doGetAddressSucced = (payload) => ({
    type: ActionAddress.GET_ADDRESS_SUCCED,
    payload
})

export const doGetAddressFailed = (payload) => ({
    type: ActionAddress.GET_ADDRESS_FAILED,
    payload
})