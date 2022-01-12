import axios from "axios";
import config from "../config/config";

const list = async () => {
  try {
    const response = await axios.get(`${config.domain}/images/`);
    return response.data;
  } catch (err) {
    return await err.message;
  }
};

const deleteRow = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/images/${id}`);
    return result;
  } catch (error) {
    return error;
  }
};

const createRow = async (data) => {
  try {
    const result = await axios.post(`${config.domain}/images/`, data);
    return result;
  } catch (error) {
    return error;
  }
};

const updateRow = async (data) => {
  try {
    const result = await axios.put(
      `${config.domain}/images/${data.hoim_id}`,
      data
    );
    return result;
  } catch (error) {
    return error;
  }
};

export default { list, deleteRow, createRow, updateRow };
