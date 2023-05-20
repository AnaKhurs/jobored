import React, {memo} from "react";
import {Button} from '@mantine/core';
import Svg from "../../../img/Svg";

type PropsType = {
    isFavorite: boolean
    toggleFavorite: () => void
    id: number
}

export const FavoriteButton = memo(({isFavorite, toggleFavorite, id}: PropsType) => {

    console.log("FavoriteButton")

    return (
        <Button data-elem={`vacancy-${id}-shortlist-button`}
                variant='transparent'
                onClick={toggleFavorite}
        >
            {isFavorite ? <Svg iconName="fillStar"/> : <Svg iconName="outlineStar"/>}
        </Button>
    );
});