import React from "react";
import ReactPaginate from "react-paginate";
import Svg from "../../../img/Svg";
import s from "./Pagination.module.scss"
import {useAppSelector} from "../../../bll/store";

type PropsType = {
    onSetNewPage: (selectedItem: { selected: number }) => void
}

export const Pagination = ({onSetNewPage}: PropsType) => {

        const {
            vacanciesData: {
                total,
                count,
                page,
            }
        } = useAppSelector(state => state.vacancies);

        const totalPages = total >= 500 ? 500 : total; //todo
        const pageCount = Math.ceil(totalPages / count);
        const forcePage = page - 1;

    return (
        <ReactPaginate className={s.pagination}
                       onPageChange={onSetNewPage}
                       breakLabel="..."
                       nextLabel={<Svg iconName="arrow"/>}
                       pageRangeDisplayed={3}
                       marginPagesDisplayed={1}
                       pageCount={pageCount}
                       previousLabel={<Svg iconName="arrow"/>}
                       renderOnZeroPageCount={null}
                       forcePage={forcePage}
                       pageClassName={s.pageClassName}
                       activeClassName={s.activeClassName}
                       previousClassName={s.previousClassName}
                       nextClassName={s.nextClassName}
                       disabledClassName={s.disabledClassName}
                       breakClassName={s.breakClassName}
        />
    );
};