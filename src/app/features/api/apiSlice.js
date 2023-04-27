import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000",
        headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${localStorage.getItem('token')}`
        },
    }),
    tagTypes: ["PRODUCTS"],
    endpoints: (builder) => ({}),
})


export default apiSlice;