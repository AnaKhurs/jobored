import React, {memo} from "react";

import s from "./Filter.module.scss"

export const Filter = memo(() => {

    return (
        <div className={s.filterContainer}>
            <div className={s.filterTop}>
                <div className={s.title}>Фильтры</div>
                <button className={s.reset}>Сбросить все x</button>
            </div>
            <div className={s.filterSettings}>
                <div className={s.title}>Отрасль</div>
                <input className={s.input} placeholder={"Выберете отрасль"}/>
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