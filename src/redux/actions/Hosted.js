import * as Action from "../constants/Hosted";

//find hosted
export const doGetHostedRequest = (payload) => ({
  type: Action.GET_HOSTED_REQUEST,
  payload,
});

export const doGetHostedSucced = (payload) => ({
  type: Action.GET_HOSTED_SUCCED,
  payload,
});

export const doGetHostedFailed = (payload) => ({
  type: Action.GET_HOSTED_FAILED,
  payload,
});

// create hosted
export const doCreateHostedReq = (payload) => ({
  type: Action.CRETAE_HOSTED_REQ,
  payload
})

export const doCreateHostedSucced = (payload) => ({
  type: Action.CRETAE_HOSTED_SUCCED,
  payload
})

export const doCreateHostedFailed = (payload) => ({
  type: Action.CRETAE_HOSTED_FAILED,
  payload
})

// update hosted
export const doUpdateHostedReq = (payload) => ({
  type: Action.UPDATE_HOSTED_REQ,
  payload
})

export const doUpdateHostedSucced = (payload) => ({
  type: Action.UPDATE_HOSTED_SUCCED,
  payload
})

export const doUpdateHostedFailed = (payload) => ({
  type: Action.UPDATE_HOSTED_FAILED,
  payload
})

//delete hosted
export const doDeleteHostedReq = (payload) => ({
  type: Action.DELETE_HOSTED_REQ,
  payload
})

export const doDeleteHostedSucced = (payload) => ({
  type: Action.DELETE_HOSTED_SUCCED,
  payload
})

export const doDeleteHostedFailed = (payload) => ({
  type: Action.DELETE_HOSTED_FAILED,
  payload
})