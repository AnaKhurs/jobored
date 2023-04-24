import React from 'react';

import {Header} from "./ui/features/Header/Header";
import {SearchPage} from "./ui/pages/SearchPage";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Header/>
            <SearchPage/>
        </div>
    );
}

export default App;
