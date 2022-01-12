import axios from "axios";
import config from "../config/config";

const signup = async (payload) => {
  try {
    const result = await axios.post(`${config.urlAuth}/signup`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const signin = async (payload) => {
    try {
        const result = await axios.post(`${config.urlAuth}/signin`, payload)
        return result
    } catch (error) {
        return error
    }
}

const updateUser = async (payload) => {
    try {
        const result = await axios.put(`${config.urlAuth}/users/${payload.user_id}`, payload)
        return result
    } catch (error) {
        return error
    }
}

const list = async(payload) => {
  try {
    const result = await axios.get(`${config.urlAuth}/users/${payload.user_id}`)
    return result
  } catch (error) {
    return error
  }
}

export default {
    signup,
    signin,
    updateUser,
    list
}