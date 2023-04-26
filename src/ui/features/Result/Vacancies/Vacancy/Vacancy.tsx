import React, {memo} from "react";

import s from "./Vacancy.module.scss"

import locationIcon from "../../../../../img/location.svg";
import starIcon from "../../../../../img/star.svg";

type PropsType = {
    profession: string
    firmName?: string
    townTitle: string
    cataloguesTitle?: string
    typeOfWork: string
    paymentTo?: number
    paymentFrom?: number
    currency?: number
}

export const Vacancy = memo(({
                                 profession,
                                 townTitle,
                                 typeOfWork,
                                 paymentTo,
                                 paymentFrom,
                                 currency,
                             }: PropsType) => {

    return (
        <div className={s.container}>
            <div className={s.top}>
                <div className={s.title}>{profession}</div>
                <img src={starIcon} alt={"favorite"}/>
            </div>
            <div className={s.terms}>
                <div className={s.salary}>{`з/п от ${paymentTo} до ${paymentFrom} ${currency}`}</div>
                <div className={s.dot}/>
                <div className={s.schedule}>{typeOfWork}</div>
            </div>
            <div className={s.location}>
                <img src={locationIcon} alt={"location"}/>
                <span className={s.locationText}>{townTitle}</span>
            </div>
        </div>
    );
});