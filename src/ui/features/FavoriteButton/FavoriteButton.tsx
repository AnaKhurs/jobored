import React, {memo, useState} from "react";
import Svg from "../../../img/Svg";
import {Group} from "@mantine/core";
import s from './FavoriteButton.module.css'

type PropsType = {}

export const FavoriteButton = memo(({}: PropsType) => {

    const [active, setActive] = useState<boolean>(false)

    const onClickHandler = () => {
        setActive(!active)
        //localStorage.setItem("favorite", "fav") //todo
    }

    return (
        <Group onClick={onClickHandler}>
            {active ? <Svg iconName="fillStar"/> : <Svg iconName="outlineStar"/>}
        </Group>
    );
});