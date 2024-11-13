import { useGetHomeRestaurantsQuery } from '../../services/api'

import ProductList from './ProductList'
import Top from './Header'

export interface Menu {
  id: number
  image: string
  price: number
  name: string
  description: string
  portion: string
}

export type Food = {
  id: number
  image: string
  price: number
  portion: string
  name: string
  cover: string
  title: string
  highlight: boolean
  type: string
  score: string
  description: string
  menu: Menu[]
}

const Home = () => {
  const { data: restaurant } = useGetHomeRestaurantsQuery()

  if (restaurant) {
    return (
      <>
        <Top />
        <ProductList item={restaurant} />
      </>
    )
  }
  return <h3>Carregando...</h3>
}

export default Home
