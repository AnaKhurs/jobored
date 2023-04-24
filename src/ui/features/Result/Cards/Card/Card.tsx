import React, {memo} from "react";

import s from "./Card.module.scss"

import locationIcon from "../../../../../img/location.svg";
import starIcon from "../../../../../img/star.svg";

export const Card = memo(() => {

    return (
        <div className={s.container}>
            <div className={s.top}>
                <div className={s.title}>Менеджер-дизайнер</div>
                <img src={starIcon} alt={"favorite"}/>
            </div>
            <div className={s.terms}>
                <div className={s.salary}>з/п от 70000 rub</div>
                <div className={s.dot}/>
                <div className={s.schedule}>Полный рабочий день</div>
            </div>
            <div className={s.location}>
                <img src={locationIcon} alt={"location"}/>
                <span className={s.locationText}>Новый Уренгой</span>
            </div>
        </div>
    );
});