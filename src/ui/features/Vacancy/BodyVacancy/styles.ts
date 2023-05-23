import {createStyles} from "@mantine/core";

export const useStyles = createStyles(() => ({
    salary: {
        fontWeight: 600,
        color: "#232134",
        [`@media (max-width: 600px)`]: {
            fontSize: "1.2rem",
        },
    },
    typeOfWork: {
        color: "#232134",
        [`@media (max-width: 600px)`]: {
            fontSize: "1.2rem",
        },
    },
    location: {
        gap: "0.5rem"
    },
    townTitle: {
        color: "#232134",
        [`@media (max-width: 600px)`]: {
            fontSize: "1.2rem",
        },
    },
}));