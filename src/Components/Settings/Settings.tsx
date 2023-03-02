import React, {FC, useEffect} from 'react';
import s from './Settings.module.scss'
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {
    maxValueChangeAC, setButtonPressAC,
    showIncorrectValueMessageAC, showSetValueMessageAC,
    startValueChangeAC, toggleIncButtonDisableAC,
    toggleSetButtonDisableAC
} from "../../bll/counter-reducer";

export const Settings: FC = () => {

    const dispatch = useAppDispatch()
    const maxValue = useAppSelector(state => state.counter.maxValue)
    const startValue = useAppSelector(state => state.counter.startValue)
    const disabledSetButton = useAppSelector(state => state.counter.isSetButtonDisable)

    const onClickSetHandler = () => {
        dispatch(setButtonPressAC())
    }

    const onChangeInputMaxValue = (value: number) => {
        dispatch(maxValueChangeAC(value))
        dispatch(showSetValueMessageAC(true))
        dispatch(toggleIncButtonDisableAC(true))
    }

    const onChangeInputStartValue = (value: number) => {
        dispatch(startValueChangeAC(value))
        dispatch(showSetValueMessageAC(true))
        dispatch(toggleIncButtonDisableAC(true))
    }

    useEffect(() => {
        if (maxValue < startValue || maxValue === startValue || maxValue < 0 || startValue < 0) {
            dispatch(toggleSetButtonDisableAC(true))
            dispatch(showIncorrectValueMessageAC(true))
        } else {
            dispatch(toggleSetButtonDisableAC(false))
            dispatch(showIncorrectValueMessageAC(false))
        }
    }, [maxValue, startValue])

    return (
        <div className={'counterItem'}>
            <div className={'valueArea'}>
                <div className={'content'}>
                    <div className={s.settingsArea}>
                        <div className={s.inputSettingsItem}>
                            <span>max value:</span>
                            <Input value={maxValue} onChange={onChangeInputMaxValue}
                                   error={maxValue < 0 || startValue === maxValue || maxValue < startValue}/>
                        </div>
                        <div className={s.inputSettingsItem}>
                            <span>start value:</span>
                            <Input value={startValue} onChange={onChangeInputStartValue}
                                   error={startValue < 0 || startValue === maxValue || maxValue < startValue}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'buttonsArea'}>
                <Button name={'set'} callback={onClickSetHandler} disabled={disabledSetButton}/>
            </div>
        </div>
    );
};