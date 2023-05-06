import React, {memo} from "react";

import {NotAuthRedirect} from "../../../hoc/NotAuthRedirect";

const Component = memo(() => {

    return (
        <div>
            ку
        </div>
    );
});

export const FavoritesPage = NotAuthRedirect(Component);