type initialStateType = typeof initialState;
export type ActionsTypes = ReturnType<typeof incrementCounterAC>

const initialState = {
    counterValue: 0
}

export const counterReducer = (state: initialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "INCREMENT-COUNTER":
            return {
                ...state,
                counter: state.counterValue + 1
            }

        default:
            return state
    }
}

export const incrementCounterAC = () => ({type: 'INCREMENT-COUNTER'} as const)