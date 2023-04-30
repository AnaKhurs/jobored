import React, {ChangeEvent, memo, useMemo, useState} from "react";
import {useAppSelector} from "../../../bll/store";
//import { IconChevronDown } from '@tabler/icons-react';

import s from "./Filter.module.scss"
import {Button, createStyles, NumberInput, rem, Text, Box, Select, Paper, Flex} from "@mantine/core";
import {resolveSrv} from "dns";

type PropsType = {
    onSetFilter: (keyCatalog?: number | null, payment_from?: number | '' | null, payment_to?: number | '' | null) => void
}


const useStyles = createStyles((theme) => ({
    select: {
        "&.mantine-InputWrapper-root.mantine-Select-root": {

            '& > div': {
                '& .mantine-Input-wrapper.mantine-Select-wrapper': {

                    '& > input': {
                        height: rem(42),
                        width: rem(275),
                        margin: "5px 0",
                        border: "1px solid #D5D6DC",
                        borderRadius: "8px",
                    }
                },
            },



        }
    },
    input: {
        "&.mantine-InputWrapper-root": {
            "& input": {
                height: rem(42),
                width: rem(275),
                margin: "5px 0",
                border: "1px solid #D5D6DC",
                borderRadius: "8px",
            },
            "& .mantine-unhde.mantine-Input-rightSection.mantine-NumberInput-rightSection": {
                marginRight: "8px",
                "& button": {
                    border: "none",
                    color: "#ACADB9",
                    "&:hover": {
                        backgroundColor: "white",
                        cursor: "pointer",
                        color: "#ACADB9",
                    }
                }
            }
        },
    },
    button: {
        height: rem(42),
        width: rem(275),
        margin: "20px 0",
    },
}));

export const Filter = memo(({onSetFilter}: PropsType) => {

    const {classes} = useStyles();

    const catalogues = useAppSelector(state => state.catalogues.catalogues)

    const [keyCatalog, setKeyCatalog] = useState<string | null>(null)
    const [payment_from, setPayment_from] = useState<number | ''>()
    const [payment_to, setPayment_to] = useState<number | ''>()

    const cataloguesForSelect = useMemo(() => {
        if (catalogues) {
            return catalogues.map((el) => {
                return {value: (el.key).toString(), label: el.title}
            });
        }
        return []
    }, [catalogues])


    const onChangeSelectHandler = (value: string | null) => {
        setKeyCatalog(value);
    }

    const onChangePaymentFromHandler = (value: number) => {
        setPayment_from(value)
    }

    const onChangePaymentToHandler = (value: number) => {

        console.log('value', value)
        // if (typeof +value === "number" && +value >= 0) {
        setPayment_to(+value)
        // }
    }

    const onClickHandler = () => {
        onSetFilter(keyCatalog ? +keyCatalog : null, payment_from, payment_to)
    }

    const onClickResetFilter = () => {
        setKeyCatalog('');
        setPayment_from('');
        setPayment_to('')
        onSetFilter(0, null, null)
    }

    return (
        <Paper className={s.filterContainer}>

            <Box className={s.filterTop}>
                <Text fz="lg" fw={700} color={"#232134"}>Фильтры</Text>
                <button className={s.reset} onClick={onClickResetFilter}>Сбросить все x</button>
            </Box>

            <Flex direction="column">
                <Text fz="md" fw={700} color={"#232134"}>Отрасль</Text>


                <Select className={classes.select}
                        data={cataloguesForSelect}
                        value={keyCatalog}
                        onChange={onChangeSelectHandler}
                        placeholder="Выберете отрасль"
                        /*rightSection={<IconChevronDown size="1rem" />}*/
                />
            </Flex>

            <Flex direction="column">
                <Text fz="md" fw={700} color={"#232134"}>Оклад</Text>
                <NumberInput className={classes.input}
                             type="number"
                             placeholder="От"
                             value={payment_from}
                             onChange={onChangePaymentFromHandler}
                />
                <NumberInput className={classes.input}
                             type="number"
                             placeholder="До"
                             value={payment_to}
                             onChange={onChangePaymentToHandler}
                />
            </Flex>
            <Button className={classes.button} onClick={onClickHandler}>Применить</Button>
        </Paper>
    );
});