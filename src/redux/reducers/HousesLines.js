import * as ActionLines from '../constants/HousesLines'

const INIT_STATE = {
    lines: [],
    linesByOrder: [],
    isLoading: false,
    status: false,
    error: null,
    totalCart: 0
}

const housesLinesReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionLines.GET_LINES_REQ: {
            return {
                ...state,
                isLoading: true,
                status: false,
                error: null
            }
        }
        case ActionLines.GET_LINES_SUCCED: {
            const {payload} = action
            return {
                ...state,
                lines: payload,
                isLoading: false,
                error: null,
                status: true,
            }
        }
        case ActionLines.GET_LINES_FAILED: {
            return {
                ...state,
                status: false,
                error: action.payload.error,
                isLoading: false
            }
        }
        case ActionLines.DELETE_LINES_REQ: {
            return {
                ...state,
                isLoading: true,
                status: false
            }
        }
        case ActionLines.DELETE_LINES_SUCCED: {
            const {payload} = action
            const line = state.lines.filter((el)=> el.hove_id !== payload.hove_id)
            return {
                ...state,
                line,
                isLoading: false,
                status: true,
                error: null
            }
        }
        case ActionLines.DELETE_LINES_FAILED: {
            return {
                ...state,
                status: false,
                isLoading: false,
                error: action.payload.error
            }
        }
        case ActionLines.GET_LINES_BY_ORDER_REQ: {
            return {
                ...state,
                isLoading: true,
                status: false,
                error: null
            }
        }
        case ActionLines.GET_LINES_BY_ORDER_SUCCED: {
            const  {payload} = action
            return {
                ...state,
                isLoading: false,
                linesByOrder: payload,
                status: true,
                error: null
            }
        }
        case ActionLines.GET_LINES_BY_ORDER_FAILED: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        }
        default:
            return state
    }
}

export default housesLinesReducer