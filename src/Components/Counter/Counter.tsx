import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {incrementCounterAC, resetCounterAC} from "../../bll/counter-reducer";
import s from './Counter.module.scss';
import {Button} from "../Button/Button";

export const Counter: FC = () => {
    const value = useAppSelector(state => state.counter.counterValue)
    const dispatch = useAppDispatch()

    const onClickIncHandler = () => {
        dispatch(incrementCounterAC())
    }
    const onClickResetHandler = () => {
        dispatch(resetCounterAC())
    }

    return (
        <div className={s.counter}>
            <div className={s.valueArea}>
                <div className={s.content}>
                    <span className={s.value}>{value}</span>
                </div>
            </div>
            <div className={s.buttonsArea}>
                <Button name={'inc'} callback={onClickIncHandler}/>
                <Button name={'reset'} callback={onClickResetHandler}/>
            </div>
        </div>
    );
};