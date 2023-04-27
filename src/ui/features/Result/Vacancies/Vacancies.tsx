import React, {memo, useEffect} from "react";

import s from "./Vacancies.module.scss"
import {Vacancy} from "./Vacancy/Vacancy";
import {getVacancies} from "../../../../bll/vacancies-reducer";
import {useAppDispatch, useAppSelector} from "../../../../bll/store";

export const Vacancies = memo(() => {

    const dispatch = useAppDispatch()

/*    useEffect(() => {
        dispatch(getVacancies({}))
    }, [])*/

    const {vacanciesData} = useAppSelector(state => state.vacancies)

    const {vacancies} = vacanciesData

    return (
        <div>
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
        </div>
    )
});