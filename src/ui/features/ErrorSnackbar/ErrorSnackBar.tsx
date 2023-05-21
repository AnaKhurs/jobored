import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../bll/store";
import {Notification} from "@mantine/core";
import {setAppError} from "../../../bll/app-reducer";
import Svg from "../../../img/Svg";
import {useStyles} from "./styles";


export const ErrorSnackbar = () => {

    const {classes} = useStyles();
    const {error} = useAppSelector(state => state.app);
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(setAppError(null))
    };

    return (
        <Notification withCloseButton
                      onClose={handleClose}
                      icon={<Svg iconName={"iconX"}/>}
                      color="red"
                      className={classes.notification}>{error}</Notification>);
}