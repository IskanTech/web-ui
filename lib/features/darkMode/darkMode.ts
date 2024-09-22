
import { createSlice } from '@reduxjs/toolkit'

export interface DarkModeState {
    darkMode: boolean | undefined
}

const initialState = (): DarkModeState => {
    return {
        darkMode: undefined
    }
}

export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        setDarkMode: state => {
            state.darkMode = true
        },
        setLightMode: state => {
            state.darkMode = false
        },
        toggleDarkMode: state => {
            state.darkMode = !state.darkMode
        }
    },
    selectors: {
        selectDarkMode: (state: DarkModeState) => state.darkMode,
    }
})

export const { setDarkMode, setLightMode, toggleDarkMode } = darkModeSlice.actions

export const { selectDarkMode } = darkModeSlice.selectors
