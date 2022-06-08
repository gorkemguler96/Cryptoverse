import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'b4da784865msh35dc80a85c1773dp18c3cdjsn881f5ef1cab5'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url,headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos:builder.query({
            query:()=> createRequest('/coins')
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi;
