import * as ActionImages from "../constants/HousesImages";

const INIT_STATE = {
  images: [],
  isLoading: false,
  error: null,
  succed: false,
  isRefresh: false
};

const imagesReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionImages.GET_IMAGES_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionImages.GET_IMAGES_SUCCED: {
      return {
        ...state,
        images: action.payload,
        isLoading: false,
      };
    }
    case ActionImages.CRETAE_IMAGES_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionImages.CRETAE_IMAGES_SUCCED: {
      const { payload } = action;
      return {
        ...state,
        images: [...state.images, payload],
        isLoading: false,
      };
    }
    case ActionImages.DELETE_IMAGES_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionImages.DELETE_IMAGES_SUCCED: {
      const { payload } = action;
      const images = state.images.filter(
        (el) => el.hoim_id !== payload.hoim_id
      );
      return {
        ...state,
        images,
        status: 200,
        succed: true,
      };
    }
    case ActionImages.UPDATE_IMAGES_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionImages.UPDATE_IMAGES_SUCCED: {
      const { payload } = action;
      const images = state.images.map((el) => {
        if (el.hoim_id === payload.hoim_id) {
          el.hoim_url_name = payload.hoim_url_name;
          el.hoim_filesize = payload.hoim_filesize;
          el.hoim_filetype = payload.hoim_filetype;
          el.hoim_host_id = payload.hoim_host_id;
          return el;
        }
        return el;
      });
      return {
        ...state,
        images,
        isLoading: false,
        isRefresh: true
      };
    }
    default:
      return state;
  }
};

export default imagesReducer;
