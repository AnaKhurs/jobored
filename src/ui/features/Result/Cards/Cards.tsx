import React, {memo} from "react";

import s from "./Cards.module.scss"
import {Card} from "./Card/Card";

export const Cards = memo(() => {

    return (
        <div>
            <Card/>
        </div>
    );
});