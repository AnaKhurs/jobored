import React, {memo} from "react";

import s from "./Header.module.scss"

import icon from "../../../img/icon.svg";

export const Header = memo(() => {

    return (
        <div className={s.header}>
            <div className={s.icon}>
                <img src={icon} alt={"icon"}/>
            </div>
            <div className={s.navigation}>
                <div className={s.navigationItem}>Поиск Вакансий</div>
                <div className={s.navigationItem}>Избранное</div>
            </div>
        </div>
    );
});