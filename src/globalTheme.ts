import {ButtonProps, MantineThemeOverride, SelectProps} from "@mantine/core";
import {MantineSize} from "@mantine/styles";
import {CSSProperties} from "react";

/*const big: MantineSize = {'big': {
    height: 200
}}*/

const ButtonDefaultProps: Partial<ButtonProps> = {
    /*    size: big,*/
    color: 'main',
    radius: "8px",
};
const SelectDefaultProps: Partial<SelectProps> = {
    color: 'main',
    radius: "8px",
};

export const globalTheme: MantineThemeOverride = {
    // fontFamily: CSSProperties['fontFamily'],
    // lineHeight: CSSProperties['lineHeight'],
    colors: {
        main: [
            "#EDF2FF",
            "#DBE4FF",
            "#BAC8FF",
            "#91A7FF",
            "#748FFC",
            "#5C7CFA",
            "#5E96FC",
            "#4263EB",
            "#3B5BDB"
        ]
    },
    fontSizes: {
        sm: '0.875rem',
        md: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
    },
    primaryColor: 'main',
    components: {
        Button: {
            defaultProps: ButtonDefaultProps
        },
        Select: {
            defaultProps: SelectDefaultProps
        },
    }
}