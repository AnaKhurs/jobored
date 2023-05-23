import {createStyles} from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    salary: {
        fontWeight: 600,
        color: "#232134",
        [theme.fn.smallerThan(600)]: {
            fontSize: "1.1rem",
        },
    },
    typeOfWork: {
        color: "#232134",
        [theme.fn.smallerThan(600)]: {
            fontSize: "1.1rem",
        },
    },
    location: {
        gap: "0.5rem"
    },
    townTitle: {
        color: "#232134",
        [theme.fn.smallerThan(600)]: {
            fontSize: "1.1rem",
        },
    },
}));