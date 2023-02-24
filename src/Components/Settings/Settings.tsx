import React, { FC } from 'react';
import s from './Settings.module.scss'
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {useAppDispatch} from "../../utils/hooks";
import {maxValueChangeAC} from "../../bll/counter-reducer";

export const Settings: FC = () => {

    const dispatch = useAppDispatch()

    const onClickSetHandler = () => {
        console.log('set')
    }

    const onChangeInputValue = (value: number) => {
        dispatch(maxValueChangeAC(value))
    }

    return (
        <div className={'counterItem'}>
            <div className={'valueArea'}>
                <div className={'content'}>
                    <div className={s.settingsArea}>
                        <div className={s.inputSettingsItem}>
                            <span>max value:</span>
                            <Input value={0} onChange={onChangeInputValue}/>
                        </div>
                        <div className={s.inputSettingsItem}>
                            <span>start value:</span>
                            <Input value={0} onChange={onChangeInputValue}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'buttonsArea'}>
                <Button name={'set'} callback={onClickSetHandler}/>
            </div>
        </div>
    );
};