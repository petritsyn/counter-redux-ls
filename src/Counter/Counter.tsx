import React from 'react';
import {useAppDispatch, useAppSelector} from "../utils/hooks";
import {incrementCounterAC} from "../bll/counter-reducer";

export const Counter = () => {
    const value = useAppSelector(state => state.counter.counterValue)
    const dispatch = useAppDispatch()

    const onClickHandler = () => {
        dispatch(incrementCounterAC())
    }

    return (
        <div>
            {value}
            <div><button onClick={onClickHandler}>Inc</button></div>
        </div>
    );
};