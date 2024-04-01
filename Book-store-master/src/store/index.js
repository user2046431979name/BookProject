import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { cardsSlice } from "./cardsSlice"; // Импортируем срез, содержащий редуктор и промежуточный слой
import { bookSlice } from "./bookSlice";
import favoriteSlice from "./favoriteSlice";
import { favoritesApi } from "./favoritesApi";
import { laikApi } from "./laikApi";
import authSlice from "./authSlice";
import cards from "./cards";
import book from "./book";
import laik from "./laik";

export const store = configureStore({
    reducer: {
        [cardsSlice.reducerPath]: cardsSlice.reducer,
        category: cardsSlice.reducer, // Предполагаю, что вы хотите использовать один и тот же редуктор для категорий
        [bookSlice.reducerPath]: bookSlice.reducer,
        category: bookSlice.reducer, // Предполагаю, что вы хотите использовать один и тот же редуктор для категорий
        [favoritesApi.reducerPath]: favoritesApi.reducer,
        category: favoritesApi.reducer,
        [laikApi.reducerPath]: laikApi.reducer,
        category: laikApi.reducer,
        auth:authSlice,
        category:cards,
        category:book,
        category:laik,
        favorites: favoriteSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsSlice.middleware, bookSlice.middleware, favoritesApi.middleware, laikApi.middleware),
});

setupListeners(store.dispatch);

export default store;