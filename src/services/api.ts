import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

type DeliverPayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      descricao: string
      city: string
      zipcode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      expires: {
        month: number
        year: number
      }
      code: number
    }
  }
}

type Purchase = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getHomeRestaurants: builder.query<Food[], void>({
      query: () => 'restaurantes'
    }),
    getCategories: builder.query<Food, string>({
      query: (id) => `restaurantes/${id}`
    }),
    // https://fake-api-tau.vercel.app/api/efood/checkout
    purchase: builder.mutation<Purchase, DeliverPayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetHomeRestaurantsQuery,
  useGetCategoriesQuery,
  usePurchaseMutation
} = api

export default api
