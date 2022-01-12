import * as ActionCart from "../constants/AddToCart";

const INIT_STATE = {
  cart: [],
  isLoading: false,
  totalItems: 0,
  error: null,
  status: false,
};

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionCart.ADD_TO_CART_REQ: {
      return {
        ...state,
        isLoading: true,
        error: null,
        status: false,
      };
    }
    case ActionCart.ADD_TO_CART_SUCCED: {
      const { payload } = action;
      return {
        ...state,
        cart: payload,
        totalItems: state.totalItems+1,
        isLoading: false,
        error: null,
        status: true,
      };
    }
    case ActionCart.ADD_TO_CART_FAILED: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
        status: false,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
