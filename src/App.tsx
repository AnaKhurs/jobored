import React from "react";
import {Route, Routes} from "react-router-dom";
import {Header} from "./ui/features/Header/Header";
import {SearchPage} from "./ui/pages/SearchPage/SearchPage";
import {LoginPage} from "./ui/pages/LoginPage/LoginPage";
import {PATH} from "./utils/paths";
import {useAppSelector} from "./bll/store";
import "./App.css";

function App() {

    const isLoggedIn = useAppSelector<boolean>(state => state.login.isLoggedIn)

    return (
        <div className="App">
            {isLoggedIn && <Header/>}
            <Routes>
                <Route path={PATH.LOGIN} element={<LoginPage/>}/>
                <Route path={PATH.MAIN} element={<SearchPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
