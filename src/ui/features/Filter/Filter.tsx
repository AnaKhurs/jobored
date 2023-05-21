import React, {memo, useCallback, useEffect, useMemo, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../bll/store";
import {setFilter, setPage} from "../../../bll/vacancies-reducer";
import {getCatalogues} from "../../../bll/catalogues-reducer";
import {Button, Flex, NumberInput, Paper, rem, Select, Text} from "@mantine/core";
import Svg from "../../../img/Svg";
import {useStyles} from "./styles";

export const Filter = memo(() => {

    console.log("Filter")

    const dispatch = useAppDispatch();

    const onSetFilter = useCallback((catalogues?: number, payment_from?: number | '', payment_to?: number | '') => {
        dispatch(setFilter({payment_to, payment_from, catalogues}));
        dispatch(setPage(0));
    }, [dispatch]);

    useEffect(() => {
        dispatch(getCatalogues())
    }, [dispatch]);

    const {classes} = useStyles();

    const catalogues = useAppSelector(state => state.catalogues.catalogues);

    const [keyCatalog, setKeyCatalog] = useState<string>();
    const [payment_from, setPayment_from] = useState<number | "">();
    const [payment_to, setPayment_to] = useState<number | "">();

    const cataloguesForSelect = useMemo(() => {
        if (catalogues) {
            return catalogues.map((el) => {
                return {value: (el.key).toString(), label: el.title};
            });
        }
        return [];
    }, [catalogues]);


    const onChangeSelectHandler = useCallback((value: string) => {
        setKeyCatalog(value);
    }, []);

    const onChangePaymentFromHandler = useCallback((value: number) => {
        setPayment_from(value);
    }, []);

    const onChangePaymentToHandler = useCallback((value: number) => {
        setPayment_to(value);
    }, []);

    const onClickSetFilter = useCallback(() => {
        const catalogues = keyCatalog ? +keyCatalog : undefined;
        onSetFilter(catalogues, payment_from, payment_to);
    }, [keyCatalog, onSetFilter, payment_from, payment_to]);

    const onClickResetFilter = useCallback(() => {
        setKeyCatalog("");
        setPayment_from("");
        setPayment_to("");
        onSetFilter(undefined, undefined, undefined);
    }, [onSetFilter])

    return (
        <Paper className={classes.wrapper}>
            <Flex justify="space-between">
                <Text fz="lg" fw={700} color="#232134">Фильтры</Text>
                <Button className={classes.buttonReset}
                        variant="subtle"
                        onClick={onClickResetFilter}>Сбросить все x</Button>
            </Flex>
            <Flex m="24px 0 20px" direction="column">
                <Text fz="md" fw={700} color="#232134">Отрасль</Text>
                <Select data-elem="industry-select"
                        className={classes.select}
                        data={cataloguesForSelect}
                        value={keyCatalog}
                        onChange={onChangeSelectHandler}
                        placeholder="Выберете отрасль"
                        rightSection={<Svg iconName="iconChevronDown"/>}
                        mt={8}
                />
            </Flex>
            <Flex direction="column">
                <Text fz="md" fw={700} color="#232134">Оклад</Text>
                <NumberInput data-elem="salary-from-input"
                             className={classes.input}
                             type="number"
                             placeholder="От"
                             min={0}
                             step={1000}
                             value={payment_from}
                             onChange={onChangePaymentFromHandler}
                />
                <NumberInput data-elem="salary-to-input"
                             className={classes.input}
                             type="number"
                             placeholder="До"
                             min={0}
                             step={1000}
                             value={payment_to}
                             onChange={onChangePaymentToHandler}
                />
            </Flex>
            <Button data-elem="search-button"
                    mt={20}
                    h={rem(42)}
                    w={rem(275)}
                    onClick={onClickSetFilter}>Применить</Button>
        </Paper>
    );
});