import {instance} from './instance';

export type GetVacanciesPayloadType = {
    published?: number,
    keyword?: string,
    payment_from?: number,
    payment_to?: number,
    catalogues?: number,
    key?: number,
    page?: number,
    count?: number,


};

export const vacanciesApi = {
    getVacancies(data: GetVacanciesPayloadType) {
        return instance.get<ResponseType>(`vacancies/`, {
            headers: {
                "X-Api-App-Id": "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            params: data
        })
    },
}


export type VacancyType = {
    profession: string
    type_of_work: {
        title: string
    }
    town: {
        title: string
    }
    firm_name: string
    payment_to: number
    payment_from: number
    currency: string
    key: number
}

type ResponseType = {
    objects: VacancyType[]
    more: boolean
    subscription_active: boolean
    subscription_id: number
    total: number
}
