import React, {memo, useCallback, useEffect, useMemo} from "react";
import {GetVacanciesPayloadType} from "../../../dal/vacanciesApi";
import {useAppDispatch, useAppSelector} from "../../../bll/store";
import {cleanVacancies, getVacancies, setPage} from "../../../bll/vacancies-reducer";
import {Filter} from "../../features/Filter/Filter";
import {Search} from "../../features/Search/Search";
import {Vacancies} from "../../features/Vacancies/Vacancies";
import {Preloader} from "../../features/Preloader/Preloader";
import {ModalWrapper} from "../../features/ModalWrapper/ModalWrapper";
import ReactPaginate from "react-paginate";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import {Box, Flex, Paper, Text, Button} from "@mantine/core";
import Svg from "../../../img/Svg";
import {useStyles} from "./styles";

export const SearchPage = memo(() => {

    const {classes} = useStyles();
    const matches = useMediaQuery("(max-width: 780px)");

    const [opened, {open, close}] = useDisclosure(false);

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
        return () => {
            dispatch(cleanVacancies())
        }
    }, [dispatch, fetchData]);

    const onPageChange = useCallback((selectedItem: { selected: number }) => {
        const {selected} = selectedItem;
        dispatch(setPage(selected));
    }, [dispatch]);

    const totalPages = total && total >= 500 ? 500 : total;
    const pageCount = totalPages && Math.ceil(totalPages / count);

    if (!vacancies) return <Preloader/>

    return (
        <Flex justify="center">

            <ModalWrapper mathes={matches} opened={opened} onClose={close}>
                <Filter onClose={close}/>
            </ModalWrapper>

            <Box className={classes.buttonWrapper}>
                <Button onClick={open} className={classes.button}>Фильтры</Button>
            </Box>

            <Box className={classes.resultsWrapper}>
                <Search/>
                {
                    vacancies?.length === 0 &&
                    <Paper className={classes.container}>
                        <Text fz="lg" fw="bold">Ничего не нашлось.</Text>
                        <Text fz="md">Попробуйте изменить условия поиска</Text>
                    </Paper>
                }
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
                               breakClassName={classes.breakClassName}/>
            </Box>
        </Flex>
    );
});