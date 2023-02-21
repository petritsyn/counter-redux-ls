import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../bll/store";

export const Counter = () => {
    const value = useSelector<AppRootStateType, number>(state => state.counter.counterValue)

    return (
        <div>
            {value}
        </div>
    );
};