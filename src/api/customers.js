import Axios from 'axios';
import { config } from '../config/index';

export const getCustomers = (params) => {
    return Axios.get(
        `${config.api_url}/customers?search_query=${params.keyword}&page=${params.page}&limit=${params.limit}`
    );
};