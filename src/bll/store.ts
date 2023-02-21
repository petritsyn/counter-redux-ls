import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import {ActionsTypes, counterReducer} from "./counter-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {loadState, saveState} from "../utils/localStorage";

let rootReducer = combineReducers({
    counter: counterReducer
})
export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, ActionsTypes>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, ActionsTypes>