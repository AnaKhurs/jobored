import React, {memo} from "react";

import {Filter} from "../../features/Filter/Filter";
import {Result} from "../../features/Result/Result";

import s from "./SearchPage.module.scss"
import {NotAuthRedirect} from "../../../hoc/NotAuthRedirect";

export const Component = memo(() => {

    return (
        <div className={s.container}>
            <Filter/>
            <Result/>
        </div>
    );
});

export const SearchPage = NotAuthRedirect(Component)