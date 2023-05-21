import React, {ChangeEvent, memo, useCallback, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../bll/store";
import {Button, Group, Input, rem} from "@mantine/core";
import Svg from "../../../img/Svg";
import {useStyles} from "./styles";
import {setPage, setSearchValue} from "../../../bll/vacancies-reducer";

export const Search = memo(() => {

    console.log("Search")

    const {classes} = useStyles();
    const dispatch = useAppDispatch();

    const onSetSearch = useCallback((keyword: string) => {
        dispatch(setSearchValue(keyword));
        dispatch(setPage(0));
    }, [dispatch]);

    const {keyword} = useAppSelector(state => state.vacancies.vacanciesData);
    const [value, setValue] = useState<string>(keyword || "");
    const onChangeCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value), []);

    const onClickHandler = useCallback(() => {
        onSetSearch(value);
    }, [onSetSearch, value]);

    return (
        <Group className={classes.wrapper}>
            <Input data-elem="search-input"
                   w="100%"
                   variant="unstyled"
                   icon={<Svg iconName="search"/>}
                   placeholder="Введите название вакансии"
                   value={value}
                   onChange={onChangeCallback}
            />
            <Button data-elem="search-button"
                    m="8px 0"
                    h={rem(32)}
                    w={rem(83)}
                    onClick={onClickHandler}>Поиск</Button>
        </Group>
    );
});