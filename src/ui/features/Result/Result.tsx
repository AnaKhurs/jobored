import React, {memo, useEffect} from "react";

import {Search} from "./Search/Search";
import {Pagination} from "./Pagination/Pagination";
import {Vacancies} from "./Vacancies/Vacancies";

import s from "./Result.module.scss"

export const Result = memo(() => {

    return (
        <div className={s.header}>
            <Search/>
            <Vacancies/>
            <Pagination/>
        </div>
    );
});