import React, {memo, useCallback, useEffect, useMemo} from "react";
import {GetVacanciesPayloadType} from "../../../dal/vacanciesApi";
import {useAppDispatch, useAppSelector} from "../../../bll/store";
import {getVacancies, setFilter, setPage, setSearchValue} from "../../../bll/vacancies-reducer";
import {getCatalogues} from "../../../bll/catalogues-reducer";
import {Filter} from "../../features/Filter/Filter";
import {Search} from "../../features/Search/Search";
import {Vacancies} from "../../features/Vacancies/Vacancies";
import {Pagination} from "../../features/Pagination/Pagination";
import {Box, Flex} from "@mantine/core";

export const SearchPage = memo(() => {

    const dispatch = useAppDispatch();

    const {
        vacanciesData: {
            count,
            page,
            payment_to,
            payment_from,
            catalogues,
            no_agreement,
            keyword,
            total,
        }
    } = useAppSelector(state => state.vacancies);

    const fetchData: GetVacanciesPayloadType = useMemo(() => {
        return {
            page,
            count,
            catalogues,
            payment_to,
            payment_from,
            no_agreement,
            keyword,
        };
    }, [catalogues, count, keyword, no_agreement, page, payment_from, payment_to])

    useEffect(() => {
        dispatch(getVacancies(fetchData))
        dispatch(getCatalogues({}))
    }, [dispatch, fetchData]);

    const onSetFilter = useCallback((catalogues?: number, payment_from?: number | '', payment_to?: number | '') => {
        dispatch(setFilter({payment_to, payment_from, catalogues}));
        dispatch(setPage(1));
        dispatch(getVacancies({
            ...fetchData,
            catalogues,
            payment_from,
            payment_to,
        }));
    }, [dispatch, fetchData]);

    const onSetSearch = useCallback((keyword: string) => {
        dispatch(setSearchValue(keyword));
        dispatch(getVacancies({
            ...fetchData,
            keyword,
        }));
    }, [dispatch, fetchData]);

    const onPageChange = useCallback((selectedItem: { selected: number }) => {
        const {selected} = selectedItem;
        dispatch(setPage(selected + 1));
        dispatch(getVacancies({
            ...fetchData,
            page: selected + 1,
        }));
    }, [dispatch, fetchData]);

    const {vacanciesData: {vacancies}} = useAppSelector(state => state.vacancies)

    const totalPages = total >= 500 ? 500 : total; //todo
    const pageCount = Math.ceil(totalPages / count);
    const forcePage = page - 1;

    return (
        <Flex justify="space-evenly">
            <Filter onSetFilter={onSetFilter}/>
            <Box>
                <Search onSetSearch={onSetSearch}/>
                <Vacancies vacancies={vacancies}/>
                <Pagination onSetNewPage={onPageChange} forcePage={forcePage} pageCount={pageCount}/>
            </Box>
        </Flex>
    );
});