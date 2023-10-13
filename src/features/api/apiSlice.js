import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', 
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    tagTypes: ['Women','Men','Season Sale','SingleItem','Filtered'], 
    endpoints: builder => ({
        getWomen: builder.query({
            query: () => '/women',
            providesTags: ['Women']
        }),
        getMen: builder.query({
            query: () => '/men',
            providesTags: ['Men']
        }),
        getSingleItem: builder.query({
            query:({section,id})=>`/${section}/${id}`,
            providesTags: ['SingleItem']
        }),
        getSeasonSale:builder.query({
            query:()=>'/db',
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
            query:()=>'/db',
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