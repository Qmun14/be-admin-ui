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

export const getUsers = () => {
    return Axios.get(`${config.api_url}/users`);
}
export const getUserById = (id) => {
    return Axios.get(`${config.api_url}/users/${id}`);
}
export const deleteUser = (id) => {
    return Axios.delete(`${config.api_url}/users/${id}`);
}
export const addUser = (data) => {
    return Axios.post(`${config.api_url}/users`, data);
}
export const editUser = (id, data) => {
    return Axios.patch(`${config.api_url}/users/${id}`, data);
}