import React, {memo, useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../bll/store";
import {cleanVacancy, getVacancy} from "../../../bll/vacancies-reducer";
import {Vacancy} from "../../features/Vacancy/Vacancy";
import {Flex, Loader, Paper} from "@mantine/core";
import {useStyles} from "./styles";
import {VacancyType} from "../../../dal/vacanciesApi";
import {getFavorites} from "../../../utils/serviseFavorite";

export const VacancyPage = memo(() => {

    const {classes} = useStyles();

    const dispatch = useAppDispatch();
    const {idVacancy} = useParams();
    const {
        vacancy,
    } = useAppSelector(state => state.vacancies);

    const [vacancyWithFavorites, setVacancyWithFavorites] = useState<VacancyType>()

    useEffect(() => {
        dispatch(getVacancy({id: idVacancy}))
    }, [dispatch, idVacancy])

    useEffect(() => {
        const favorites: VacancyType[] = getFavorites();
        vacancy && setVacancyWithFavorites(
            favorites.some((f) => vacancy.id === f.id) ? {...vacancy, favorite: true} : vacancy)
    }, [vacancy])

    useEffect(() => {
        return () => {
            dispatch(cleanVacancy())
        }
    }, [dispatch])


    const rerenderVacancyWithFavorite = useCallback((id?: number, favorite?: boolean) => {
        vacancy && favorite && setVacancyWithFavorites({...vacancy, favorite: favorite})
    }, [vacancy])

    if (!vacancy) {
        dispatch(getVacancy({id: idVacancy}))
        return <Flex direction="row" align="center" h="80vh">
            <Loader size="xl" m="0 auto"/>
        </Flex>
    }

    return (
        <Flex direction={"column"} justify={"center"} align={"center"}>
            <Vacancy vacancy={vacancyWithFavorites} rerenderHandler={rerenderVacancyWithFavorite}/>
            <Paper className={classes.wrapper}
                   dangerouslySetInnerHTML={{__html: vacancy.vacancyRichText}} //todo
            />
        </Flex>
    );
});