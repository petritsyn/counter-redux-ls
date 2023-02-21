import {Action, combineReducers, legacy_createStore as createStore} from 'redux'
import {ActionsTypes, counterReducer} from "./counter-reducer";
import {ThunkDispatch} from "redux-thunk";

let rootReducer = combineReducers({
    counter: counterReducer
})
export const store = createStore(rootReducer)

store.subscribe(() => console.log(store.getState()))

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export type ThunkAction<
    R, // Return type of the thunk function
    S, // state type used by getState
    E, // any "extra argument" injected into the thunk
    A extends Action // known types of actions that can be dispatched
    > = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppRootStateType,
    unknown,
    ActionsTypes
    >