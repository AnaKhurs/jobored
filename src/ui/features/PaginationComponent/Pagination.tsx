import React from "react";
import ReactPaginate from "react-paginate";
import {useAppSelector} from "../../../bll/store";

import s from "./Pagination.module.scss"
import Svg from "../../../img/Svg";

type PropsType = {
    onSetNewPage: (selectedItem: { selected: number }) => void
}

export const Pagination = ({onSetNewPage}: PropsType) => {

    const {
        vacanciesData: {
            total,
            pageCount,
        }
    } = useAppSelector(state => state.vacancies);

    const count = Math.ceil(total / pageCount);

    return (
        <ReactPaginate className={s.pagination}
                       breakLabel="..."
                       nextLabel={<Svg iconName="arrow"/>}
                       onPageChange={onSetNewPage}
                       pageRangeDisplayed={3}
                       pageCount={count}
                       previousLabel={<Svg iconName="arrow"/>}
                       renderOnZeroPageCount={null}
                       containerClassName={s.containerClassName}
                       pageClassName={s.pageClassName}
            /*pageLinkClassName={s.pageLinkClassName}*/
                       activeClassName={s.activeClassName}
                       previousClassName={s.previousClassName}
                       nextClassName={s.nextClassName}
            /*                       previousLinkClassName={s.previousLinkClassName}*/
                       disabledClassName={s.disabledClassName}
                       breakClassName={s.breakClassName}

        />
    );
};