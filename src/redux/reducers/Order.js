import * as ActionOrder from "../constants/Order";

let INIT_STATE = {
  order: [],
  orderCancelled: [],
  cancelOrder: "",
  isLOading: false,
  error: null,
  status: false,
  info: "",
};

const orderReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionOrder.CREATE_ORDER_REQ: {
      return {
        ...state,
        isLOading: true,
        error: null,
        status: false,
      };
    }
    case ActionOrder.CREATE_ORDER_SUCCED: {
      const { payload } = action;
      return {
        ...state,
        order: payload,
        status: true,
        isLOading: false,
        error: null,
      };
    }
    case ActionOrder.CREATE_ORDER_FAILED: {
      return {
        ...state,
        isLOading: false,
        status: false,
        error: action.payload,
        info: "Finish Your Order",
      };
    }
    case ActionOrder.GET_ORDER_REQ: {
      return {
        ...state,
        isLOading: true,
        status: false,
      };
    }
    case ActionOrder.GET_ORDER_SUCCED: {
      const { payload } = action;
      return {
        ...state,
        order: payload,
        isLOading: false,
        status: true,
        error: null,
      };
    }
    case ActionOrder.GET_ORDER_FAILED: {
      const { payload } = action;
      return {
        ...state,
        isLOading: false,
        error: payload,
        status: false,
      };
    }
    case ActionOrder.CANCEL_ORDER_REQ: {
      return {
        ...state,
        isLOading: true,
      };
    }
    case ActionOrder.CANCEL_ORDER_SUCCED: {
      const { payload } = action;
      return {
        ...state,
        cancelOrder: payload,
        isLOading: false,
        status: true,
        error: null,
      };
    }
    case ActionOrder.CANCEL_ORDER_FAILED: {
      return {
        ...state,
        isLOading: false,
        status: false,
        error: action.payload.error,
      };
    }
    case ActionOrder.GET_ORDER_CANCEL_REQ: {
      return {
        ...state,
        isLOading: true,
      };
    }
    case ActionOrder.GET_ORDER_CANCEL_SUCCED: {
      const { payload } = action;
      return {
        ...state,
        orderCancelled: payload,
        isLoading: false,
        status: true,
        error: null,
      };
    }
    case ActionOrder.GET_ORDER_CANCEL_FAILED: {
      return {
        ...state,
        isLoading: false,
        status: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};

export default orderReducer;
