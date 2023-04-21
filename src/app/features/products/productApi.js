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
    }),
});

export const { useAddProductMutation } = productApi;