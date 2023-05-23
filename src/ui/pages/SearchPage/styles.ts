import {createStyles} from "@mantine/core";

export const useStyles = createStyles((theme) => ({

    buttonWrapper: {
        width: "100%",
        height: "7vh",
        display: "none",
        position: "fixed",
        zIndex: 10,
        bottom: 0,
        left: "50%",
        margin: 18,
        transform: "translate(-50%, 0)",
        [theme.fn.smallerThan(780)]: {
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
        },
    },

    button: {
        fontSize: 14,
        height: 32,
        borderRadius: 8,
    },

    resultsWrapper: {
        margin: "0 28px",
        [theme.fn.smallerThan(780)]: {
            margin: "0 18px",
        },
        [theme.fn.smallerThan(600)]: {
            margin: 0,
        },
    },

    container: {
        borderRadius: 12,
        background: "#FFFFFF",
        border: "1px solid #EAEBED",
        padding: 20,
        margin: "16px 0",
        maxWidth: 773,
        [theme.fn.smallerThan(600)]: {
            margin: "16px 10px",
        },
    },

    pagination: {
        display: "flex",
        cursor: "pointer",
        justifyContent: "center",
        alignItems: "center",
    },

    pageClassName: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 32,
        height: 32,
        background: "#FFFFFF",
        border: "1px solid #D5D6DC",
        borderRadius: 4,
        margin: 8,
        padding: "0 5px",
        [theme.fn.smallerThan(400)]: {
            margin: 5,
        },
    },

    activeClassName: {
        background: "#5E96FC",
        border: "1px solid #5E96FC",
        color: "white",
    },

    previousClassName: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 32,
        height: 32,
        background: "#FFFFFF",
        border: "1px solid #D5D6DC",
        borderRadius: 4,
        margin: 8,
        stroke: "#7B7C88",
        fill: "#7B7C88",
        [theme.fn.smallerThan(400)]: {
            display: "none",
        },
    },

    nextClassName: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 32,
        height: 32,
        background: "#FFFFFF",
        border: "1px solid #D5D6DC",
        borderRadius: 4,
        margin: 8,
        transform: "matrix(-1, 0, 0, 1, 0, 0)",
        stroke: "#7B7C88",
        fill: "#7B7C88",
        [theme.fn.smallerThan(400)]: {
            display: "none",
        },
    },

    disabledClassName: {
        background: "#FFFFFF",
        border: "1px solid #EAEBED",
        color: "#EAEBED",
        stroke: "#EAEBED",
        fill: "#EAEBED",
    },

    breakClassName: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 32,
        height: 32,
        background: "#F5F5F5",
        margin: 8,
        fontWeight: "bold",
        [theme.fn.smallerThan(400)]: {
            margin: 5,
        },
    },
}));