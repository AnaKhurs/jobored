import React from "react";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../bll/store";
import {PATH} from "../utils/paths";

export const NotAuthRedirect = (Component: React.FC) => {
    function NewComponent(props: any) {
        const {isInitialized} = useAppSelector(state => state.app);
        if (!isInitialized) {
            return <Navigate to={PATH.LOGIN}/>; //toDo
        } else return <Component {...props}/>;
    }
    return NewComponent
};