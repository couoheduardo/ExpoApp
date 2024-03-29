import axios from "axios";
import Constants from 'expo-constants';

const axiosInstance = axios.create({
    baseURL: "https://rickandmortyapi.com",
    headers: {
        Accept: "application/json",
        Platform: 'app-partner'
    }
});
axiosInstance.interceptors.request.use(async (request) => {
    return request;
}, (error) => {
    return Promise.reject(error.response)
})

axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error.response)
})

export default axiosInstance;