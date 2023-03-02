import React, {FC} from "react";
import {useAppSelector} from "../../../utils/hooks";
import s from './DisplayValue.module.scss'

type PropsType = {
    counterValue: number
}

export const DisplayValue: FC<PropsType> = (props) => {

    const isIncorrectValueShow = useAppSelector(state => state.counter.isIncorrectValueShow)
    const isSetValueMessageShow = useAppSelector(state => state.counter.isMessageShow)
    const valueStore = useAppSelector(state => state.counter.counterValue)
    const maxValue = useAppSelector(state => state.counter.maxValue)

    if (isIncorrectValueShow) {
        return <span className={s.incorrectValue}>Incorrect value!</span>
    } else if (isSetValueMessageShow) {
        return <span className={s.setValueMessage}>Enter values and press 'set'</span>
    }
    return <span className={valueStore === maxValue ? s.maxValue : s.value}>{props.counterValue}</span>
}