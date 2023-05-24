import {createStyles} from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    wrapper: {
        borderRadius: "12px",
        background: "#FFFFFF",
        border: "1px solid #EAEBED",
        padding: "20px",
        height: "100%",
        margin: "16px 0",
        maxWidth: "773px",
        width: "100%",
        [theme.fn.smallerThan(600)]: {
            borderRadius: 0,
        },
    },
}));