import config from "../config/config";
import axios from "axios";

const list = async (payload) => {
    try {
        const result = await axios.get(`${config.domain}/address/${payload.user_id}`)
        return result.data
    } catch (error) {
        return error
    }
}

const createAddress = async (payload) => {
    try {
        const result = await axios.put(`${config.domain}/address/update/${payload.user_id}`,payload)
        return result
    } catch (error) {
        return error
    }
}

export default {
    list,
    createAddress
}