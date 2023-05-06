import axios from "axios";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    headers: {
        "x-secret-key": process.env.REACT_APP_API_KEY, //todo
/*        "content-type": "application/x-www-form-urlencoded",*/
    },
})
