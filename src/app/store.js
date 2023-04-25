import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import apiSlice from "./features/api/apiSlice";
import cardSlice from "./features/card/cardSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
        card: cardSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store;