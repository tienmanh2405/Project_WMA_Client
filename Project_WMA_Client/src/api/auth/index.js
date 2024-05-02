import axiosInstance from "../axios"
import API_CONFIG from "../../configs/api_config";
import axios from "axios";


const apiAuth = {
    login: async (payloadLogin) => {
        // dùng axios để bắn request login và nhận lại response
        const { data } = await axios.post(API_CONFIG.BASE_URL + API_CONFIG.RESOURCES.USER + '/login', payloadLogin)
        if (data) {
            return data
        } else {
            throw new Error('Dữ liệu trả về bị thiếu')
        }
    },
    renewAccessToken: async (payloadRenewToken) => {
        // dùng axios để bắn request login và nhận lại response
        const { data } = await axiosInstance.post(API_CONFIG.BASE_URL + API_CONFIG.RESOURCES.USER + '/refreshToken', payloadRenewToken)

        if (data) {
            return data
        } else {
            throw new Error('Dữ liệu trả về bị thiếu')
        }
    }
}
export default apiAuth