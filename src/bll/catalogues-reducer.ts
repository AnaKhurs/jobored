import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {setAppError, setAppStatus} from "./app-reducer";
import {vacanciesApi, VacancyType} from "../dal/vacanciesApi";
import {CatalogType, cataloguesApi} from "../dal/cataloguesApi";

const cataloguesSlice = createSlice({
        name: "catalogues",
        initialState: {
            catalogues: [] as CatalogType[],
        },
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
    async (data: any, {dispatch, rejectWithValue}) => {
        dispatch(setAppStatus("loading"))
        try {
            const res = await cataloguesApi.getCatalogues()
            dispatch(setAppStatus("succeeded"))
            return res.data
        } catch (e: any) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ", Try later")
            console.log({...e})
            dispatch(setAppError(error))
            dispatch(setAppStatus("failed"))
            return rejectWithValue({})
        }
    }
)

export const cataloguesReducer = cataloguesSlice.reducer

