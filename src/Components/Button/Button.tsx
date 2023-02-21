import React, {FC} from 'react';
import s from './Button.module.scss';

type ButtonPropsType = {
    name: string
    callback: () => void
}

export const Button: FC<ButtonPropsType> = (props) => {
    return (
        <button className={s.button} onClick={props.callback}>{props.name}</button>
    );
};