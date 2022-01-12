import * as ActionBedrooms from "../constants/Bedrooms";

export const doGetBedroomsReq = (payload) => ({
  type: ActionBedrooms.GET_BEDROOMS_REQ,
  payload,
});

export const doGetBedroomsSucced = (payload) => ({
  type: ActionBedrooms.GET_BEDROOMS_SUCCED,
  payload,
});

export const doGetBedroomsFailed = (payload) => ({
  type: ActionBedrooms.GET_BEDROOMS_FAILED,
  payload,
});
