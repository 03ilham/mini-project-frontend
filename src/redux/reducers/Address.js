import * as ActionAddress from '../constants/address'

const INIT_STATE = {
    address: [],
    isLoading: false,
    isRefresh: false,
    error: null,
    status: false
}

const addressReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionAddress.CREATE_ADDRESS_REQ: {
            return {
                ...state,
                isLoading: true,
                isRefresh: false,
                status: false,
                error: null
            }
        }
        case ActionAddress.CREATE_ADDRESS_SUCCED: {
            return {
                ...state,
                isLoading: false,
                address: action.payload,
                isRefresh: true,
                status: true,
                error: null
            }
        }
        case ActionAddress.CREATE_ADDRESS_FAILED: {
            return {
                ...state,
                status: false,
                error: action.payload.error
            }
        }
        case ActionAddress.GET_ADDRESS_REQ: {
            return {
                ...state,
                isLoading: true,
                isRefresh: false,
                status: false,
                error: null
            }
        }
        case ActionAddress.GET_ADDRESS_SUCCED: {
            return {
                ...state,
                address: action.payload,
                isLoading: false,
                isRefresh: true,
                status: true,
                error: null
            }
        }
        case ActionAddress.GET_ADDRESS_FAILED: {
            return {
                ...state,
                status: false,
                error: action.payload.error
            }
        }
        default:
            return state
    }
}

export default addressReducer