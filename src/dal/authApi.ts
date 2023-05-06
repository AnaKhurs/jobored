import {AxiosResponse} from "axios";
import {instance} from "./instance";

export const authAPI = {
    login(login: string, password: string, client_id: number, client_secret: string, hr: number) {
        return instance.get<{ login: string, password: string, client_id: number, client_secret: string, hr: number }, AxiosResponse<ResponseType>>(
            `oauth2/password/`, {params: {login, password, client_id, client_secret, hr}})
    },
    refreshToken(refreshToken: string, client_id: number, client_secret: string) {
        return instance.get <{ refreshToken: string, client_id: number, client_secret: string }, AxiosResponse<ResponseType>>(
            `oauth2/refresh_token/`, {params: {refreshToken, client_id, client_secret}})
    }, //toDo
}

// types
export type ResponseType = {
    "access_token": string,
    "refresh_token": string,
    "ttl": number,
    "expires_in": number,
    "token_type": string,
}