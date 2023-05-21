import {instance} from './instance';

export type GetVacanciesPayloadType = {
    published?: number,
    keyword?: string,
    payment_from?: number | '' | null,
    payment_to?: number | '' | null,
    catalogues?: number | null,
    no_agreement?: number,
    page?: number,
    count?: number,
    id?: number,
};

export const vacanciesApi = {
    getVacancies(data: GetVacanciesPayloadType) {
        return instance.get<ResponseType>(`vacancies/`, {
            headers: {
                "X-Api-App-Id": "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            },
            params: data
        })
    },
    getVacancy(data: GetVacanciesPayloadType) {
        return instance.get<VacancyType>(`vacancies/${data.id}`, {
            headers: {
                "X-Api-App-Id": "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            },
        })
    },

}


export type VacancyType = {
    profession: string
    town: {
        title: string
    }
    type_of_work: {
        title: string
    }
    payment_to: number
    payment_from: number
    currency: string
    key: number
    id: number
    vacancyRichText: string
    favorite: boolean
}

type ResponseType = {
    objects: VacancyType[]
    more: boolean
    subscription_active: boolean
    subscription_id: number
    total: number
}
