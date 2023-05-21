import {AxiosResponse} from "axios";
import {instance} from "./instance";

export const authAPI = {
    login(login: string, password: string, client_id: number, client_secret: string, hr: number) {
        return instance.get<{ login: string, password: string, client_id: number, client_secret: string, hr: number }, AxiosResponse<ResponseType>>(
            `oauth2/password/`, {params: {login, password, client_id, client_secret, hr}})
    },
    refreshToken(refresh_token: string, client_id: number, client_secret: string) {
        return instance.get <{ refresh_token: string, client_id: number, client_secret: string }, AxiosResponse<ResponseType>>(
            `oauth2/refresh_token/`, {params: {refresh_token, client_id, client_secret}})
    },
}

// types
export type ResponseType = {
    "access_token": string,
    "refresh_token": string,
    "ttl": number,
    "expires_in": number,
    "token_type": string,
}