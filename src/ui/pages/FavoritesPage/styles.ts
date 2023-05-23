import {createStyles} from "@mantine/core";

export const useStyles = createStyles((theme) => ({

    resultsWrapper: {
        alignItems: "center",
        margin: "0 28px",
        [theme.fn.smallerThan(780)]: {
            margin: "0 18px",
        },
        [theme.fn.smallerThan(600)]: {
            margin: 0,
        },
    },
}));