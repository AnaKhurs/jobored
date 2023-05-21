import {createStyles} from "@mantine/core";

export const useStyles = createStyles(() => ({
    link: {
        fontSize: 20,
        fontWeight: 600,
        color: "#5E96FC",
        textDecoration: "none",

        "&:hover": {
            color: "#4263EB",
        }
    },
}));