import {createStyles} from "@mantine/core";

export const useStyles = createStyles(() => ({
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
    },
}));