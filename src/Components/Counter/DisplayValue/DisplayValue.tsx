import React, {FC} from "react";
import {useAppSelector} from "../../../utils/hooks";
import s from './DisplayValue.module.scss'

type PropsType = {
    counterValue: number
}

export const DisplayValue: FC<PropsType> = (props) => {

    const isIncorrectValueShow = useAppSelector(state => state.counter.isIncorrectValueShow)

    if (isIncorrectValueShow) {
        return <span className={s.incorrectValue}>Incorrect value!</span>
    }
    return <span className={s.value}>{props.counterValue}</span>
}