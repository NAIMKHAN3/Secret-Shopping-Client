import apiSlice from "../api/apiSlice";

const paymentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postPaymentInfo: builder.mutation({
            query: (info) => ({
                url: '/payment-info',
                method: 'POST',
                body: info
            })
        })
    })
})

export const { usePostPaymentInfoMutation } = paymentApi;