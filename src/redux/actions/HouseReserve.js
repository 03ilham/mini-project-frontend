import* as ActionReserve from '../constants/HousesReserve'

export const doGetHousesReserveReq = (payload) => ({
    type: ActionReserve.GET_RESERVE_REQ,
    payload
})

export const doGetHousesReserveSucced = (payload) => ({
    type: ActionReserve.GET_RESERVE_SUCCED,
    payload
})

export const doGetHousesReserveFailed = (payload) => ({
    type: ActionReserve.GET_RESERVE_FAILED,
    payload
})