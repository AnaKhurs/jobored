import React, {memo, useCallback} from "react";
import {VacancyType} from "../../../dal/vacanciesApi";
import {addFavorite, removeFavorite} from "../../../utils/serviseFavorite";
import {TitleVacancy} from "./TitleVacancy/TitleVacancy";
import {BodyVacancy} from "./BodyVacancy/BodyVacancy";
import {Paper} from "@mantine/core";
import {useStyles} from "./styles";

type PropsType = {
    vacancy: VacancyType
    rerenderHandler: (id: number, favorite: boolean) => void
    isTitleLink?: boolean
}

export const Vacancy = memo(({
                                 vacancy,
                                 isTitleLink,
                                 rerenderHandler,
                             }: PropsType) => {

    const {classes} = useStyles();

    const toggleFavorite = useCallback(() => {
        if (vacancy.favorite) {
            removeFavorite(vacancy);
        } else {
            addFavorite(vacancy);
        }
        rerenderHandler(vacancy.id, !vacancy.favorite);
    }, [rerenderHandler, vacancy]);

    return (
        <Paper className={classes.wrapper}>
            <TitleVacancy isTitleLink={isTitleLink}
                          profession={vacancy.profession}
                          id={vacancy.id}
                          favorite={vacancy.favorite}
                          toggleFavorite={toggleFavorite}/>
            <BodyVacancy typeOfWork={vacancy.type_of_work.title}
                         townTitle={vacancy.town.title}
                         paymentTo={vacancy.payment_to}
                         paymentFrom={vacancy.payment_from}
                         currency={vacancy.currency}/>
        </Paper>
    );
});