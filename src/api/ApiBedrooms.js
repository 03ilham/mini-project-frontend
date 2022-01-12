import config from "../config/config";
import axios from "axios";

const list = async () => {
    try {
        const result = await axios.get(`${config.domain}/bedroom/`)
        return result.data
    } catch (error) {
        return error
    }
}

export default {
    list
}