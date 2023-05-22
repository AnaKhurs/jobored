import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {setAppError} from "./app-reducer";
import {CatalogType, cataloguesApi} from "../dal/cataloguesApi";

type InitialStateType = {
    catalogues: CatalogType[] | undefined
}

const initialState: InitialStateType = {
    catalogues: undefined
}

const cataloguesSlice = createSlice({
        name: "catalogues",
        initialState: initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(getCatalogues.fulfilled, (state, action) => {
                if (action.payload) {
                    state.catalogues = [...action.payload]
                }
            });
        }
    },
)

//Thunk
export const getCatalogues = createAsyncThunk(
    "catalogues/getCatalogues",
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const res = await cataloguesApi.getCatalogues()
            return res.data
        } catch (e: any) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ", Try later")
            console.log({...e})
            dispatch(setAppError(error))
            return rejectWithValue({})
        }
    }
)

export const cataloguesReducer = cataloguesSlice.reducer

