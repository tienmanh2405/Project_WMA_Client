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
    },
    fetchProjectById: async (projectId) => {
        try {
            const response = await axiosInstance.get(`${API_CONFIG.BASE_URL}${API_CONFIG.RESOURCES.PROJECT}/${projectId}`);
            return response.data.project;
        } catch (error) {
            console.error('Error fetching projects:', error);
            throw new Error('Failed to fetch projects');
        }
    }, fetchUpdatedProjects: async (projectId, Data) => {
        try {
            const response = await axiosInstance.put(`${API_CONFIG.BASE_URL}${API_CONFIG.RESOURCES.PROJECT}/${projectId}`, Data);
            return response.data.project;
        } catch (error) {
            console.error('Error fetching projects:', error);
            throw new Error('Failed to fetch projects');
        }
    },
    fetchCreateProjects: async (Data) => {
        try {
            const response = await axiosInstance.post(API_CONFIG.BASE_URL + API_CONFIG.RESOURCES.PROJECT + '/', Data);
            return response.data;
        } catch (error) {
            console.error('Error fetching projects:', error);
            throw new Error('Failed to fetch projects');
        }
    },
    searchProjects: async (searchQuery) => {
        try {
            const response = await axiosInstance.get(`${API_CONFIG.BASE_URL}${API_CONFIG.RESOURCES.PROJECT}/search/searchQuery?q=${searchQuery}`);
            return response.data.projects;
        } catch (error) {
            console.error('Error searching projects:', error);
            throw new Error('Failed to search projects');
        }
    }

};

export default apiProject;
