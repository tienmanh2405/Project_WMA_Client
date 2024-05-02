import axiosInstance from "../axios";
import API_CONFIG from "../../configs/api_config";

const apiTask = {
    getTaskByProject: async (productId) => {
        try {
            const response = await axiosInstance.get(`${API_CONFIG.BASE_URL}${API_CONFIG.RESOURCES.TASK}/productId/${productId}`);
            return response.data.tasks;
        } catch (error) {
            console.error('Error fetching projects:', error);
            throw new Error('Failed to fetch projects');
        }
    },
    fetchUpdateTask: async (taskId, updatedTask) => {
        try {
            const response = await axiosInstance.put(`${API_CONFIG.BASE_URL}${API_CONFIG.RESOURCES.TASK}/${taskId}`, updatedTask);
            return response.data;
        } catch (error) {
            console.error('Error updating task:', error);
            throw error;
        }
    },
    fetchCreateTask: async (newTask) => {
        try {
            const response = await axiosInstance.post(`${API_CONFIG.BASE_URL}${API_CONFIG.RESOURCES.TASK}/`, newTask);
            return response.data;
        } catch (error) {
            console.error('Error creating task:', error);
            throw error;
        }
    },
    fetchDeleteTask: async (taskId) => {
        try {
            const response = await axiosInstance.delete(`${API_CONFIG.BASE_URL}${API_CONFIG.RESOURCES.TASK}/${taskId}`);
            return response.data;
        } catch (error) {
            console.error('Error creating task:', error);
            throw error;
        }
    }
};

export default apiTask;
