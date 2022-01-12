import axios from "axios";
import config from "../config/config";

const list = async (payload) => {
  try {
    const response = await axios.post(`${config.domain}/houses/paging`,payload);
    return response.data;
  } catch (err) {
    return await err.message;
  }
};

const findAll = async (payload) => {
  try {
    const response = await axios.get(`${config.domain}/houses/`, {
      payload,
    });
    return response.data;
  } catch (err) {
    return await err.message;
  }
};

const findOne = async (id) => {
  try {
    const response = await axios.get(`${config.domain}/houses/one/${id}`);
    return response.data;
  } catch (err) {
    return await err.message;
  }
};

const cresteHouse = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/houses/singgle`, payload);
    return result;
  } catch (error) {
    return error.message;
  }
};

const updateRows = async(payload) => {
  try {
    const result = await axios.put(`${config.domain}/houses/update/${payload.house_id}`, payload)
    return result
  } catch (error) {
    return error.message
  }
}

const deleteRow = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/houses/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

export default {
  list,
  deleteRow,
  cresteHouse,
  findOne,
  findAll,
  updateRows
};
