import {createStyles} from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    wrapper: {
        marginBottom: 40,
        background: "#FFFFFF",
        [theme.fn.smallerThan(600)]: {
            marginBottom: 20,
        },
    },

    logo: {
        height: 84,
        paddingTop: 23,
    },

    navLinks: {
        margin:"0 auto",
        gap: 60,
        [theme.fn.smallerThan(400)]: {
            gap: 20,
        },
    },

    burger: {
        display: "none",
        position: "relative",
        zIndex: 999,
        [theme.fn.smallerThan(530)]: {
            display: "inline",
            marginTop: 13,
            marginRight: 13,
        },
    }
}));