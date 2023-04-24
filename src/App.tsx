import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Header} from "./ui/features/Header/Header";
import {SearchPage} from "./ui/pages/SearchPage";

import {PATH} from "./utils/paths";

import "./App.css";

function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={PATH.MAIN} element={<SearchPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
