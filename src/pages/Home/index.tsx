import { useGetHomeRestaurantsQuery } from '../../services/api'
import ProductList from './ProductList'
import Top from './Header'

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
