import React, {memo} from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../../bll/store";
import {getVacancy, setIdVacancy} from "../../../../bll/vacancy-reducer";
import {FavoriteButton} from "../../FavoriteButton/FavoriteButton";
import {Anchor, Flex, Text} from "@mantine/core";
import {PATH} from "../../../../utils/paths";

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

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const navigateToVacancyPage = (id: number) => {
        dispatch(setIdVacancy(id));
        dispatch(getVacancy({id}));
        navigate(PATH.VACANCY + `/${id}`);
    };

    return (
        <Flex justify="space-between" align="center">
            {isTitleLink
                ? <Anchor fz="lg"
                          fw={600}
                          color="#5E96FC"
                          onClick={() => navigateToVacancyPage(id)}>{profession}</Anchor>
                : <Text fz="xl"
                        fw={700}
                        color="#232134">{profession}</Text>
            }
            <FavoriteButton toggleFavorite={toggleFavorite} isFavorite={favorite}/>
        </Flex>
    );
});