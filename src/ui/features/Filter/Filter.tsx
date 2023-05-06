import React, {memo, useMemo, useState} from "react";
import {useAppSelector} from "../../../bll/store";
import {Button, Flex, NumberInput, Paper, rem, Select, Text} from "@mantine/core";
import {IconChevronDown} from "@tabler/icons-react";
import {useStyles} from "./styles";

type PropsType = {
    onSetFilter: (keyCatalog?: number, payment_from?: number | "", payment_to?: number | "") => void
}

export const Filter = memo(({onSetFilter}: PropsType) => {

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


    const onChangeSelectHandler = (value: string) => {
        setKeyCatalog(value);
    };

    const onChangePaymentFromHandler = (value: number) => {
        setPayment_from(value);
    };

    const onChangePaymentToHandler = (value: number) => {
        setPayment_to(value);
    };

    const onClickHandler = () => {
        const catalogues = keyCatalog ? +keyCatalog : undefined;
        onSetFilter(catalogues, payment_from, payment_to);
    };

    const onClickResetFilter = () => {
        setKeyCatalog("");
        setPayment_from("");
        setPayment_to("");
        onSetFilter(undefined, undefined, undefined);
    }

    return (
        <Paper className={classes.wrapper}>
            <Flex justify="space-between">
                <Text fz="lg" fw={700} color="#232134">Фильтры</Text>
                <Button className={classes.buttonReset}
                        variant="subtle"
                        onClick={onClickResetFilter}>Сбросить все x</Button>
            </Flex>
            <Flex m="32px 0 20px" direction="column">
                <Text fz="md" fw={700} color="#232134">Отрасль</Text>
                <Select className={classes.select}
                        data={cataloguesForSelect}
                        value={keyCatalog}
                        onChange={onChangeSelectHandler}
                        placeholder="Выберете отрасль"
                        rightSection={<IconChevronDown size="1rem"/>}
                        mt={8}
                />
            </Flex>
            <Flex direction="column">
                <Text fz="md" fw={700} color="#232134">Оклад</Text>
                <NumberInput className={classes.input}
                             type="number"
                             placeholder="От"
                             min={0}
                             value={payment_from}
                             onChange={onChangePaymentFromHandler}
                />
                <NumberInput className={classes.input}
                             type="number"
                             placeholder="До"
                             min={0}
                             value={payment_to}
                             onChange={onChangePaymentToHandler}
                />
            </Flex>
            <Button mt={20}
                    h={rem(42)}
                    w={rem(275)}
                    onClick={onClickHandler}>Применить</Button>
        </Paper>
    );
});