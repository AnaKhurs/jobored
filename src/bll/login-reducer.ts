import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {authAPI} from "./../dal/authApi";
import {setAppError, setAppStatus} from "./app-reducer";


const initialState: InitStateType = {
    isLoggedIn: false,
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        isLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload
        },
    },
})


//Thunk
export const loginTC = createAsyncThunk(
    "login/loginTC",
    async (params: { login: string, password: string, client_id: number, client_secret: string, hr: number }, {dispatch}) => {
        try {
            dispatch(setAppStatus("loading"))
            let {data} = await authAPI.login(params.login, params.password, params.client_id, params.client_secret, params.hr)
            dispatch(isLoggedIn(true))
            /*            dispatch(setUserProfile(data))*/
            dispatch(setAppStatus("succeeded"))
        } catch (e: any) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ", Try later")
            dispatch(setAppError(error))
            dispatch(setAppStatus("failed"))
        }
    }
)


//types
type InitStateType = {
    isLoggedIn: boolean
}

//actions
export const {isLoggedIn} = loginSlice.actions

export const loginReducer = loginSlice.reducer