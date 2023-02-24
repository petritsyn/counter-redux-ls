type initialStateType = typeof initialState;
export type ActionsTypes = ReturnType<typeof incrementCounterAC>
    | ReturnType<typeof resetCounterAC>
    | ReturnType<typeof maxValueChangeAC>

const initialState = {
    counterValue: 0,
    showIncorrectValue: false,
    maxValue: 0,
    startValue: 0
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

        default:
            return state
    }
}

export const incrementCounterAC = () => ({type: 'INCREMENT-COUNTER-VALUE'} as const)
export const resetCounterAC = () => ({type: 'RESET-COUNTER-VALUE'} as const)
export const maxValueChangeAC = (maxValue: number) => ({type: 'MAX-VALUE-CHANGE', maxValue} as const)