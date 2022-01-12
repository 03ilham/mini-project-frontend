import config from "../config/config";
import axios from "axios";

const orders = (id) => {
  try {
    const result = axios.post(`${config.domain}/cart/order/${id}`);
    return result;
  } catch (error) {
    return error.message;
  }
};

const getOrders = (id) => {
  try {
    const result = axios.get(`${config.domain}/orders/${id}`);
    return result;
  } catch (error) {
    return error.message;
  }
};

const getCancelOrders = (id) => {
  try {
    const result = axios.get(`${config.domain}/orders/cancel/${id}`);
    return result;
  } catch (error) {
    return error.message;
  }
};

export default {
  orders,
  getOrders,
  getCancelOrders,
};
