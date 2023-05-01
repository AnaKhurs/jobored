import React, {memo} from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../utils/paths";
import {Flex, Group} from "@mantine/core";
import Svg from "../../../img/Svg";

export const Header = memo(() => {

    const styleNavigation = (isActive: boolean) => ({
        color: isActive ? "#5E96FC" : "#232134",
        textDecoration: "none",
        marginRight: 60,
    })

    const data = [
        {label: "Поиск Вакансий", path: PATH.MAIN},
        {label: "Избранное", path: PATH.FAVORITES},
    ];

    const items = data.map((item, index) => (
        <NavLink
            to={item.path}
            key={item.label}
            style={(active) => styleNavigation(active.isActive)}
        >{item.label}</NavLink>
    ));

    return (
        <Flex justify={"space-around"}
              align={"center"}
              h={84}
              bg={"#FFFFFF"}
              mb={40}>
            <Svg iconName="logo"/>
            <Group>{items}</Group>
        </Flex>
    );
});