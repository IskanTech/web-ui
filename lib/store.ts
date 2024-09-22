import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { darkModeSlice } from '@/lib/features/darkMode/darkMode'

const rootReducer = combineReducers({
  darkMode: darkModeSlice.reducer,
})
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]
export type RootState = ReturnType<typeof rootReducer>
