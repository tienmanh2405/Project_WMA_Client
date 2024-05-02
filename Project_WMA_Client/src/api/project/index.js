import axiosInstance from "../axios";
import API_CONFIG from "../../configs/api_config";

const apiProject = {
    fetchProjects: async () => {
        try {
            const response = await axiosInstance.get(API_CONFIG.BASE_URL + API_CONFIG.RESOURCES.PROJECT + '/');
            return response.data.projects;
        } catch (error) {
            console.error('Error fetching projects:', error);
            throw new Error('Failed to fetch projects');
        }
    }

};

export default apiProject;
