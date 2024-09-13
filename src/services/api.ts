import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Comida } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getHomeRestaurants: builder.query<Comida[], void>({
      query: () => 'restaurantes'
    }),
    getCategories: builder.query<Comida, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetHomeRestaurantsQuery, useGetCategoriesQuery } = api

export default api
