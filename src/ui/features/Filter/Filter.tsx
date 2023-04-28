import React, {memo} from "react";

import s from "./Filter.module.scss"
import {useAppSelector} from "../../../bll/store";
import {Vacancy} from "../Vacancies/Vacancy/Vacancy";

type PropsType = {
    onSetFilterCategories: (catalog: number) => void
}

export const Filter = memo(({onSetFilterCategories}: PropsType) => {

    const catalogues = useAppSelector(state => state.catalogues.catalogues)

    const onClickHandler = (value: number) => {
        onSetFilterCategories(value)
    }

    return (
        <div className={s.filterContainer}>
            <div className={s.filterTop}>
                <div className={s.title}>Фильтры</div>
                <button className={s.reset}>Сбросить все x</button>
            </div>
            <div className={s.filterSettings}>
                <div className={s.title}>Отрасль</div>
                <select className={s.input}>
                    {catalogues && catalogues.map((el, index) => {
                        return <option onClick={() => onClickHandler(1)}>{el.title}</option>
                    })}
                </select>
            </div>
            <div className={s.filterSettings}>
                <div className={s.title}>Оклад</div>
                <input className={s.input} placeholder={"от"} type={"number"}/>
                <input className={s.input} placeholder={"до"} type={"number"}/>
            </div>
            <button className={s.buttonApply}>Применить</button>
        </div>
    );
});