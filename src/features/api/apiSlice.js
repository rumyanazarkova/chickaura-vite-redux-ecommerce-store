import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', 
    baseQuery: fetchBaseQuery({ baseUrl: 'https://chickaura.netlify.app/.netlify/functions/fetch-db' }),
    tagTypes: ['Women','Men','Season Sale','SingleItem','Filtered'], 
    endpoints: builder => ({
        getWomen: builder.query({
            query: () => `/db?section=women`,
            providesTags: ['Women']
        }),
        getMen: builder.query({
            query: () => '/db?section=men',
            providesTags: ['Men']
        }),
        getSingleItem: builder.query({
            query: ({ section, id }) => `/db?section=${section}&id=${id}`,
            providesTags: ['SingleItem']
        }),
        getSeasonSale:builder.query({
            query:()=>'/',
            providesTags:['Season Sale'],
            transformErrorResponse:(response)=>{
                const combinedData=[
                    ...response.women,
                    ...response.men
                ]

                return combinedData
              
            }
        }),
        getProductsForFilter: builder.query({
            query: ({section}) => `/${section}`,
            providesTags: ['Filtered']
        }),
        getProductsForHome:builder.query({
            query:()=>'/',
            transformErrorResponse:(response)=>{
                const combinedData=[
                    ...response.women,
                    ...response.men
                ]

                return combinedData
              
            }
        }),

        })
    })


export const {
    useGetWomenQuery,
    useGetMenQuery,
    useGetSingleItemQuery,
    useGetSeasonSaleQuery,
    useGetProductsForFilterQuery,
    useGetProductsForHomeQuery
 
} = apiSlice