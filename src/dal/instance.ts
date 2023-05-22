import axios from "axios";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    headers: {
        "x-secret-key": process.env.REACT_APP_API_KEY,
        "X-Api-App-Id": process.env.REACT_APP_CLIENT_SECRET,
        "content-type": "application/x-www-form-urlencoded",
    },
})