import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI} from "../dal/authApi";
import {getVacancies} from "./vacancies-reducer";

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
            localStorage.setItem("token", data.access_token) //todo
            dispatch(getVacancies({}))//toDo
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
    error: string | null
    status: StatusType
    isInitialized: boolean
}

export type StatusType = "idle" | "loading" | "succeeded" | "failed"

//actions
export const {setAppError, setAppStatus, setAppInitialized} = appSlice.actions

export const appReducer = appSlice.reducer