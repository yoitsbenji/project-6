import { useParams } from 'react-router-dom'

import { useGetCategoriesQuery } from '../../services/api'

import Top from './Header'
import ProductList from './ProductList'

const Category = () => {
  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurant } = useGetCategoriesQuery(id!)

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Top />
      <ProductList
        menu={restaurant.menu}
        cover={restaurant.cover}
        type={restaurant.type}
        item={[]}
        title={restaurant.title}
      />
    </>
  )
}

export default Category
