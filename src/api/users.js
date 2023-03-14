import Axios from 'axios';
import { config } from '../config/index';

export const loginUser = (data) => {
    return Axios.post(`${config.api_url}/login`, data);
}
export const getMe = () => {
    return Axios.get(`${config.api_url}/me`);
}
export const logoutUser = () => {
    return Axios.delete(`${config.api_url}/logout`);
}
