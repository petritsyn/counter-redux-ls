import React, {ChangeEvent, FC} from 'react';

type PropsType = {
    value: number
    onChange: (value: number) => void
}

export const Input: FC<PropsType> = (props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(+e.currentTarget.value)
    }

    return (
        <input type={'number'} value={props.value} onChange={onChangeHandler}/>
    );
};