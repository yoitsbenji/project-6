import Top from './Header'
import ProductList from './ProductList'

import { useParams } from 'react-router-dom'

import { useGetCategoriesQuery } from '../../services/api'

const Category = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetCategoriesQuery(id!)

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Top />
      <ProductList
        cardapio={restaurant.cardapio}
        capa={restaurant.capa}
        tipo={restaurant.tipo}
        item={[]}
        titulo={restaurant.titulo}
      />
    </>
  )
}

export default Category
