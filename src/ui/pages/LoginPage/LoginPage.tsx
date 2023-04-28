import React, {memo} from "react";
import {Navigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../../bll/store";
import {loginTC} from "../../../bll/login-reducer";
import {PATH} from '../../../utils/paths';

import s from "./LoginPage.module.scss";

const login = "sergei.stralenia@gmail.com";
const password = "paralect123";
const client_id = 2356;
const client_secret = "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948";
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