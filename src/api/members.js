import Axios from 'axios';
import { config } from '../config/index';

export const getMembers = (params) => {
    return Axios.get(
        `${config.api_url}/members?search_query=${params.keyword}&lastId=${params.lastId}&limit=${params.limit}`
    );
};