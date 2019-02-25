import axios from 'axios'
import { MAIN_URI } from '../constants/api'

const instance = axios.create({
  baseURL: MAIN_URI,
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

export default instance