import {createStyles} from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 12px 0 6px",
        border: "1px solid #EAEBED",
        borderRadius: "8px",
        background: "#FFFFFF",
        flexWrap: "nowrap",
        width: "773px",
        [theme.fn.smallerThan(1200)]: {
            width: "100%",
        },
        [theme.fn.smallerThan(600)]: {
            margin: "0 10px",
        },
    },
}));