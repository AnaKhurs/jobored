import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {setAppError, setAppStatus} from "./app-reducer";
import {vacanciesApi, VacancyType} from "../dal/vacanciesApi";

const vacancySlice = createSlice({
        name: "vacancy",
        initialState: {
            vacancy: {} as VacancyType,
            isLoaded: false,
            id: 100000 as number,
        },
        reducers: {
            setIdVacancy(state, action: PayloadAction<number>) {
                state.id = action.payload;
            },
        },
        extraReducers: builder => {
            builder.addCase(getVacancy.fulfilled, (state, action) => {
                if (action.payload) {
                    state.vacancy = {...action.payload}
                    state.isLoaded = true
                }
            });
        }
    },
);

//Thunk
export const getVacancy = createAsyncThunk(
    "vacancy/getVacancy",
    async (data: any, {dispatch, rejectWithValue}) => {
        dispatch(setAppStatus("loading"));
        try {
            const res = await vacanciesApi.getVacancy(data);
            dispatch(setAppStatus("succeeded"));
            return res.data;
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
);

export const vacancyReducer = vacancySlice.reducer;
export const {setIdVacancy} = vacancySlice.actions;



