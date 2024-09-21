
import { createSlice } from '@reduxjs/toolkit'

export interface DarkModeState {
    darkMode: boolean
}

const initialState = (): DarkModeState => {
    if (localStorage.getItem("darkMode") !== null) {
        return {
            darkMode: localStorage.getItem("darkMode") === "true"
        }
    }
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    return {
        darkMode: mediaQuery.matches
    }
}

export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        toggleDarkMode: state => {
            if (state.darkMode) {
                localStorage.setItem("darkMode", "false")
            } else {
                localStorage.setItem("darkMode", "true")
            }
            state.darkMode = !state.darkMode
        }
    },
    selectors: {
        selectDarkMode: (state) => state.darkMode,
    }
})
