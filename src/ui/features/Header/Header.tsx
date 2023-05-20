import React, {memo} from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../utils/paths";
import {Flex, Group} from "@mantine/core";
import Svg from "../../../img/Svg";

export const Header = memo(() => {

    console.log("Header")

    const styleNavigation = (isActive: boolean) => ({
        color: isActive ? "#5E96FC" : "#232134",
        textDecoration: "none",
        fontWeight: isActive ? 500 : 400,
        marginRight: 60,
    })

    const data = [
        {label: "Поиск Вакансий", path: PATH.MAIN},
        {label: "Избранное", path: PATH.FAVORITES},
    ];

    const items = data.map((item) => (
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
            <NavLink to={PATH.MAIN}>
                <Svg iconName="logo"/>
            </NavLink>
            <Group mr={300}>{items}</Group>
        </Flex>
    );
});