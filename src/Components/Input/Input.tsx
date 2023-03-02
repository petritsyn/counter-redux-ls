import React, {ChangeEvent, FC} from 'react';
import s from './Input.module.scss'

type PropsType = {
    value: number
    onChange: (value: number) => void
    error: boolean
}

export const Input: FC<PropsType> = (props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(+e.currentTarget.value)
    }

    return (
        <input type={'number'} value={props.value} onChange={onChangeHandler} className={props.error ? s.error : s.input}/>
    );
};