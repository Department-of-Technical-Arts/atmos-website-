import { configureStore, createSlice } from "@reduxjs/toolkit"
import Papa from "papaparse"

const initialState = {
    competitions: [],
    workshops: [],
    prefest: []
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
        }
    }
})

export const getCompetitions = () => (dispatch) => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQDM_B5Mbm4oE1Xn9e_lCYAS5eIWJi-Q-lCbsNsAcLPI-vxasaFAI0NeJQNfU8Mlvx2dXKZpvt99yS_/pub?output=csv", {
        download: true,
        header: true,
        complete: (results) => {
            dispatch(Actions.initializeCompetitions(results.data))
        }
    })
}

export const getWorkshops = () => (dispatch) => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTbwA6Nvy_YMR6psLNstZpoNM6vOOfO7TGEjiyrNHfGqkK_okk-3FraMri13nxR_x4V1l5alSQmQ8Co/pub?output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                dispatch(Actions.initializeWorkshops(results.data))
            }
        })
}

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