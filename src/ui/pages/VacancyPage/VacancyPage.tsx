import React, {memo} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../bll/store";
import {getVacancy} from "../../../bll/vacancy-reducer";
import {Vacancy} from "../../features/Vacancy/Vacancy";
import {Flex, Loader, Paper} from "@mantine/core";
import {useStyles} from "./styles";

export const VacancyPage = memo(() => {

    const {classes} = useStyles();

    const dispatch = useAppDispatch();
    const {idVacancy} = useParams();
    const {
        vacancy: {
            vacancyRichText,
            profession,
            town,
            type_of_work,
            payment_from,
            payment_to,
            currency,
            firm_name,
        },
        isLoaded
    } = useAppSelector(state => state.vacancy)

    if (!isLoaded) {
        dispatch(getVacancy({id: idVacancy}))
        return <Flex direction="row" align="center" h="100vh">
            <Loader size="xl" m="0 auto"/>
        </Flex>
    }

    return (
        <Flex direction={"column"} justify={"center"} align={"center"}>
            <Vacancy profession={profession}
                     typeOfWork={type_of_work.title}
                     townTitle={town.title}
                     firmName={firm_name}
                     currency={currency}
                     paymentTo={payment_to}
                     paymentFrom={payment_from}
            />
            <Paper className={classes.wrapper}
                   dangerouslySetInnerHTML={{__html: vacancyRichText}} //todo
            />
        </Flex>
    );
});