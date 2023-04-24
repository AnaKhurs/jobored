import React, {memo} from "react";

import {Search} from "./Search/Search";
import {Pagination} from "./Pagination/Pagination";
import {Cards} from "./Cards/Cards";

import s from "./Result.module.scss"

export const Result = memo(() => {

    return (
        <div className={s.header}>
            <Search/>
            <Cards/>
            <Pagination/>
        </div>
    );
});