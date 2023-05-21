import React, {memo, useCallback, useEffect, useMemo} from "react";
import {GetVacanciesPayloadType} from "../../../dal/vacanciesApi";
import {useAppDispatch, useAppSelector} from "../../../bll/store";
import {getVacancies, setPage} from "../../../bll/vacancies-reducer";
import {Filter} from "../../features/Filter/Filter";
import {Search} from "../../features/Search/Search";
import {Vacancies} from "../../features/Vacancies/Vacancies";
import {Preloader} from "../../features/Preloader/Preloader";
import ReactPaginate from "react-paginate";
import {Box, Flex, Paper, Text} from "@mantine/core";
import Svg from "../../../img/Svg";
import classes from "./SearchPage.module.scss";

export const SearchPage = memo(() => {

    console.log("SearchPage")

    const dispatch = useAppDispatch();

    const {
        vacanciesData: {
            vacancies,
            count,
            page,
            payment_to,
            payment_from,
            catalogues,
            no_agreement,
            keyword,
            total,
        },
        isLoaded
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
    }, [dispatch, fetchData]);

    const onPageChange = useCallback((selectedItem: { selected: number }) => {
        const {selected} = selectedItem;
        dispatch(setPage(selected));
    }, [dispatch]);

    const totalPages = total && total >= 500 ? 500 : total;
    const pageCount = totalPages && Math.ceil(totalPages / count);

    if (!isLoaded) return <Preloader/>

    console.log("vacancies", vacancies)

    return (
        <Flex justify={"center"}>
            <Filter/>
            <Box>
                <Search/>
                {!vacancies
                    ? <Paper className={classes.wrapper}>
                        <Text fz="lg" fw={"bold"}>Ничего не нашлось.</Text>
                        <Text fz="md">Попробуйте изменить условия поиска</Text>
                    </Paper>
                    : <>
                        <Vacancies vacancies={vacancies}/>
                        <ReactPaginate className={classes.pagination}
                                       onPageChange={onPageChange}
                                       breakLabel="..."
                                       nextLabel={<Svg iconName="arrow"/>}
                                       pageRangeDisplayed={3}
                                       marginPagesDisplayed={1}
                                       pageCount={pageCount ?? 0}
                                       previousLabel={<Svg iconName="arrow"/>}
                                       renderOnZeroPageCount={null}
                                       forcePage={page}
                                       pageClassName={classes.pageClassName}
                                       activeClassName={classes.activeClassName}
                                       previousClassName={classes.previousClassName}
                                       nextClassName={classes.nextClassName}
                                       disabledClassName={classes.disabledClassName}
                                       breakClassName={classes.breakClassName}
                        />
                    </>
                }
            </Box>
        </Flex>
    );
});