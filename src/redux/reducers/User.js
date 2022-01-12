import * as ActionUSer from "../constants/User";

const INIT_STATE = {
  users: [],
  username: "",
  email: "",
  user_password: "",
  user_handphone: "",
  user_roles: "",
  status: false,
  isLoading: false,
  isLogout: false,
  error: '',
  authUser: JSON.parse(localStorage.getItem("@profile")),
  profile: {
    userId: undefined,
    username: "",
    email: "",
    numberPhone: "",
    rolType: "",
  },
  token: localStorage.getItem("@token"),
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionUSer.GET_SIGNUP_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionUSer.GET_SIGNUP_SUCCED: {
      const { payload } = action;
      return {
        ...state,
        username: payload.user_name,
        email: payload.user_email,
        isLoading: false,
        isLogout: false,
        status: true,
      };
    }
    case ActionUSer.GET_SIGNIN_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionUSer.GET_SIGNIN_SUCCED: {
      const { payload } = action;
      const { profile } = payload;
      return {
        ...state,
        profile: {
          userId: profile.userId,
          username: profile.username,
          email: profile.email,
          numberPhone: profile.numberPhone,
          rolType: profile.rolType,
        },
        isLoading: false,
        status: true,
        isLogout: false,
      };
    }
    case ActionUSer.GET_SIGNIN_FAILED: {
      return {
        ...state,
        status: 'Wrong Password',
        error:  'Wrong Password',
      }
    }
    case ActionUSer.GET_LOGOUT_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionUSer.GET_LOGOUT_SUCCED: {
      return {
        ...state,
        profile: {
          userId: undefined,
          username: "",
          email: "",
          rolType: "",
          numberPhone: "",
        },
        isLoading: false,
        token: "",
        isLogout: true,
      };
    }
    case ActionUSer.UPDATE_USER_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionUSer.UPDATE_USER_SUCCED: {
      const { payload } = action;
      const length = payload[1];
      const profile = length[0];
      return {
        ...state,
        profile: {
          userId: profile.userId,
          username: profile.username,
          email: profile.email,
          numberPhone: profile.numberPhone,
          rolType: profile.rolType,
        },
        isLoading: false,
        status: true,
        isLogout: false,
      };
    }
    case ActionUSer.GET_USER_REQ: {
      return {
        ...state,
        isLoading: true
      }
    }
    case ActionUSer.GET_USER_SUCCED: {
      return {
        ...state,
        users: action.payload,
        isLoading: false
      }
    }
    case ActionUSer.GET_USER_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.eror
      }
    }
    default:
      return state;
  }
};

export default userReducer;
