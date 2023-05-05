import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {setAppError, setAppStatus} from "./app-reducer";
import {vacanciesApi, VacancyType} from "../dal/vacanciesApi";

type VacanciesDataType = {
    vacancies: VacancyType[]
    published: number
    keyword: string
    payment_to: number | "" | null | undefined
    payment_from: number | "" | null | undefined
    catalogues: null | number | undefined
    no_agreement: number
    total: number
    page: number
    count: number
}

const vacanciesSlice = createSlice({
        name: "vacancies",
        initialState: {
            vacanciesData: {
                vacancies: [],
                published: 1,
                keyword: "",
                payment_to: null,
                payment_from: null,
                catalogues: null,
                no_agreement: 1, //toDo
                total: 0,
                page: 1, //toDo
                count: 4,
            } as VacanciesDataType,
            isLoaded: false,
        },
        reducers: {
            setFilter(state, action: PayloadAction<{ payment_to?: number | '' | null, payment_from?: number | '' | null, catalogues?: number | null }>) {
                state.vacanciesData.payment_to = action.payload.payment_to; //toDo
                state.vacanciesData.payment_from = action.payload.payment_from;
                state.vacanciesData.catalogues = action.payload.catalogues;
            },
            setPage(state, action: PayloadAction<number>) {
                state.vacanciesData.page = action.payload;
            },
        },
        extraReducers: builder => {
            builder.addCase(getVacancies.fulfilled, (state, action) => {
                if (action.payload) {
                    state.vacanciesData.vacancies = [...action.payload.objects]
                    state.vacanciesData.total = action.payload.total
                    state.isLoaded = true
                };
            });
        }
    },
);

//Thunk
export const getVacancies = createAsyncThunk(
    "vacancies/getVacancies",
    async (data: any, {dispatch, rejectWithValue}) => {
        dispatch(setAppStatus("loading"));
        try {
            const res = await vacanciesApi.getVacancies(data);
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

export const vacanciesReducer = vacanciesSlice.reducer;
export const {setFilter, setPage} = vacanciesSlice.actions;

