import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI} from "../dal/authApi";

const initialState: InitialStateType = {
    error: null,
    isInitialized: false,
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setAppInitialized: (state, action: PayloadAction<boolean>) => {
            state.isInitialized = action.payload
        },
        setAppError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload
        },
    },
})

//Thunk
export const initializeApp = createAsyncThunk(
    "app/initializeApp",
    async (params: { login: string, password: string, client_id: number, client_secret: string, hr: number }, {dispatch}) => {
        try {
            let {data} = await authAPI.login(params.login, params.password, params.client_id, params.client_secret, params.hr)
            dispatch(setAppInitialized(true))
            localStorage.setItem("access_token", data.access_token)
            localStorage.setItem("refresh_token", data.refresh_token)
            localStorage.setItem("ttl", data.ttl.toString())
        } catch (e: any) {
            const error = e.response.data + ". Try later"
            dispatch(setAppError(error))
        }
    }
)

export const refreshApp = createAsyncThunk(
    "app/initializeApp",
    async (params: { refresh_token: string, client_id: number, client_secret: string, }, {dispatch}) => {
        try {
            let {data} = await authAPI.refreshToken(params.refresh_token, params.client_id, params.client_secret,)
            localStorage.setItem("access_token", data.access_token)
            localStorage.setItem("refresh_token", data.refresh_token)
            localStorage.setItem("ttl", data.ttl.toString())
            localStorage.setItem("expires_in", data.expires_in.toString())
            dispatch(setAppInitialized(true))
        } catch (e: any) {
            const error = e.response.data + ". Try later"
            dispatch(setAppError(error))
        }
    }
)

//types
type InitialStateType = {
    error: string | null
    isInitialized: boolean
}

//actions
export const {setAppError, setAppInitialized} = appSlice.actions

export const appReducer = appSlice.reducer