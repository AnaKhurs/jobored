import React, {memo, useEffect, useState} from "react";
import usePagination from "../../../hooks/usePagination";
import {getFavorites} from "../../../utils/serviseFavorite";
import {Pagination} from "../../features/Pagination/Pagination";
import {VacancyType} from "../../../dal/vacanciesApi";
import {EmptyFavorites} from "./EmptyFavorites/EmptyFavorites";
import {Vacancies} from "../../features/Vacancies/Vacancies";
import {Flex} from "@mantine/core";
import {useStyles} from "./styles";

export const FavoritesPage = memo(() => {

    const {classes} = useStyles();

    const [favorites, setFavorites] = useState<VacancyType[]>()

    useEffect(() => {
        setFavorites(getFavorites());
    }, []);

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage: 4,
        count: favorites ? favorites.length : 0,
    });

    if (favorites?.length === 0) {
        return <EmptyFavorites/>
    }

    const paginationArray = favorites?.slice(firstContentIndex, lastContentIndex);

    return (
        <Flex direction="column" className={classes.resultsWrapper}>
            {paginationArray &&
            <>
                <Vacancies vacancies={paginationArray}/>
                <Pagination prevPage={prevPage}
                            nextPage={nextPage}
                            setPage={setPage}
                            page={page}
                            totalPages={totalPages}/>
            </>}
        </Flex>
    )
})