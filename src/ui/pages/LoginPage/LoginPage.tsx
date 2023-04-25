import React, {memo} from "react";

import {useAppDispatch} from "../../../bll/store";
import {loginTC} from "../../../bll/login-reducer";

import s from "./LoginPage.module.scss"

export const LoginPage = memo(() => {

    const dispatch = useAppDispatch()

    const onClickHandler = () => {
        dispatch(loginTC({
            login: "sergei.stralenia@gmail.com",
            password: "paralect123",
            client_id: 2231,
            client_secret: "v3.r.137440105.399b9c5f19384345afe0ad0339e619e71c66af1d.800f8642a38256679e908c370c44267f705c2909",
            hr: 0,
        }))
    }

    return (
        <div className={s.loginForm}>
            <div className={s.field}>
                <div className={s.title}>Логин</div>
                <input className={s.input} value={"sergei.stralenia@gmail.com"}/>
            </div>
            <div className={s.field}>
                <div className={s.title}>Пароль</div>
                <input className={s.input} value={"paralect123"}/>
            </div>
            <button className={s.button} onClick={onClickHandler}>войти</button>
        </div>
    );
});