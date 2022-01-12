import * as ActionHouses from "../constants/Houses";

const INIT_STATE = {
  houses: [],
  all: [],
  detail: [],
  house_name: "",
  house_title: "",
  house_bedrooms: "",
  house_occupied: "",
  house_beds: "",
  house_baths: "",
  house_address: "",
  house_province: "",
  house_city: "",
  house_country: "",
  house_latitude: "",
  house_longitude: "",
  house_offer: "",
  house_approval: "",
  hosted_fullname: "",
  hosted_level: "",
  isLoading: false,
  isRefresh: false,
  status: false,
  error: null,
};

const housesReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionHouses.GET_HUSES_REQ: {
      return {
        ...state,
        isLoading: true,
        status: false,
        isRefresh: false,
      };
    }
    case ActionHouses.GET_HUSES_SUCCED: {
      return {
        ...state,
        houses: action.payload,
        isLoading: false,
        status: true,
        isRefresh: true,
        error: null,
      };
    }
    case ActionHouses.DELETE_HUSES_FAILED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case ActionHouses.ADD_HOUSES_SUCCED: {
      const { payload } = action;
      return {
        ...state,
        house_name: payload.house_name,
        house_title: payload.house_title,
        house_bedrooms: payload.house_bedrooms,
        house_baths: payload.house_baths,
        house_beds: payload.house_beds,
        house_address: payload.house_address,
        house_approval: payload.house_approval,
        house_city: payload.house_city,
        house_country: payload.house_country,
        house_latitude: payload.house_latitude,
        house_longitude: payload.house_longitude,
        house_occupied: payload.house_occupied,
        house_offer: payload.house_offer,
        house_province: payload.house_province,
        house_url_images: payload.house_url_images,
        hosted_fullname: payload.hosted_fullname,
        hosted_level: payload.hosted_level,
        isLoading: false,
        isRefresh: true,
        status: true,
        error: null,
      };
    }
    case ActionHouses.DELETE_HUSES_FAILED: {
      return {
        ...state,
        status: false,
        error: action.payload.error,
      };
    }
    case ActionHouses.DElETE_HUSES_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isRefresh: false,
      };
    }
    case ActionHouses.DELETE_HUSES_SUCCED: {
      const { payload } = action;
      const houses = state.houses.filter(
        (el) => el.house_id !== payload.house_id
      );
      return {
        ...state,
        houses,
        isLoading: false,
        isRefresh: true,
        error: null,
      };
    }
    case ActionHouses.DELETE_HUSES_FAILED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case ActionHouses.ADD_HOUSES_REQ: {
      return {
        ...state,
        isLoading: true,
        isRefresh: false,
        status: false,
      };
    }
    case ActionHouses.GET_ONE_HUSES_REQ: {
      return {
        ...state,
        isLoading: true,
        isRefresh: false,
        status: false,
      };
    }
    case ActionHouses.GET_ONE_HUSES_SUCCED: {
      return {
        ...state,
        detail: action.payload,
        isLoading: false,
        isRefresh: true,
        status: true,
        error: null,
      };
    }
    case ActionHouses.GET_ONE_HUSES_FAILED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case ActionHouses.GET_ALL_HOUSES_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionHouses.GET_ALL_HOUSES_SUCCED: {
      const { payload } = action;
      return {
        ...state,
        all: payload,
        isLoading: false,
        error: null,
        status: true,
      };
    }
    case ActionHouses.GET_ALL_HOUSES_FAILED: {
      return {
        ...state,
        status: false,
        error: action.payload.error,
      };
    }
    case ActionHouses.UPDATE_HOUSES_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionHouses.UPDATE_HOUSES_SUCCED: {
      const { payload } = action;
      return {
        ...state,
        houses: payload,
        isLoading: false,
        status: true,
        error: null,
      };
    }
    case ActionHouses.UPDATE_HOUSES_FAILED: {
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

export default housesReducer;
