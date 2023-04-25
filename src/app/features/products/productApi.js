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
    }),
});

export const { useAddProductMutation, useGetProductsQuery, useGetProductByIdQuery } = productApi;