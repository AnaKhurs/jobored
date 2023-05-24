import {createStyles} from "@mantine/core";

export const useStyles = createStyles((theme) => ({

    resultsWrapper: {
        alignItems: "center",
        width: "773px",
        margin: "0 auto",
        [theme.fn.smallerThan(780)]: {
            width: "100%",
        },
        [theme.fn.smallerThan(600)]: {
            margin: 0,
        },
    },
}));