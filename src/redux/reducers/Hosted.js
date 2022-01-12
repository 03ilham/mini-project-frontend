import * as Action from "../constants/Hosted";

const INIT_STATE = {
  hosted: [],
  hosteed: {},
  isLoading: false,
  succed: false,
  error: null,
};

const hostedReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case Action.GET_HOSTED_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case Action.GET_HOSTED_SUCCED: {
      return {
        ...state,
        hosted: action.payload,
        isLoading: false,
      };
    }
    case Action.GET_HOSTED_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case Action.CRETAE_HOSTED_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case Action.CRETAE_HOSTED_SUCCED: {
      const { payload } = action;
      return {
        ...state,
        hosted: [...state.hosted, payload],
        isLoading: false,
        succed: true,
      };
    }
    case Action.CRETAE_HOSTED_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case Action.UPDATE_HOSTED_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case Action.UPDATE_HOSTED_SUCCED: {
      const { payload } = action;
      const hosted = state.hosted.map((el) => {
        if (el.hosted_acc === payload.hosted_acc) {
          el.hosted_fullname = payload.hosted_fullname;
          el.hosted_level = payload.hosted_level;
          return el;
        }
        return el;
      });
      return {
        ...state,
        hosted,
        succed: true,
      };
    }
    case Action.DELETE_HOSTED_REQ: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case Action.DELETE_HOSTED_SUCCED: {
      const {payload} = action;
      const hosted = state.hosted.filter(el => el.hosted_acc !== payload.hosted_acc)
      return {
        ...state,
        hosted,
        status: 200,
        succed: true
      }
    }
    default:
      return state;
  }
};

export default hostedReducer;
