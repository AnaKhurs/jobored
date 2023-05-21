import React, {memo} from "react";
import {Link} from "react-router-dom";
import {PATH} from "../../../../utils/paths";
import {FavoriteButton} from "../../FavoriteButton/FavoriteButton";
import {Flex, Text} from "@mantine/core";
import {useStyles} from "./styles";

type PropsType = {
    profession: string
    id: number
    isTitleLink?: boolean
    favorite: boolean
    toggleFavorite: () => void
}

export const TitleVacancy = memo(({
                                      profession,
                                      id,
                                      isTitleLink,
                                      toggleFavorite,
                                      favorite,
                                  }: PropsType) => {

    const {classes} = useStyles();

    return (
        <Flex justify="space-between" align="center">
            {isTitleLink
                ? <Link to={PATH.VACANCY + `/${id}`} className={classes.link}>{profession}</Link>
                : <Text fz="xl"
                        fw={700}
                        color="#232134">{profession}</Text>
            }
            <FavoriteButton toggleFavorite={toggleFavorite} isFavorite={favorite} id={id}/>
        </Flex>
    );
});