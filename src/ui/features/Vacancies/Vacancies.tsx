import React, {memo} from "react";
import {useAppSelector} from "../../../bll/store";
import {Vacancy} from "./Vacancy/Vacancy";
import {List} from "@mantine/core";

export const Vacancies = memo(() => {

    const {vacanciesData: {vacancies}} = useAppSelector(state => state.vacancies)

    return (
        <List>
            {vacancies && vacancies.map((el, index) => {
                return <Vacancy key={index}
                                profession={el.profession}
                                typeOfWork={el.type_of_work.title}
                                townTitle={el.town.title}
                                firmName={el.firm_name}
                                currency={el.currency}
                                paymentTo={el.payment_to}
                                paymentFrom={el.payment_from}
                />
            })}
        </List>
    )
});