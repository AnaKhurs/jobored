import React, {memo, useCallback} from "react";
import {EmptyFavorites} from "./EmptyFavorites/EmptyFavorites";
import {getFavorites} from "../../features/Vacancy/serviseFavorite";
import {Vacancies} from "../../features/Vacancies/Vacancies";
import {useAppDispatch, useAppSelector} from "../../../bll/store";
import {Pagination} from "../../features/Pagination/Pagination";
import {Flex} from "@mantine/core";
import usePagination from "../../../hooks/usePagination";
import {Vacancy} from "../../features/Vacancy/Vacancy";

export const FavoritesPage = memo(() => {

    const dispatch = useAppDispatch();


    const onChangePage = useCallback((selectedItem: { selected: number }) => {
        const {selected} = selectedItem;
        /*        dispatch(setPage(selected + 1));
                dispatch(getVacancies({
                    page: selected + 1,
                }));*/


    }, [dispatch]);

    const {vacanciesData: {vacancies}} = useAppSelector(state => state.vacancies);
    const favoritesId = getFavorites();
    const favorites = vacancies.filter(el => favoritesId?.includes(el.id));

    const forcePage = 1;

    // const {
    //     firstContentIndex,
    //     lastContentIndex,
    //     nextPage,
    //     prevPage,
    //     page,
    //     setPage,
    //     totalPages,
    // } = usePagination({
    //     contentPerPage: 3,
    //     count: favorites.length,
    // });


    if (favorites.length === 0) {
        return <EmptyFavorites/>
    }

    return (
        <Flex direction="column" align="center">
            <Vacancies vacancies={favorites}/>
            <Pagination onSetNewPage={onChangePage} pageCount={favorites.length} forcePage={forcePage}/>

{/*            <div className="items">
                {favorites
                    .slice(firstContentIndex, lastContentIndex)
                    .map((el: any) => (
                        <Vacancy key={el.id}
                                 id={el.id}
                                 typeOfWork={el.typeOfWork}
                                 townTitle={el.townTitle}
                                 paymentTo={el.paymentTo}
                                 paymentFrom={el.payment_from}
                                 currency={el.currency}
                                 profession={el.profession}/>
                    ))}
            </div>
            <div className="pagination">
                <p className="text">
                    {page}/{totalPages}
                </p>
                <button onClick={prevPage} className="page">
                    &larr;
                </button>
                 @ts-ignore
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
            </div>*/}

        </Flex>
    )
})