import React, {memo} from "react";
import {TitleVacancy} from "./TitleVacancy/TitleVacancy";
import {BodyVacancy} from "./BodyVacancy/BodyVacancy";
import {Paper} from "@mantine/core";
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
    id: number
    isTitleLink?:boolean
}

export const Vacancy = memo(({
                                 profession,
                                 townTitle,
                                 typeOfWork,
                                 paymentTo,
                                 paymentFrom,
                                 currency,
                                 id,
                                 isTitleLink,
                             }: PropsType) => {

    const {classes} = useStyles();

    return (
        <Paper className={classes.wrapper}>
            <TitleVacancy profession={profession} id={id} isTitleLink={isTitleLink}/>
            <BodyVacancy typeOfWork={typeOfWork}
                         townTitle={townTitle}
                         paymentTo={paymentTo}
                         paymentFrom={paymentFrom}
                         currency={currency}/>
        </Paper>
    );
});