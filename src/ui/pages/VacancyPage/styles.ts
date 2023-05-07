import {createStyles} from "@mantine/core";

export const useStyles = createStyles(() => ({
    wrapper: {
        borderRadius: "12px",
        background: "#FFFFFF",
        border: "1px solid #EAEBED",
        padding: "20px",
        height: "100%",
        margin: "4px 0 40px",
        width: "773px",
        color: "#232134",

        b: {
            fontWeight: 700,
            fontSize: "20px",
        },
        ul: {
            paddingLeft: "24px",
        },
        li: {
            fontWeight: 400,
            fontSize: "16px",
        }
    },
    location: {
        gap: "0.5rem"
    },
}));