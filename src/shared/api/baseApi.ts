import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: async (args, api, extraOptions) => {
        const result = await fetchBaseQuery({
            baseUrl: import.meta.env.VITE_BASE_URL,
            prepareHeaders: (headers) => {
                headers.set("API-KEY", import.meta.env.VITE_API_KEY)
                return headers
            },
        })(args, api, extraOptions)

        console.error(api, result)

        return result
    },
    endpoints: () => ({}),
})