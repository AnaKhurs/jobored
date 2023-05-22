import React from "react";
import Svg from "../../../img/Svg";
import {Button, Flex} from "@mantine/core";
import classes from "./Pagination.module.scss"

type PropsType = {
    prevPage: () => void
    nextPage: () => void
    setPage: (page: number) => void
    page: number
    totalPages: number
}

export const Pagination = ({
                               prevPage,
                               nextPage,
                               setPage,
                               page,
                               totalPages,
                           }: PropsType) => {

    return (
        <Flex className={classes.pagination}>
            <Button onClick={prevPage} className={classes.previousClassName} disabled={page === 1}>
                <Svg iconName="arrow"/>
            </Button>
            {/* @ts-ignore*/}
            {[...Array(totalPages).keys()].map((el) => (
                <Button
                    onClick={() => setPage(el + 1)}
                    key={el}
                    className={(page === el + 1) ? classes.activeClassName : classes.pageClassName}
                >
                    {el + 1}
                </Button>
            ))}
            <Button onClick={nextPage} className={classes.nextClassName} disabled={page === totalPages}>
                <Svg iconName="arrow"/>
            </Button>
        </Flex>
    );
};