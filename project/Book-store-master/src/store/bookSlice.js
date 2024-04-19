import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bookSlice = createApi({
    reducerPath:"book",
    baseQuery:fetchBaseQuery({baseUrl:"https://aidt.pythonanywhere.com/"}),
    endpoints:(build)=>({
        getAllBook:build.query({
            query:()=>`book`,
            providesTags:['book']
        }),
    })
})

export const {useGetAllBookQuery, useGetProductsQuery} = bookSlice