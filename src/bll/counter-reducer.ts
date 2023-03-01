type initialStateType = typeof initialState;
export type ActionsTypes = ReturnType<typeof incrementCounterAC>
    | ReturnType<typeof resetCounterAC>
    | ReturnType<typeof maxValueChangeAC>
    | ReturnType<typeof startValueChangeAC>
    | ReturnType<typeof toggleIncButtonDisableAC>
    | ReturnType<typeof toggleSetButtonDisableAC>
    | ReturnType<typeof showIncorrectValueMessageAC>

const initialState = {
    counterValue: 0,
    isIncorrectValueShow: false,
    isMessageShow: false,
    maxValue: 0,
    startValue: 0,
    isSetButtonDisable: false,
    isIncButtonDisable: false,
    isResetButtonDisable: false
}

export const counterReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "INCREMENT-COUNTER-VALUE":
            return {
                ...state,
                counterValue: state.counterValue + 1
            }
        case "RESET-COUNTER-VALUE":
            return {
                ...state,
                counterValue: 0
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