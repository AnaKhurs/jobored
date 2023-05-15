import React, {memo} from "react";
import {ActionIcon} from '@mantine/core';
import Svg from "../../../img/Svg";

type PropsType = {
    isFavorite: boolean
    toggleFavorite: () => void
}

export const FavoriteButton = memo(({isFavorite, toggleFavorite}: PropsType) => {

    return (
        <ActionIcon
            variant='transparent'
            onClick={toggleFavorite}
        >
            {isFavorite  ? <Svg iconName="fillStar"/> : <Svg iconName="outlineStar"/>}
        </ActionIcon>
    );
});