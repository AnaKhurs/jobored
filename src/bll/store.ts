import {combineReducers} from "redux";
import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {loginReducer} from "./login-reducer";
import {appReducer} from "./app-reducer";
import {vacanciesReducer} from "./vacancies-reducer";

const reducers = combineReducers({
    login: loginReducer,
    app: appReducer,
    vacancies: vacanciesReducer,
})

export const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

export type RootStateType = ReturnType<typeof reducers>
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()

//@ts-ignore
window.store = store