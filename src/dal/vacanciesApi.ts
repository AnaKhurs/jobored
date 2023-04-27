import {instance} from './instance';

export type GetVacanciesPayloadType = {
    published?: number,
    keyword?: string,
    payment_from?: number,
    payment_to?: number,
    catalogues?: number,

    page?: number,
    count?: number,


};

export const vacanciesApi = {
    getVacancies(data: GetVacanciesPayloadType) {
        return instance.get<ResponseType>(`vacancies/`, {
            headers: {
                "X-Api-App-Id": "v3.r.137440105.399b9c5f19384345afe0ad0339e619e71c66af1d.800f8642a38256679e908c370c44267f705c2909",
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
    currency: number
}

type ResponseType = {
    objects: VacancyType[]
    more: boolean
    subscription_active: boolean
    subscription_id: number
    total: number
}
