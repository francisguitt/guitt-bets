

import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export const api = axios.create({
    baseURL: `${process.env.BASE_URL_TESTE}`
    //teste
});

export const apiBet = axios.create({
    baseURL: `${process.env.BASE_URL}`
})
