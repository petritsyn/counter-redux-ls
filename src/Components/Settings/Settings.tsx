import React, { FC } from 'react';
import s from './Settings.module.scss'
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {maxValueChangeAC, startValueChangeAC} from "../../bll/counter-reducer";

export const Settings: FC = () => {

    const dispatch = useAppDispatch()
    const maxValue = useAppSelector(state => state.counter.maxValue)
    const startValue = useAppSelector(state => state.counter.startValue)
    const disabledSetButton = useAppSelector(state => state.counter.isSetButtonDisable)

    const onClickSetHandler = () => {
        console.log(disabledSetButton)
    }

    const onChangeInputMaxValue = (value: number) => {
        dispatch(maxValueChangeAC(value))
    }

    const onChangeInputStartValue = (value: number) => {
        dispatch(startValueChangeAC(value))
    }

    return (
        <div className={'counterItem'}>
            <div className={'valueArea'}>
                <div className={'content'}>
                    <div className={s.settingsArea}>
                        <div className={s.inputSettingsItem}>
                            <span>max value:</span>
                            <Input value={maxValue} onChange={onChangeInputMaxValue}/>
                        </div>
                        <div className={s.inputSettingsItem}>
                            <span>start value:</span>
                            <Input value={startValue} onChange={onChangeInputStartValue}/>
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