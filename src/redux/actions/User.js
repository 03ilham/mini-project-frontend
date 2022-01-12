import* as ActionUser from '../constants/User'

export const doSignupReq = (payload) => ({
    type: ActionUser.GET_SIGNUP_REQ,
    payload
})

export const doSignupSucced = (payload) => ({
    type: ActionUser.GET_SIGNUP_SUCCED,
    payload
})

export const doSignupFailed = (payload) => ({
    type: ActionUser.GET_SIGNUP_FAILED,
    payload
})

export const doSiginReq = (payload) => ({
    type: ActionUser.GET_SIGNIN_REQ,
    payload
})

export const doSiginSucced = (payload) => ({
    type: ActionUser.GET_SIGNIN_SUCCED,
    payload
})

export const doSigninFailed = (payload) => ({
    type: ActionUser.GET_SIGNIN_FAILED,
    payload
})

export const doLogoutReq = (payload)  => ({
    type: ActionUser.GET_LOGOUT_REQ,
    payload
})

export const doLogoutSucced = (payload) =>({
    type: ActionUser.GET_LOGOUT_SUCCED,
    payload
})

export const doLogoutFailed = (payload) => ({
    type: ActionUser.GET_LOGOUT_FAILD,
    payload
})

export const doUpdateUserReq = (payload) => ({
    type: ActionUser.UPDATE_USER_REQ,
    payload
})

export const doUpdateUserSucced = (payload) => ({
    type: ActionUser.UPDATE_USER_SUCCED,
    payload
})

export const doUpdateUserFailed = (payload) => ({
    type: ActionUser.UPDATE_USER_FAILED,
    payload
})

export const doGetUserReq = (payload) => ({
    type: ActionUser.GET_USER_REQ,
    payload
})

export const doGetUserSucced = (payload) => ({
    type: ActionUser.GET_USER_SUCCED,
    payload
})

export const doGetUserFailed = (payload) => ({
    type: ActionUser.GET_USER_FAILED,
    payload
})