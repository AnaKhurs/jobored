import React, {memo, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../bll/store";
import {getVacancies} from "../../../bll/vacancies-reducer";
import {GetVacanciesPayloadType} from "../../../dal/vacanciesApi";
import {Search} from "../Search/Search";
import {Pagination} from "../Pagination/Pagination";
import {Vacancies} from "./Vacancies/Vacancies";

import s from "./Result.module.scss"


export const Result = memo(() => {

    const dispatch = useAppDispatch()

    const {
        vacanciesData: {
            pageCount: count,
            page
        }
    } = useAppSelector(state => state.vacancies)

    const fetchData: GetVacanciesPayloadType = {
        page,
        count,
    }

    useEffect(() => {
        dispatch(getVacancies({...fetchData}))
    }, [])

    const onPageChange = (page: number) => {
        dispatch(getVacancies({
            ...fetchData,
            page,
        }))
    }

    return (
        <div className={s.header}>
            <Search/>
            <Vacancies/>
            <Pagination onSetNewPage={onPageChange}/>
        </div>
    );
});