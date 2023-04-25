import React, {memo} from "react";

import {Filter} from "../../features/Filter/Filter";
import {Result} from "../../features/Result/Result";

import s from "./SearchPage.module.scss"

export const SearchPage = memo(() => {

    return (
        <div className={s.container}>
            <Filter/>
            <Result/>
        </div>
    );
});