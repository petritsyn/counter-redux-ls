type initialStateType = typeof initialState;
export type ActionsTypes = ReturnType<typeof incrementCounterAC>
    | ReturnType<typeof resetCounterAC>
    | ReturnType<typeof maxValueChangeAC>
    | ReturnType<typeof startValueChangeAC>
    | ReturnType<typeof toggleIncButtonDisableAC>
    | ReturnType<typeof toggleSetButtonDisableAC>
    | ReturnType<typeof showIncorrectValueMessageAC>
    | ReturnType<typeof showSetValueMessageAC>
    | ReturnType<typeof setButtonPressAC>

const initialState = {
    counterValue: 0,
    isIncorrectValueShow: false,
    isMessageShow: false,
    maxValue: 0,
    startValue: 0,
    isSetButtonDisable: true,
    isIncButtonDisable: false,
    isResetButtonDisable: true
}

export const counterReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "INCREMENT-COUNTER-VALUE":
            return {
                ...state,
                counterValue: state.counterValue + 1,
                isResetButtonDisable: false
            }
        case "RESET-COUNTER-VALUE":
            return {
                ...state,
                counterValue: state.startValue,
                isResetButtonDisable: true
            }

        case "MAX-VALUE-CHANGE":
            return {
                ...state,
                maxValue: action.maxValue
            }

        case "START-VALUE-CHANGE":
            return {
                ...state,
                startValue: action.startValue
            }

        case "TOGGLE-INC-BUTTON-DISABLE":
            return {
                ...state,
                isIncButtonDisable: action.isDisable
            }

        case "TOGGLE-SET-BUTTON-DISABLE":
            return {
                ...state,
                isSetButtonDisable: action.isDisable
            }

        case "SHOW-INCORRECT-VALUE-MESSAGE":
            return {
                ...state,
                isIncorrectValueShow: action.isShow
            }

        case "SHOW-SET-VALUE-MESSAGE":
            return {
                ...state,
                isMessageShow: action.isShow
            }

        case "SET-BUTTON-PRESS":
            return {
                ...state,
                isSetButtonDisable: true,
                isIncButtonDisable: false,
                isResetButtonDisable: false,
                isMessageShow: false,
                counterValue: state.startValue
            }

        default:
            return state
    }
}

export const incrementCounterAC = () => ({type: 'INCREMENT-COUNTER-VALUE'} as const)
export const resetCounterAC = () => ({type: 'RESET-COUNTER-VALUE'} as const)
export const maxValueChangeAC = (maxValue: number) => ({type: 'MAX-VALUE-CHANGE', maxValue} as const)
export const startValueChangeAC = (startValue: number) => ({type: 'START-VALUE-CHANGE', startValue} as const)
export const toggleIncButtonDisableAC = (isDisable: boolean) => ({
    type: 'TOGGLE-INC-BUTTON-DISABLE',
    isDisable
} as const)
export const toggleSetButtonDisableAC = (isDisable: boolean) => ({
    type: 'TOGGLE-SET-BUTTON-DISABLE',
    isDisable
} as const)
export const showIncorrectValueMessageAC = (isShow: boolean) => ({
    type: 'SHOW-INCORRECT-VALUE-MESSAGE',
    isShow
} as const)
export const showSetValueMessageAC = (isShow: boolean) => ({
    type: 'SHOW-SET-VALUE-MESSAGE',
    isShow
} as const)
export const setButtonPressAC = () => ({type: 'SET-BUTTON-PRESS'} as const)