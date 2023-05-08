import React, {memo} from "react";
import Svg from "../../../img/Svg";
import {Group} from "@mantine/core";

type PropsType = {
    isFavorite: boolean
    toggleFavorite: () => void
}

export const FavoriteButton = memo(({isFavorite, toggleFavorite}: PropsType) => {

    return (
        <Group onClick={toggleFavorite}>
            {isFavorite ? <Svg iconName="fillStar"/> : <Svg iconName="outlineStar"/>}
        </Group>
    );
});