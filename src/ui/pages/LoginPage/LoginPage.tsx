import React, {memo} from "react";
import {Navigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../../bll/store";
import {loginTC} from "../../../bll/login-reducer";
import {PATH} from '../../../utils/paths';

import s from "./LoginPage.module.scss";

const login = "sergei.stralenia@gmail.com";
const password = "paralect123";
const client_id = 2231;
const client_secret = "v3.r.137440105.399b9c5f19384345afe0ad0339e619e71c66af1d.800f8642a38256679e908c370c44267f705c2909";
const hr = 0;

export const LoginPage = memo(() => {

    const dispatch = useAppDispatch()

    const onClickHandler = () => {
        dispatch(loginTC({
            login: login,
            password: password,
            client_id: client_id,
            client_secret: client_secret,
            hr: hr,
        }))
    }

    const isLoggedIn = useAppSelector<boolean>(state => state.login.isLoggedIn)


    if (isLoggedIn) {
        return <Navigate to={PATH.MAIN}/>
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
            <button className={s.button} onClick={onClickHandler}>Войти</button>
        </div>
    );
});