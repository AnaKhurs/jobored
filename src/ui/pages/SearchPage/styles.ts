import {createStyles} from "@mantine/core";

export const useStyles = createStyles(() => ({

    container: {
        borderRadius: 12,
        background: "#FFFFFF",
        border: "1px solid #EAEBED",
        padding: 20,
        margin: "16px 0",
        width: 773,
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
    },
}));