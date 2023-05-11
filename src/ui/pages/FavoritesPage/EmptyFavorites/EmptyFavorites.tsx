import React, {memo} from "react";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../../../utils/paths";
import {Button, Flex, Text} from "@mantine/core";
import Svg from "../../../../img/Svg";


export const EmptyFavorites = memo(() => {

    const navigate = useNavigate();

    const onClickToSearchPage = () => {
        navigate(PATH.MAIN)
    };

    return (
        <Flex direction="column" align="center" justify="center" h="75vh">
            <Svg iconName="void"/>
            <Text m="32px 0" fw={700} fz="xl" color="#343A40">Упс, здесь еще ничего нет!</Text>
            <Button variant="light" onClick={onClickToSearchPage}>Поиск Вакансий</Button>
        </Flex>
    );
});