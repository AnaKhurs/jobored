import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: InitStateType = {
    error: null,
    status: 'loading',
    isInitialized: false,
    _id: '',
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload
        },
        setAppStatus: (state, action: PayloadAction<StatusType>) => {
            state.status = action.payload
        },
        setAppInitialized: (state, action: PayloadAction<boolean>) => {
            state.isInitialized = action.payload
        },
    },
})

//types
type InitStateType = {
    error: string | null
    status: StatusType
    isInitialized: boolean
    _id: string
}

export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

//actions
export const {setAppError, setAppStatus} = appSlice.actions

export const appReducer = appSlice.reducer