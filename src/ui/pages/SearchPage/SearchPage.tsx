import React, {memo, useCallback, useEffect} from "react";

import {GetVacanciesPayloadType} from "../../../dal/vacanciesApi";
import {useAppDispatch, useAppSelector} from "../../../bll/store";
import {getVacancies, setFilter, setPage} from "../../../bll/vacancies-reducer";
import {getCatalogues} from "../../../bll/catalogues-reducer";
import {Filter} from "../../features/Filter/Filter";
import {Search} from "../../features/Search/Search";
import {Vacancies} from "../../features/Vacancies/Vacancies";
import {Pagination} from "../../features/Pagination/Pagination";
import {NotAuthRedirect} from "../../../hoc/NotAuthRedirect";

import s from "./SearchPage.module.scss"

export const Component = memo(() => {

    const dispatch = useAppDispatch();

    const {
        vacanciesData: {
            count,
            page,
            payment_to,
            payment_from,
            catalogues,
            no_agreement,
        }
    } = useAppSelector(state => state.vacancies);

    const fetchData: GetVacanciesPayloadType = {
        page,
        count,
        catalogues,
        payment_to,
        payment_from,
        no_agreement,
    };

    useEffect(() => {
        dispatch(getVacancies(fetchData))
        dispatch(getCatalogues({}))
    }, []);//toDo

    const onPageChange = (selectedItem: { selected: number }) => {
        const {selected} = selectedItem;
        dispatch(setPage(selected + 1));
        dispatch(getVacancies({
            ...fetchData,
            page: selected + 1,
        }));
    };

    const onSetFilter = useCallback((catalogues?: number | null, payment_from?: number | '' | null, payment_to?: number | '' | null) => {
        dispatch(setFilter({payment_to, payment_from, catalogues}));
        dispatch(setPage(1));
        dispatch(getVacancies({
            ...fetchData,
            catalogues,
            payment_from,
            payment_to,
        }));
    }, [catalogues, payment_from, payment_to]);

    return (
        <div className={s.container}>
            <Filter onSetFilter={onSetFilter}/>
            <div>
                <Search/>
                <Vacancies/>
                <Pagination onSetNewPage={onPageChange}
                />
            </div>
        </div>
    );
});

export const SearchPage = NotAuthRedirect(Component);