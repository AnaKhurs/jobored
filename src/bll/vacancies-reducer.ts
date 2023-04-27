import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {setAppError, setAppStatus} from "./app-reducer";
import {vacanciesApi, VacancyType} from "../dal/vacanciesApi";

const vacanciesSlice = createSlice({
        name: "vacancies",
        initialState: {
            vacanciesData: {
                vacancies: [] as VacancyType[],
                total: 0 as number,
                page: 1 as number,
                pageCount: 4 as number,
                more: false,
            },
            packId: null as string | null,
            isLoaded: false,
        },
        reducers: {},
        extraReducers: builder => {
            builder.addCase(getVacancies.fulfilled, (state, action) => {
                if (action.payload) {
                    state.vacanciesData.vacancies = [...action.payload.objects]
                    state.vacanciesData.total = action.payload.total
                    state.isLoaded = true
                }
            });
        }
    },
)

//Thunk
export const getVacancies = createAsyncThunk(
    "packs/getVacancies",
    async (data: any, {dispatch, rejectWithValue}) => {
        dispatch(setAppStatus("loading"))
        try {
            const res = await vacanciesApi.getVacancies(data)

            //console.log('ss', res.data)

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

export const vacanciesReducer = vacanciesSlice.reducer

