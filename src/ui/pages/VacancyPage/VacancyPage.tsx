import React, {memo, useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../bll/store";
import {cleanVacancy, getVacancy} from "../../../bll/vacancies-reducer";
import {VacancyType} from "../../../dal/vacanciesApi";
import {Preloader} from "../../features/Preloader/Preloader";
import {Vacancy} from "../../features/Vacancy/Vacancy";
import {Flex, Paper} from "@mantine/core";
import {getFavorites} from "../../../utils/serviseFavorite";
import {useStyles} from "./styles";

export const VacancyPage = memo(() => {

    const {classes} = useStyles();

    const {idVacancy} = useParams();
    const dispatch = useAppDispatch();
    const {
        vacancy,
    } = useAppSelector(state => state.vacancies);
    const [vacancyWithFavorites, setVacancyWithFavorites] = useState<VacancyType>()

    useEffect(() => {
        dispatch(getVacancy({id: idVacancy}))
    }, [dispatch, idVacancy])

    useEffect(() => {
        return () => {
            dispatch(cleanVacancy())
        }
    }, [dispatch])

    useEffect(() => {
        const favorites: VacancyType[] = getFavorites();
        vacancy && setVacancyWithFavorites(
            favorites.some((f) => vacancy.id === f.id) ? {...vacancy, favorite: true} : vacancy)
    }, [vacancy])

    const rerenderVacancyWithFavorite = useCallback((id?: number, favorite?: boolean) => {
        vacancy && setVacancyWithFavorites({...vacancy, favorite: !!favorite})
    }, [vacancy])

    if (!vacancy) {
        return <Preloader/>
    }

    return (
        <Flex direction="column" justify="center" align="center">
            <Vacancy vacancy={vacancyWithFavorites} rerenderHandler={rerenderVacancyWithFavorite}/>
            <Paper className={classes.wrapper}
                   dangerouslySetInnerHTML={{__html: vacancy.vacancyRichText}}/>
        </Flex>
    );
});