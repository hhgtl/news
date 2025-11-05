import {baseApi} from "@/shared/api";
import type {HeadlineResponse} from "@/features/main-headline/api/main-headline-types.ts";

export const mainHeadlineApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMainHeadline: build.query<HeadlineResponse, { category: string, searchPhrase: string }>({
            query: ({category, searchPhrase}) => {
                return `/top-headlines?country=us&category=${category}&q=${searchPhrase}&apiKey=7aaf407c36c34091bd531bb0137eeb3f`
            },
        }),
    }),
})

export const { useGetMainHeadlineQuery } = mainHeadlineApi