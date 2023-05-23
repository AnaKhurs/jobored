import React from "react";
import {Drawer} from "@mantine/core";

export const DrawerWrapper = ({
                                  matches,
                                  children,
                                  opened,
                                  onClose,
                              }) => {
    return matches ? (
        <Drawer onClose={onClose}
                opened={opened}
                withCloseButton={false}
                zIndex={99}
                size={110}
                position="top"
        >
            {children}
        </Drawer>
    ) : (
        <>{children}</>
    );
}