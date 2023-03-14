import Axios from 'axios';
import { config } from '../config/index';

export const loginUser = (data) => {
    return Axios.post(`${config.api_url}/login`, data);
}