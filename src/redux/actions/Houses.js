import * as ActionHouses from "../constants/Houses";

//get by pages
export const doGetHousesReq = (payload) => ({
  type: ActionHouses.GET_HUSES_REQ,
  payload,
});

export const doGetHousesSucced = (payload) => ({
  type: ActionHouses.GET_HUSES_SUCCED,
  payload,
});

export const doGetHousesFailed = (payload) => ({
  type: ActionHouses.GET_HUSES_FAILED,
  payload,
});

// DELETE
export const doDeleteHousesReq = (payload) => ({
  type: ActionHouses.DElETE_HUSES_REQUEST,
  payload,
});

export const doDeleteHousesSucced = (payload) => ({
  type: ActionHouses.DELETE_HUSES_SUCCED,
  payload,
});

export const doDeleteHousesFailed = (payload) => ({
  type: ActionHouses.DELETE_HUSES_FAILED,
  payload,
});

//ADD
export const doAddHousesReq = (payload) => ({
  type: ActionHouses.ADD_HOUSES_REQ,
  payload,
});

export const doAddHousesSucced = (payload) => ({
  type: ActionHouses.ADD_HOUSES_SUCCED,
  payload,
});

export const doAddHousesFailed = (payload) => ({
  type: ActionHouses.ADD_HOUSES_FAILED,
  payload,
});

// find one
export const doGetOneHousesReq = (payload) => ({
  type: ActionHouses.GET_ONE_HUSES_REQ,
  payload,
});

export const doGetOneHousesSucced = (payload) => ({
  type: ActionHouses.GET_ONE_HUSES_SUCCED,
  payload,
});

export const doGetOneHousesFailed = (payload) => ({
  type: ActionHouses.GET_ONE_HUSES_FAILED,
  payload,
});

// get all
export const doGetAllHousesReq = (payload) => ({
  type: ActionHouses.GET_ALL_HOUSES_REQ,
  payload,
});

export const doGetAllHousesSucced = (payload) => ({
  type: ActionHouses.GET_ALL_HOUSES_SUCCED,
  payload,
});

export const doGetAllHousesFailed = (payload) => ({
  type: ActionHouses.GET_ALL_HOUSES_FAILED,
  payload,
});

//UPDATE
export const doUpdateHousesReq = (payload) => ({
  type: ActionHouses.UPDATE_HOUSES_REQ,
  payload,
});

export const doUpdateHousesSucced = (payload) => ({
  type: ActionHouses.UPDATE_HOUSES_SUCCED,
  payload,
});

export const doUpdateHousesFailed = (payload) => ({
  type: ActionHouses.UPDATE_HOUSES_FAILED,
  payload,
});
