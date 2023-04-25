import apiSlice from "../api/apiSlice";

const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addProduct: builder.mutation({
            query: (product) => ({
                url: '/add-product',
                method: 'POST',
                body: product
            }),
        }),
        getProducts: builder.query({
            query: () => ({
                url: '/products',
            }),
        }),
        getProductById: builder.query({
            query: (id) => ({
                url: `/product/${id}`,
            }),
        }),
        getCardProductById: builder.query({
            query: (id) => ({
                url: `/card-product/${id}`,
            }),
        }),
        getAddToCardProducts: builder.query({
            query: (email) => ({
                url: `/card-products/${email}`,
            }),
        }),
        addToCard: builder.mutation({
            query: (product) => ({
                url: '/add-to-card',
                method: 'POST',
                body: product
            })
        })
    }),
});

export const { useAddProductMutation, useGetProductsQuery, useGetCardProductByIdQuery, useGetAddToCardProductsQuery, useGetProductByIdQuery, useAddToCardMutation } = productApi;