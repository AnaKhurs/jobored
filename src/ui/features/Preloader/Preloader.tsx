import React, {memo} from "react";
import {Flex, Loader} from "@mantine/core";

export const Preloader = memo(() => {
    return (
        <Flex direction="row" align="center" h="80vh">
            <Loader size="xl" m="0 auto"/>
        </Flex>
    );
});