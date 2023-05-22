import {instance} from "./instance";

export const cataloguesApi = {
    getCatalogues() {
        return instance.get<CatalogType[]>(`catalogues/`, {
            headers: {
                "X-Api-App-Id": "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            },
        })
    },
}

type PositionsType = {
    title_rus: string
    url_rus: string
    title: string
    id_parent: number
    key: number
}

export type CatalogType = {
    title_rus: string
    url_rus: string
    title: string
    title_trimmed: string
    key: number
    positions: PositionsType[]
}
