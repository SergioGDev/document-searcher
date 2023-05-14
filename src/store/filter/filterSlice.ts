import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filterObject: {}
    },
    reducers: {
        restartFilterObject: (state) => {
            state.filterObject = {};
        },
        setFilterObject: (state, { payload }) => {
            state.filterObject = {
                ...state.filterObject,
                [payload.nameSelect]: payload.value
            }
        }
    }
});

export const { restartFilterObject, setFilterObject } = filterSlice.actions;