import* as ActionImages from '../constants/HousesImages'

export const doGetImagesReq = (payload) => ({
    type: ActionImages.GET_IMAGES_REQ,
    payload
})

export const doGetImagesSucced = (payload) => ({
    type: ActionImages.GET_IMAGES_SUCCED,
    payload
})

export const doGetImagesFailed = (payload) => ({
    type: ActionImages.GET_IMAGES_FAILED,
    payload
})

export const doCretaeImagesReq = (payload) => ({
    type: ActionImages.CRETAE_IMAGES_REQ,
    payload
})

export const doCreateImagesSucced = (payload)=> ({
    type: ActionImages.CRETAE_IMAGES_SUCCED,
    payload
})

export const doCreateImagesFailed = (payload)=> ({
    type: ActionImages.CRETAE_IMAGES_FAILED,
    payload
})

export const doDeleteImagesReq = (payload) => ({
    type: ActionImages.DELETE_IMAGES_REQ,
    payload
})

export const doDeleteImagesSucced = (payload) => ({
    type: ActionImages.DELETE_IMAGES_SUCCED,
    payload
})

export const doDeleteImagesFailed = (payload) => ({
    type: ActionImages.DELETE_IMAGES_FAILED,
    payload
})

export const doUpdateImagesReq = (payload) => ({
    type: ActionImages.UPDATE_IMAGES_REQ,
    payload
})

export const doUpdateImaesSucced = (payload) => ({
    type: ActionImages.UPDATE_IMAGES_SUCCED,
    payload
})

export const doUpdateImagesFailed = (payload) => ({
    type: ActionImages.UPDATE_IMAGES_FAILED,
    payload
})