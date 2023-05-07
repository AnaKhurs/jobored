import React, {memo} from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../../bll/store";
import {getVacancy, setIdVacancy} from "../../../../bll/vacancy-reducer";
import {FavoriteButton} from "../../FavoriteButton/FavoriteButton";
import {Flex, Group, Paper, Text, Anchor} from "@mantine/core";
import {PATH} from "../../../../utils/paths";
import Svg from "../../../../img/Svg";
import {useStyles} from "./styles";

type PropsType = {
    profession?: string
    firmName?: string
    townTitle?: string
    cataloguesTitle?: string
    typeOfWork: string
    paymentTo?: number
    paymentFrom?: number
    currency?: string
    id?: number
}

export const Vacancy = memo(({
                                 profession,
                                 townTitle,
                                 typeOfWork,
                                 paymentTo,
                                 paymentFrom,
                                 currency,
                                 id,
                             }: PropsType) => {

    const {classes} = useStyles();

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const navigateToVacancyPage = (id: number) => {
        dispatch(setIdVacancy(id));
        dispatch(getVacancy({id}));
        navigate(PATH.VACANCY + `/${id}`);
    };

    const getCurrencyDescription = (paymentFrom?: number, paymentTo?: number, currency?: string) => {
        if (paymentFrom && paymentTo && currency) {
            return `з/п ${paymentFrom} - ${paymentTo} ${currency}`
        }
        if (paymentFrom === 0 && currency) {
            return `з/п от ${paymentFrom} ${currency}`
        }
        if (paymentFrom && currency) {
            return `з/п от ${paymentFrom} ${currency}`
        }
        if (paymentTo && currency) {
            return `з/п до ${paymentTo} ${currency}`
        }
        return ""
    };

    return (
        <Paper className={classes.wrapper}>
            <Flex justify="space-between" align="center">
                {id ?
                    <Anchor fz="lg"
                          fw={600}
                          color="#5E96FC" onClick={() => navigateToVacancyPage(id)}>{profession}</Anchor>
                    :
                    <Text fz="xl"
                          fw={700}
                          color="#232134">{profession}</Text>
                }
                <FavoriteButton/>
            </Flex>
            <Group m="13px 0">
                <Text fz="md"
                      fw={600}
                      color="#232134">
                    {getCurrencyDescription(paymentFrom, paymentTo, currency)}
                </Text>
                <Svg iconName="dot"/>
                <Text fz="md"
                      color="#232134">{typeOfWork}</Text>
            </Group>
            <Group className={classes.location}>
                <Svg iconName="location"/>
                <Text>{townTitle}</Text>
            </Group>
        </Paper>
    );
});