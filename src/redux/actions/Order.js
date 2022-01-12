import * as ActionOrder from "../constants/Order";

export const doCreateORderReq = (payload) => ({
  type: ActionOrder.CREATE_ORDER_REQ,
  payload,
});

export const doCreateORderSucced = (payload) => ({
  type: ActionOrder.CREATE_ORDER_SUCCED,
  payload,
});

export const doCreateORderFailed = (payload) => ({
  type: ActionOrder.CREATE_ORDER_FAILED,
  payload,
});

export const doGetOrderReq = (payload) => ({
  type: ActionOrder.GET_ORDER_REQ,
  payload,
});

export const doGetOrderSucced = (payload) => ({
  type: ActionOrder.GET_ORDER_SUCCED,
  payload,
});

export const doGetOrderFailed = (payload) => ({
  type: ActionOrder.GET_ORDER_FAILED,
  payload,
});

//CANCEL ORDER
export const doCancelOrderReq = (payload) => ({
  type: ActionOrder.CANCEL_ORDER_REQ,
  payload,
});

export const doCancelOrderSucced = (payload) => ({
  type: ActionOrder.CANCEL_ORDER_SUCCED,
  payload,
});

export const doCancelOrderFailed = (payload) => ({
  type: ActionOrder.CANCEL_ORDER_FAILED,
  payload,
});

//get cancel order
export const dogetCancelorderReq = (payload) => ({
  type: ActionOrder.GET_ORDER_CANCEL_REQ,
  payload,
});

export const dogetCancelorderSucced = (payload) => ({
  type: ActionOrder.GET_ORDER_CANCEL_SUCCED,
  payload,
});

export const dogetCancelorderFailed = (payload) => ({
  type: ActionOrder.GET_ORDER_CANCEL_FAILED,
  payload,
});
