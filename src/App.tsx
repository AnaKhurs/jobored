import React, {memo} from "react";
import {Route, Routes} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "./bll/store";
import {initializeApp} from "./bll/app-reducer";
import {Header} from "./ui/features/Header/Header";
import {SearchPage} from "./ui/pages/SearchPage/SearchPage";
import {FavoritesPage} from "./ui/pages/FavoritesPage/FavoritesPage";
import {VacancyPage} from "./ui/pages/VacancyPage/VacancyPage";
import {PATH} from "./utils/paths";
import {client_id, client_secret, hr, login, password} from "./loginData"; //todo
import {Box, Flex, Loader} from "@mantine/core";

export const App = memo(() => {

    const isInitialized = useAppSelector<boolean>(state => state.app.isInitialized);

    const dispatch = useAppDispatch();

    if (!isInitialized) {
        dispatch(initializeApp({
            login: login,
            password: password,
            client_id: client_id,
            client_secret: client_secret,
            hr: hr,
        }));
        return <Flex direction="row" align="center" h="100vh">
            <Loader size="xl" m="0 auto"/>
        </Flex>
    }

    return (
        <Box bg="#F5F5F5" mih="100vh">
            {isInitialized && <Header/>}
            <Routes>
                <Route path={PATH.MAIN} element={<SearchPage/>}/>
                <Route path={PATH.FAVORITES} element={<FavoritesPage/>}/>
                <Route path={PATH.VACANCY + '/:idVacancy'} element={<VacancyPage/>}/>
            </Routes>
        </Box>
    );
})

export default App;
