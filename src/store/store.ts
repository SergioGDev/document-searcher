import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./filter";

export const store = configureStore({
    reducer: {
        filter: filterSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch