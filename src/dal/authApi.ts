import {instance} from './instance';
import {AxiosResponse} from 'axios';

export const authAPI = {
    login(login: string, password: string, client_id: number, client_secret: string, hr: number) {
        return instance.get<{ login: string, password: string, client_id: number, client_secret: string, hr: number }, AxiosResponse<LoginResponseType>>(
            `oauth2/password/`, {params: {login, password, client_id, client_secret, hr}})
    },
}

// types
export type LoginResponseType = {
    "access_token": string,
    "refresh_token": string,
    "ttl": number,
    "expires_in": number,
    "token_type": string,
}



