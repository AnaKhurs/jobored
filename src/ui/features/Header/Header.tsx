import React, {memo} from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../utils/paths";
import {Flex, Group, Box} from "@mantine/core";
import Svg from "../../../img/Svg";
import {useStyles} from "./styles";

export const Header = memo(() => {

    console.log("Header")

    const {classes} = useStyles();

    const styleNavigation = (isActive: boolean) => ({
        color: isActive ? "#5E96FC" : "#232134",
        textDecoration: "none",
        fontWeight: isActive ? 500 : 400,
        marginRight: 60,
        height: 84,
        paddingTop: "29px",
    })

    const data = [
        {label: "Поиск Вакансий", path: PATH.MAIN},
        {label: "Избранное", path: PATH.FAVORITES},
    ];

    const items = data.map((item) => (
        <NavLink to={item.path}
                 key={item.label}
                 style={(active) => styleNavigation(active.isActive)}
        >
            {item.label}
        </NavLink>

    ));

    return (
        <Box bg="#FFFFFF" mb={40}>
            <Flex justify={"space-around"} className="wrapper">
                <Group m="0 auto">
                <NavLink to={PATH.MAIN}
                         className={classes.logo}>
                    <Svg iconName="logo"/>
                </NavLink>
                </Group>
                <Group m="0 auto">{items}</Group>
            </Flex>
        </Box>
    );
});