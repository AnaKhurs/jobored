import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI} from "../dal/authApi";

const initialState: InitStateType = {
    error: null,
    status: "loading",
    isInitialized: true,
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
        setAppStatus: (state, action: PayloadAction<StatusType>) => {
            state.status = action.payload
        },
    },
})

//Thunk
export const initializeApp = createAsyncThunk(
    "app/initializeApp",
    async (params: { login: string, password: string, client_id: number, client_secret: string, hr: number }, {dispatch}) => {
        try {
            dispatch(setAppStatus("loading"))
            let {data} = await authAPI.login(params.login, params.password, params.client_id, params.client_secret, params.hr)
            dispatch(setAppInitialized(true))
            localStorage.setItem("access_token", data.access_token)
            localStorage.setItem("refresh_token", data.refresh_token)
            localStorage.setItem("ttl", data.ttl.toString())
            localStorage.setItem("expires_in", data.expires_in.toString())
            dispatch(setAppStatus("succeeded"))
        } catch (e: any) {
            const error = e.response.data + ". Try later"
            dispatch(setAppError(error))
            dispatch(setAppStatus("failed"))
        }
    }
)

export const refreshApp = createAsyncThunk(
    "app/initializeApp",
    async (params: { refresh_token: string, client_id: number, client_secret: string, }, {dispatch}) => {
        try {
            dispatch(setAppStatus("loading"))
            let {data} = await authAPI.refreshToken(params.refresh_token, params.client_id, params.client_secret,)
            localStorage.setItem("access_token", data.access_token)
            localStorage.setItem("refresh_token", data.refresh_token)
            localStorage.setItem("ttl", data.ttl.toString())
            localStorage.setItem("expires_in", data.expires_in.toString())
            dispatch(setAppInitialized(true))
            dispatch(setAppStatus("succeeded"))
        } catch (e: any) {
            const error = e.response.data + ". Try later"
            dispatch(setAppError(error))
            dispatch(setAppStatus("failed"))
        }
    }
)

//types
type InitStateType = {
    error: string | null
    status: StatusType
    isInitialized: boolean
}

export type StatusType = "idle" | "loading" | "succeeded" | "failed"

//actions
export const {setAppError, setAppStatus, setAppInitialized,} = appSlice.actions

export const appReducer = appSlice.reducer