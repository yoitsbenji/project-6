import ProductList from './ProductList'
import Top from './Header'

import { useGetHomeRestaurantsQuery } from '../../services/api'

export interface Cardapio {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type Comida = {
  id: number
  foto: string
  preco: number
  porcao: string
  nome: string
  capa: string
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  cardapio: Cardapio[]
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
