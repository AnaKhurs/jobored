import React, {memo} from "react";

import s from "./Search.module.scss"

export const Search = memo(() => {

    return (
        <div className={s.container}>
            <input className={s.input} placeholder={"Введите название вакансии"}/>
            <button className={s.button}>Поиск</button>
        </div>
    );
});