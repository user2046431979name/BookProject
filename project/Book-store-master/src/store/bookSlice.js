import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bookSlice = createApi({
    reducerPath:"book",
    baseQuery:fetchBaseQuery({baseUrl:"http://127.0.0.1:8000"}),
    endpoints:(build)=>({
        getAllBook:build.query({
            query:()=>`book`,
            providesTags:['book']
        }),
    })
})

export const {useGetAllBookQuery, useGetProductsQuery} = bookSlice