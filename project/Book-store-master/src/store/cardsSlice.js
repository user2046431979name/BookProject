import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const cardsSlice = createApi({
    reducerPath:"сards",
    baseQuery:fetchBaseQuery({baseUrl:"http://127.0.0.1:8000"}),
    endpoints:(build)=>({
        getAllCards:build.query({
            query:()=>`cards`,
            providesTags:['cards']
        }),
        getProduct: build.query({
            query:(id)=> `cards/${id}`
        }),
        addProduct:build.mutation({
            query:(cards)=>({
                url:"cards",
                method:"POST",
                body:cards
            }),
            invalidatesTags:['cards']
        }),
        registerUser:build.mutation({
            query:(user)=>({
                url:"api/register/",
                method:"POST",
                body:user,
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": cookies.get("csrftoken"),
                  },
            })
        }),
        loginUser:build.mutation({
            query:(user)=>({
                url:"api/login/",
                method:"POST",
                body: user,
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": cookies.get("csrftoken"),
                  },
            })
        })
    })
})

export const {useGetAllCardsQuery, useGetProductQuery, useRegisterUserMutation, useLoginUserMutation} = cardsSlice