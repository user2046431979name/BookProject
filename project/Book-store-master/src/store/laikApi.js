import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const laikApi = createApi({
  reducerPath: 'laikApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://aidt.pythonanywhere.com/' }), // Укажите свой путь к API
  endpoints: (builder) => ({
    submitLaik: builder.mutation({
      query: ({laik , userId}) => ({
        url: "laik", // Укажите свой путь для заказов
        method: "POST",
        body: {laik , userId}
      }),
    }),
  }),
});

export const { useSubmitLaikMutation } = laikApi;