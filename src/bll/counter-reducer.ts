type initialStateType = typeof initialState;
export type ActionsTypes = ReturnType<typeof incrementCounterAC> | ReturnType<typeof resetCounterAC>

const initialState = {
    counterValue: 0
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

        default:
            return state
    }
}

export const incrementCounterAC = () => ({type: 'INCREMENT-COUNTER-VALUE'} as const)
export const resetCounterAC = () => ({type: 'RESET-COUNTER-VALUE'} as const)