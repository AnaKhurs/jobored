import React, {memo, useEffect, useState} from "react";
import {VacancyType} from "../../../dal/vacanciesApi";
import {getFavorites} from "../../../utils/serviseFavorite";
import {Vacancy} from "../Vacancy/Vacancy";
import {Box} from "@mantine/core";

type PropsType = {
    vacancies: VacancyType[]
}

export const Vacancies = memo(({vacancies}: PropsType) => {

    const [vacanciesWithFavorites, setVacanciesWithFavorites] = useState<VacancyType[]>([])

    useEffect(() => {
        const favorites: VacancyType[] = getFavorites();
        setVacanciesWithFavorites(
            vacancies.map((el) => (
                favorites.some((f) => el.id === f.id) ? {...el, favorite: true} : {...el, favorite: false}))
        )
    }, [vacancies])

    const rerenderVacanciesWithFavorites = (id: number, favorite: boolean) => {
        setVacanciesWithFavorites(prev => prev.map(el => el.id === id ? {...el, favorite: favorite} : el))
    }

    return (
        <Box>
            {vacanciesWithFavorites.map((el, index) => {
                return <Vacancy key={index}
                                vacancy={el}
                                rerenderHandler={rerenderVacanciesWithFavorites}
                                isTitleLink
                />
            })}
        </Box>
    )
});