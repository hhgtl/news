import {baseApi} from "@/shared/api";
import type {HeadlineResponse} from "@/features/main-headline/api/main-headline-types.ts";

export const mainHeadlineApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMainHeadline: build.query<HeadlineResponse, { category: string, searchPhrase: string }>({
            query: ({category, searchPhrase}) => {
                return `/top-headlines?country=us&category=${category}&q=${searchPhrase}&apiKey=${import.meta.env.VITE_API_KEY}`
            },
        }),
    }),
})

export const { useGetMainHeadlineQuery } = mainHeadlineApi