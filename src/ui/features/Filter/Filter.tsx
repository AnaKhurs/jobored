import React, {ChangeEvent, memo, useState} from "react";
import {useAppSelector} from "../../../bll/store";

import s from "./Filter.module.scss"

type PropsType = {
    onSetFilter: (catalogues: number, payment_from: number, payment_to: number) => void
}

export const Filter = memo(({onSetFilter}: PropsType) => {

    const catalogues = useAppSelector(state => state.catalogues.catalogues)

    const [keyCatalog, setKeyCatalog] = useState<number | string>('')
    const [payment_from, setPayment_from] = useState<number>(0)
    const [payment_to, setPayment_to] = useState<number>(1000000)

    const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setKeyCatalog(+e.target.value);
    }

    const onChangePaymentFromHandler = (value: number) => {
        setPayment_from(value)
    }

    const onChangePaymentToHandler = (value: number) => {
        setPayment_to(value)
    }

    const onClickHandler = () => {
        onSetFilter(+keyCatalog, payment_from, payment_to)
    }

    const onClickResetFilter = () => {
        setKeyCatalog('');
        setPayment_from(0);
        setPayment_to(0)
        onSetFilter(0, 0, 0)
    }

    return (
        <div className={s.filterContainer}>
            <div className={s.filterTop}>
                <div className={s.title}>Фильтры</div>
                <button className={s.reset} onClick={onClickResetFilter}>Сбросить все x</button>
            </div>
            <div className={s.filterSettings}>
                <div className={s.title}>Отрасль</div>
                <select className={s.input} onChange={onChangeSelectHandler}>
                    <option value="" disabled selected>Выберете отрасль</option>
                    {catalogues && catalogues.map((el, index) => {
                        return <option value={el.key}>{el.title}</option>
                    })}
                </select>
            </div>
            <div className={s.filterSettings}>
                <div className={s.title}>Оклад</div>
                <input className={s.input}
                       value={payment_from}
                       onChange={(e) => onChangePaymentFromHandler(+e.currentTarget.value)}
                       placeholder={"от"}
                       type={"number"}/>
                <input className={s.input}
                       value={payment_to}
                       onChange={(e) => onChangePaymentToHandler(+e.currentTarget.value)}
                       placeholder={"до"}
                       type={"number"}/>
            </div>
            <button className={s.buttonApply} onClick={onClickHandler}>Применить</button>
        </div>
    );
});