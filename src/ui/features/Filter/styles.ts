import {createStyles, rem} from "@mantine/core";

export const useStyles = createStyles(() => ({
    wrapper: {
        borderRadius: "12px",
        background: "#FFFFFF",
        border: "1px solid #EAEBED",
        padding: "20px",
        height: "100%",
        marginLeft: "28px",
    },
    select: {
        "&.mantine-InputWrapper-root.mantine-Select-root": {
            "& > div": {
                "& .mantine-Input-wrapper.mantine-Select-wrapper": {
                    "& > input": {
                        height: rem(42),
                        width: rem(275),
                        border: "1px solid #D5D6DC",
                        borderRadius: "8px",
                    },
                    "& .mantine-Input-rightSection": {
                        "& > svg": {
                            color: "#ACADB9",
                        }
                    }
                },
            },
        }
    },
    input: {
        "&.mantine-InputWrapper-root": {
            "& input": {
                height: rem(42),
                width: rem(275),
                border: "1px solid #D5D6DC",
                borderRadius: "8px",
                marginTop: "8px",
            },
            "& .mantine-unhde.mantine-Input-rightSection.mantine-NumberInput-rightSection": {
                marginRight: "5px",

                "& button": {
                    border: "none",
                    color: "#ACADB9",
                    "&:hover": {
                        backgroundColor: "white",
                        cursor: "pointer",
                        color: "#ACADB9",
                    }
                },

                "& button.mantine-NumberInput-control.mantine-NumberInput-controlUp": {
                    alignItems: "flex-end",
                },
                "& button.mantine-NumberInput-control .mantine-NumberInput-controlDown": {
                    alignItems: "flex-start",
                }
            }
        },
    },
    buttonReset: {
        color: "#ACADB9",
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent",
            color: "#5E96FC",
        }
    },
}));