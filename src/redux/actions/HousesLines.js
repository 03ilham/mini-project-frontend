import * as ActionLines from "../constants/HousesLines";

export const doGetLinesReq = (payload) => ({
  type: ActionLines.GET_LINES_REQ,
  payload,
});

export const doGetLinesSuceed = (payload) => ({
  type: ActionLines.GET_LINES_SUCCED,
  payload,
});

export const doGetLinesFailed = (payload) => ({
  type: ActionLines.GET_LINES_FAILED,
  payload,
});

//delete
export const doDeleteLinesReeq = (payload) => ({
  type: ActionLines.DELETE_LINES_REQ,
  payload,
});

export const doDeleteLinesSucced = (payload) => ({
  type: ActionLines.DELETE_LINES_SUCCED,
  payload,
});

export const doDeleteLinesFailed = (payload) => ({
  type: ActionLines.DELETE_LINES_FAILED,
  payload,
});

//get lines by order
export const doGetLinesByOrderReq = (payload) => ({
  type: ActionLines.GET_LINES_BY_ORDER_REQ,
  payload,
});

export const doGetLinesByOrderSucced = (payload) => ({
  type: ActionLines.GET_LINES_BY_ORDER_SUCCED,
  payload,
});

export const doGetLinesByOrderFailed = (payload) => ({
  type: ActionLines.GET_LINES_BY_ORDER_FAILED,
  payload,
});
