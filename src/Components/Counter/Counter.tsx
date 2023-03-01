import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {incrementCounterAC, resetCounterAC, toggleIncButtonDisableAC} from "../../bll/counter-reducer";
import s from './Counter.module.scss';
import {Button} from "../Button/Button";
import {DisplayValue} from "./DisplayValue/DisplayValue";

export const Counter: FC = () => {
    const valueStore = useAppSelector(state => state.counter.counterValue)
    const dispatch = useAppDispatch()
    const disabledIncButton = useAppSelector(state => state.counter.isIncButtonDisable)
    const disabledResetButton = useAppSelector(state => state.counter.isResetButtonDisable)
    const maxValue = useAppSelector(state => state.counter.maxValue)
    const startValue = useAppSelector(state => state.counter.startValue)

    const [counterValue, setCounterValue] = useState(startValue)

    const onClickIncHandler = () => {
        dispatch(incrementCounterAC())
    }
    const onClickResetHandler = () => {
        dispatch(resetCounterAC())
    }

    useEffect(() => {
        setCounterValue(valueStore)
    }, [valueStore])

    useEffect(() => {
        if (counterValue === maxValue || counterValue > maxValue) {
            dispatch(toggleIncButtonDisableAC(true))
        } else {
            dispatch(toggleIncButtonDisableAC(false))
        }
    }, [maxValue, counterValue])

    return (
        <div className={'counterItem'}>
            <div className={'valueArea'}>
                <div className={'content'}>
                    {/*<span className={s.value}>{value}</span>*/}
                    <DisplayValue counterValue={+counterValue}/>
                </div>
            </div>
            <div className={'buttonsArea'}>
                <Button name={'inc'} callback={onClickIncHandler} disabled={disabledIncButton}/>
                <Button name={'reset'} callback={onClickResetHandler} disabled={disabledResetButton}/>
            </div>
        </div>
    );
};