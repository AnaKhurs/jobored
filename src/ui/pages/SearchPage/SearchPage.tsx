import React, {memo, useEffect} from "react";

import {GetVacanciesPayloadType} from "../../../dal/vacanciesApi";
import {useAppDispatch, useAppSelector} from "../../../bll/store";
import {getVacancies} from "../../../bll/vacancies-reducer";
import {Filter} from "../../features/Filter/Filter";
import {Search} from "../../features/Search/Search";
import {Vacancies} from "../../features/Vacancies/Vacancies";
import {Pagination} from "../../features/Pagination/Pagination";
import {NotAuthRedirect} from "../../../hoc/NotAuthRedirect";

import s from "./SearchPage.module.scss"
import {getCatalogues} from "../../../bll/catalogues-reducer";

export const Component = memo(() => {

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
        dispatch(getCatalogues({}))
    }, [])

    const onPageChange = (page: number) => {
        dispatch(getVacancies({
            ...fetchData,
            page,
        }))
    }

    const onSetFilterCategories = (catalog: number) => {
        dispatch(getVacancies({
            ...fetchData,
            catalog,
        }))
    }

    return (
        <div className={s.container}>
            <Filter onSetFilterCategories={onSetFilterCategories}/>
            <div>
                <Search/>
                <Vacancies/>
                <Pagination onSetNewPage={onPageChange}/>
            </div>
        </div>
    );
});

export const SearchPage = NotAuthRedirect(Component)