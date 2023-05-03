import React from "react";
import ReactPaginate from "react-paginate";
import {useAppSelector} from "../../../bll/store";
import Svg from "../../../img/Svg";
import s from "./Pagination.module.scss"

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

    const count = Math.ceil(total / pageCount);//toDo

    return (
        <ReactPaginate className={s.pagination}
                       onPageChange={onSetNewPage}
                       breakLabel="..."
                       nextLabel={<Svg iconName="arrow"/>}
                       pageRangeDisplayed={3}
                       marginPagesDisplayed={1}
                       pageCount={count}
                       previousLabel={<Svg iconName="arrow"/>}
                       renderOnZeroPageCount={null}
                       pageClassName={s.pageClassName}
                       activeClassName={s.activeClassName}
                       previousClassName={s.previousClassName}
                       nextClassName={s.nextClassName}
                       disabledClassName={s.disabledClassName}
                       breakClassName={s.breakClassName}
        />
    );
};