import React, {memo, useEffect, useState} from "react";
import {useAppSelector} from "../../../bll/store";

import s from "./Pagination.module.scss"

type PropsType = {
    onSetNewPage: (page: number) => void
}

export const Pagination = memo(({onSetNewPage}: PropsType) => {

    const {
        vacanciesData: {
            total: vacanciesTotalCount,
            pageCount,
            page: currentPage
        }
    } = useAppSelector(state => state.vacancies)

    const [portionNumber, setPortionNumber] = useState(1)

    const totalAmountOfPages = Math.ceil(vacanciesTotalCount / pageCount)

    const pages: number [] = []
    for (let i = 1; i <= totalAmountOfPages; i++) {
        pages.push(i)
    }

    const leftPortionPageNumber = (portionNumber - 1) + 1
    const rightPortionPageNumber = portionNumber

    const onPageChanged = (page: number) => {
        onSetNewPage(page)
        setPortionNumber(page)
    }

    useEffect(() => {
        setPortionNumber(currentPage)
    }, [currentPage])

    return (
        <div>
            <div>
                <button disabled={portionNumber <= 1}
                        onClick={() => {
                            setPortionNumber(portionNumber - 1)
                            onSetNewPage(portionNumber - 1)

                        }}>prev
                </button>
                {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map(page => {
                        return <button className={currentPage === page ? s.active : s.inactive}
                                       key={page}
                                       onClick={() => onPageChanged(page)}
                        >{page} </button>
                    })}
                {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map(page => {
                        return <button className={currentPage === page ? s.active : s.inactive}
                                       key={page}
                                       onClick={() => onPageChanged(page + 1)}
                        >{page + 1} </button>
                    })}
                {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map(page => {
                        return <button className={currentPage === page ? s.active : s.inactive}
                                       key={page}
                                       onClick={() => onPageChanged(page + 2)}
                        >{page + 2} </button>
                    })}
                {totalAmountOfPages > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                    onSetNewPage(portionNumber + 1)
                }}>next</button>}
            </div>
        </div>
    );
});