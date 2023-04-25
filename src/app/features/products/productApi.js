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
            })
        })
    }),
});

export const { useAddProductMutation, useGetProductsQuery } = productApi;