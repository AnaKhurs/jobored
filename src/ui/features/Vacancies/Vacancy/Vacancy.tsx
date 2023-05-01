import React, {memo} from "react";
import {Flex, Group, List, Text} from "@mantine/core";
import Svg from "../../../../img/Svg";
import {useStyles} from "./styles";

type PropsType = {
    profession: string
    firmName?: string
    townTitle: string
    cataloguesTitle?: string
    typeOfWork: string
    paymentTo?: number
    paymentFrom?: number
    currency?: string
}

export const Vacancy = memo(({
                                 profession,
                                 townTitle,
                                 typeOfWork,
                                 paymentTo,
                                 paymentFrom,
                                 currency,
                             }: PropsType) => {

    const {classes} = useStyles();

    const getCurrencyDescription = (paymentFrom?: number, paymentTo?: number, currency?: string) => {
        if (paymentFrom && paymentTo && currency) {
            return `з/п ${paymentFrom} - ${paymentTo} ${currency}`
        }
        if (paymentFrom === 0 && currency) {
            return `з/п от ${paymentFrom} ${currency}`
        }
        if (paymentFrom && currency) {
            return `з/п от ${paymentFrom} ${currency}`
        }
        if (paymentTo && currency) {
            return `з/п до ${paymentTo} ${currency}`
        }
        return ""
    }

    return (
        <List className={classes.wrapper}>
            <Flex justify="space-between" align="center">
                <Text fz="lg"
                      fw={600}
                      color="#5E96FC">{profession}</Text>
                <Svg iconName="star"/>
            </Flex>
            <Group m="13px 0">
                <Text fz="md"
                      fw={600}
                      color="#232134">
                    {getCurrencyDescription(paymentFrom, paymentTo, currency)}
                </Text>
                <Svg iconName="dot"/>
                <Text fz="md"
                      color="#232134">{typeOfWork}</Text>
            </Group>
            <Group className={classes.location}>
                <Svg iconName="location"/>
                <Text>{townTitle}</Text>
            </Group>
        </List>
    );
});