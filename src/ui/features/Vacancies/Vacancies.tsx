import React, {memo} from "react";
import {useAppSelector} from "../../../bll/store";
import {Vacancy} from "../Vacancy/Vacancy";
import {Box} from "@mantine/core";
import {VacancyType} from "../../../dal/vacanciesApi";

type PropsType = {
    vacancies: VacancyType[]
}

export const Vacancies = memo(({vacancies}: PropsType) => {

    return (
        <Box>
            {vacancies && vacancies.map((el, index) => {
                return <Vacancy key={index}
                                profession={el.profession}
                                typeOfWork={el.type_of_work.title}
                                townTitle={el.town.title}
                                firmName={el.firm_name}
                                currency={el.currency}
                                paymentTo={el.payment_to}
                                paymentFrom={el.payment_from}
                                id={el.id}
                                isTitleLink={true}
                />
            })}
        </Box>
    )
});