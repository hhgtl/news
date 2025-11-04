import { configureStore } from "@reduxjs/toolkit"
import {useDispatch, useSelector} from "react-redux";
import {navBarSlice} from "@/features/nav-tabs/model";
import {baseApi} from "@/shared/api";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        [navBarSlice.name]: navBarSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()