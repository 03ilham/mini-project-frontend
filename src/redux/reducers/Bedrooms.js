import * as ActionBedrooms from "../constants/Bedrooms";

const INIT_STATE = {
    bedrooms: [],
    isLoading: false,
    status: false,
    error: null
}

const bedroomsReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionBedrooms.GET_BEDROOMS_REQ: {
            return {
                ...state,
                isLoading: true,
                status: false,
                error: null
            }
        }   
        case ActionBedrooms.GET_BEDROOMS_SUCCED: {
            return {
                ...state,
                bedrooms: action.payload,
                isLoading: false,
                status: true,
                error: null
            }
        }
        case ActionBedrooms.GET_BEDROOMS_FAILED: {
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

export default bedroomsReducer