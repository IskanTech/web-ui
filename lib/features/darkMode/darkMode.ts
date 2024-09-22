
import { createSlice } from '@reduxjs/toolkit'

export interface DarkModeState {
    darkMode: boolean
}

const initialState = (): DarkModeState => {
    /*
    if (localStorage.getItem("darkMode") !== null) {
        return {
            darkMode: localStorage.getItem("darkMode") === "true"
        }
    }
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    return {
        darkMode: mediaQuery.matches
    }
    CANT USE BROWSER QUERIES HERE APPARANELY? NEED TO MOVE THIS    
    */
    return {
        darkMode: false
    }
}

export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        toggleDarkMode: state => {
            state.darkMode = !state.darkMode
        }
    },
    selectors: {
        selectDarkMode: (state: DarkModeState) => state.darkMode,
    }
})

export const { selectDarkMode } = darkModeSlice.selectors
