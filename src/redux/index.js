import { configureStore, createSlice } from "@reduxjs/toolkit"
import Papa from "papaparse"

const initialState = {
    competitions: [],
    workshops: [],
    prefest: [],
    talks: [],
    selectedEvent: {}
}

export const Slice = createSlice({
    name: "DisplayData",
    initialState,
    reducers: {
        initializeCompetitions: (state, action) => {
            state.competitions = action.payload
        },
        initializeWorkshops: (state, action) => {
            state.workshops = action.payload
        },
        initializeTalks: (state, action) => {
            state.talks = action.payload
        },
        initializePreFest: (state, action) => {
            state.prefest = action.payload
        },
        initializeSelectedEvent: (state, action) => {
            state.selectedEvent = action.payload
            console.log();
        }
    }
})

export const Actions = Slice.actions

export default Slice.reducer

export const AppStore = configureStore ({
    reducer: {
        displayData: Slice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    })
})