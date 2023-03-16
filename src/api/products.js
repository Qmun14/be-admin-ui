import Axios from 'axios';
import { config } from '../config/index';

export const getProducts = () => {
    return Axios.get(`${config.api_url}/products`);
}

export const getProductById = (id) => {
    return Axios.get(`${config.api_url}/products/${id}`);
}

export const addProduct = (data) => {
    return Axios.post(`${config.api_url}/products`, data);
}

export const editProduct = (id, data) => {
    return Axios.patch(`${config.api_url}/products/${id}`, data);
}

export const deleteProduct = (id) => {
    return Axios.delete(`${config.api_url}/products/${id}`);
}