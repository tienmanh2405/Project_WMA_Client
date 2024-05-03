import axiosInstance from "../axios"
import API_CONFIG from "../../configs/api_config";

const apiUser = {
    getUserById: async (userId) => {
        const { data } = await axiosInstance.post(API_CONFIG.BASE_URL + API_CONFIG.RESOURCES.USER + '/getuser', { filters: { userId } });
        if (data) return data
        else {
            throw new Error('Khong co du lieu nguoi dung');
        }
    },
    getUser: async () => {
        const { data } = await axiosInstance.get(API_CONFIG.BASE_URL + API_CONFIG.RESOURCES.USER + '/');
        if (data) return data
        else {
            throw new Error('Khong co du lieu nguoi dung');
        }
    }
}
export default apiUser