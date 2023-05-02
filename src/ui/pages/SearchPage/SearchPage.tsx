import React, {memo, useCallback, useEffect} from "react";

import {GetVacanciesPayloadType} from "../../../dal/vacanciesApi";
import {useAppDispatch, useAppSelector} from "../../../bll/store";
import {getVacancies} from "../../../bll/vacancies-reducer";
import {Filter} from "../../features/Filter/Filter";
import {Search} from "../../features/Search/Search";
import {Vacancies} from "../../features/Vacancies/Vacancies";
import {PaginationComponent} from "../../features/PaginationComponent/PaginationComponent";
import {NotAuthRedirect} from "../../../hoc/NotAuthRedirect";

import s from "./SearchPage.module.scss"
import {getCatalogues} from "../../../bll/catalogues-reducer";
import {Pagination} from "../../features/PaginationComponent/Pagination";

export const Component = memo(() => {

    const dispatch = useAppDispatch()

    const {
        vacanciesData: {
            pageCount: count,
            page,
            catalogues,
            payment_to,
            payment_from,
        }
    } = useAppSelector(state => state.vacancies)

    const fetchData: GetVacanciesPayloadType = {
        page,
        count,
        catalogues,
        payment_to,
        payment_from,
    }

    useEffect(() => {
        dispatch(getVacancies({...fetchData}))
        dispatch(getCatalogues({}))
    }, [])

    const onPageChange = (selectedItem: { selected: number }) => {
        const {selected} = selectedItem
        dispatch(getVacancies({
            ...fetchData,
            page: selected + 1,
        }))
    }

    const onSetFilter = useCallback((catalogues?: number | null, payment_from?: number | '' | null, payment_to?: number | '' | null) => {
        dispatch(getVacancies({
            ...fetchData,
            catalogues,
            payment_from,
            payment_to,
        }))
    }, [catalogues, payment_from, payment_to])


    return (
        <div className={s.container}>
            <Filter onSetFilter={onSetFilter}/>
            <div>
                <Search/>
                <Vacancies/>
                {/*                <PaginationComponent onSetNewPage={onPageChange}/>*/}
                {/*                <NewPagination onSetNewPage={onPageChange}/>*/}
                <Pagination onSetNewPage={onPageChange}
                />
            </div>
        </div>
    );
});

export const SearchPage = NotAuthRedirect(Component)