import React from "react";
import {Modal} from "@mantine/core";
import classes from "./ModalWrapper.module.scss"

export const ModalWrapper = ({mathes, children, opened, onClose}) => {

    return mathes ? (
        <Modal classNames={{
            body: classes.body,
            content: classes.content,
        }}
               onClose={onClose}
               opened={opened}
               keepMounted
               withCloseButton={false}
               size="auto"
               yOffset="20vh"
               xOffset={0}
               radius={8}
        >
            {children}
        </Modal>
    ) : (
        <>{children}</>
    );
};
