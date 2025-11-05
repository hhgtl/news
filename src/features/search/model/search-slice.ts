import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

export type initialStateType = {
    searchValue: string
}

const initialState: initialStateType = {
    searchValue: '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    selectors: {
        selectSearchValue: (state) => state.searchValue,
    },
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        }
    },
})

export const { setSearchValue } = searchSlice.actions
export const { selectSearchValue } = searchSlice.selectors
