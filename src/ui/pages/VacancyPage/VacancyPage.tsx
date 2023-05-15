import React, {memo, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../bll/store";
import {getVacancy} from "../../../bll/vacancy-reducer";
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
        isLoaded
    } = useAppSelector(state => state.vacancy)

    const [vacancyWithFavorites, setVacancyWithFavorites] = useState<VacancyType>(vacancy)

    useEffect(() => {
        const favorites: VacancyType[] = getFavorites();
        setVacancyWithFavorites(
            favorites.some((f) => vacancy.id === f.id) ? {...vacancy, favorite: true} : vacancy)
    }, [vacancy])

    const rerenderVacancyWithFavorite = (id: number, favorite: boolean) => {
        setVacancyWithFavorites({...vacancy, favorite: favorite})
    }

    if (!isLoaded) {
        dispatch(getVacancy({id: idVacancy}))
        return <Flex direction="row" align="center" h="100vh">
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