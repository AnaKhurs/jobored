import React, {memo} from "react";
import usePagination from "../../../hooks/usePagination";
import {getFavorites} from "../../../utils/serviseFavorite";
import {VacancyType} from "../../../dal/vacanciesApi";
import {EmptyFavorites} from "./EmptyFavorites/EmptyFavorites";
import {Vacancies} from "../../features/Vacancies/Vacancies";
import {Flex} from "@mantine/core";

export const FavoritesPage = memo(() => {

    const favorites: VacancyType[] = getFavorites();

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
        count: favorites.length,
    });

    if (favorites.length === 0) {
        return <EmptyFavorites/>
    }

    const paginationArray = favorites.slice(firstContentIndex, lastContentIndex)

    return (
        <Flex direction="column" align="center">
            <div className="items">
                <Vacancies vacancies={paginationArray}/>
            </div>
            <div className="pagination">
                <button onClick={prevPage} className="page">
                    &larr;
                </button>
                {/* @ts-ignore*/}
                {[...Array(totalPages).keys()].map((el) => (
                    <button
                        onClick={() => setPage(el + 1)}
                        key={el}
                        className={`page ${page === el + 1 ? "active" : ""}`}
                    >
                        {el + 1}
                    </button>
                ))}
                <button onClick={nextPage} className="page">
                    &rarr;
                </button>
            </div>
        </Flex>
    )
})