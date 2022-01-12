import* as ActionReserve from '../constants/HousesReserve'

const INIT_STATE = {
    reserve: [],
    isLoading: false,
    status: false,
    error: null
}

const housesReserveReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionReserve.GET_RESERVE_REQ: {
            return {
                ...state,
                isLoading: true,
                status: false,
                error: null
            }
        }    
        case ActionReserve.GET_RESERVE_SUCCED: {
            return {
                ...state,
                reserve: action.payload,
                status: true,
                isLoading: false,
                error: null
            }
        }
        case ActionReserve.GET_RESERVE_FAILED: {
            return {
                ...state,
                isLoading: false,
                status: false,
                error: action.payload.error
            }
        }
        default:
            return state
    }
}

export default housesReserveReducer