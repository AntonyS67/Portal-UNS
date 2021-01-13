import axios from 'axios'
import {url} from './host';

const clientAxios = axios.create({
    baseURL: url
})

export default clientAxios;