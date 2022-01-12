import config from "../config/config";
import axios from "axios";

const addToCart = (payload) => {
  try {
    const result = axios.post(
      `${config.domain}/cart/items/${payload.user_id}`,
      payload
    );
    return result;
  } catch (error) {
    return error.message;
  }
};

//cancel order
const CancelOrder = (id) => {
  try {
    const result = axios.put(`${config.domain}/cart/cencel/${id}`);
    return result;
  } catch (error) {
    return error.message;
  }
};

const getReserve = (id) => {
  try {
    const result = axios.get(`${config.domain}/reserve/${id}`);
    return result;
  } catch (error) {
    return error.message;
  }
};

// const getReserveByOrder = (id) => {
//   try {
//     const result = axios.get(`${config.domain}/reserve/sucess/${id}`);
//     return result;
//   } catch (error) {
//     return error.message;
//   }
// };

const getReserveLine = (id) => {
  try {
    const result = axios.get(`${config.domain}/lines/${id}`);
    return result;
  } catch (error) {
    return error.message;
  }
};

const deleteLines = (id) => {
  try {
    const result = axios.delete(`${config.domain}/lines/delete/${id}`);
    return result;
  } catch (error) {
    return error.message;
  }
};

const getLinesByOrder = (payload) => {
  try {
    const result = axios.post(`${config.domain}/lines/succes/`, payload);
    return result;
  } catch (error) {
    return error.message;
  }
};

export default {
  addToCart,
  getReserve,
  getReserveLine,
  deleteLines,
  CancelOrder,
  getLinesByOrder,
};
