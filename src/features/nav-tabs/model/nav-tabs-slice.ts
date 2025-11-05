import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

export type ValueType = 'general' |'entertainment' | 'business' | 'health' | 'science' | 'sports' | 'technology'

export type initialStateType = {
    currentTabValue: ValueType
}

const initialState: initialStateType = {
    currentTabValue: 'general',
}

export const navBarSlice = createSlice({
    name: 'navTabs',
    initialState,
    selectors: {
        selectCurrentTabValue: (state) => state.currentTabValue,
    },
    reducers: {
        setTabValue: (state, action: PayloadAction<ValueType>) => {
            state.currentTabValue = action.payload
        }
    },
})

export const { setTabValue } = navBarSlice.actions
export const { selectCurrentTabValue } = navBarSlice.selectors
