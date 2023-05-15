import {combineReducers} from "redux";
import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appReducer} from "./app-reducer";
import {vacanciesReducer} from "./vacancies-reducer";
import {cataloguesReducer} from "./catalogues-reducer";
import {vacancyReducer} from "./vacancy-reducer";

const reducers = combineReducers({
    app: appReducer,
    vacancies: vacanciesReducer,
    vacancy: vacancyReducer,
    catalogues: cataloguesReducer,
})

/*let preloadedState
const LCFavoriteVacancies = localStorage.getItem('asdad')
if(LCFavoriteVacancies !== null) preloadedState = JSON.parse(LCFavoriteVacancies)*/

export const store = configureStore({
    reducer: reducers,
/*    preloadedState,*/
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

export type RootStateType = ReturnType<typeof reducers>
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()

//@ts-ignore
window.store = store
/*
store.subscribe(() => {
    localStorage.setItem('asdad', store.getState().vacancies.favoriteVacancies)
})*/
