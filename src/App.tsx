import React from 'react';
import './App.scss';
import {Counter} from "./Components/Counter/Counter";
import {Settings} from "./Components/Settings/Settings";

export const App = () => {
    return (
        <div className="App">
            <Settings/>
            <Counter/>
        </div>
    );
}